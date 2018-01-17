import React from "react";
import ReactAutosuggest from 'react-autosuggest';
import { isObject, isUndefined, isFunction } from "lodash";

const DEFAULT_THEME = {
  container: 'db dib-ns w-100 w-auto-ns relative bg-white f6 mb2 mr2',
  containerOpen: '',
  input: 'ph3 pv2 outline-0 w4-ns bn w-100',
  inputOpen: 'react-autosuggest__input--open',
  inputFocused: 'react-autosuggest__input--focused',
  suggestionsContainer: '',
  suggestionsContainerOpen: 'absolute w-100',
  suggestionsList: 'list ma0 pa0 maxH4 overflow-auto bg-white black bt b--black-50',
  suggestion: 'pv1 ph3 tl',
  suggestionFirst: '',
  suggestionHighlighted: 'bg-black-10',
  sectionContainer: 'react-autosuggest__section-container',
  sectionContainerFirst: 'react-autosuggest__section-container--first',
  sectionTitle: 'react-autosuggest__section-title',
};

class Autosuggest extends React.Component {
  constructor(props) {
    super(props);

    const defaultValue = this.getSuggestionLabel(props.defaultValue) || "";

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      lastSelected: defaultValue,
      value: defaultValue,
      suggestions: []
    };
  }

  get theme() {
    const { theme } = this.props;

    if (isFunction(theme)) return theme({
      ...this.props,
      theme: DEFAULT_THEME,
    });

    return theme;
  }

  shouldRenderSuggestions = value => true;

  handleSelect = (e, { suggestion }) => {
    const label = this.getSuggestionLabel(suggestion);
    const value = this.getSuggestionValue(suggestion);

    this.setState({ lastSelected: value });

    this.props.onSelect(e, { value, label });
  };

  handleInputFocus = (e) => {
    e.target.select();
  };

  handleInputBlur = (e) => {
    const { lastSelected } = this.state;

    this.setState({
      value: lastSelected,
    });
  };

  getSuggestionValue = suggestion => {
    if (!isObject(suggestion)) return suggestion;

    return isUndefined(suggestion.value) ? suggestion.label : suggestion.value
  };

  getSuggestionLabel = suggestion => {
    if (!isObject(suggestion)) return suggestion;

    return isUndefined(suggestion.label) ? suggestion.value : suggestion.label;
  };

  getSuggestions = value => {
    const { options } = this.props;
    const inputValue = value.trim().toLowerCase();

    return inputValue.length === 0 ? options : options.filter(option => {
      const label = this.getSuggestionLabel(option).toLowerCase();

      return label.startsWith(inputValue);
    });
  };

  renderSuggestion = suggestion => (
    <div>
      {this.getSuggestionLabel(suggestion)}
    </div>
  );

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const { defaultValue, options, onSelect, placeholder, theme, width, ...props } = this.props;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder,
      value,
      onChange: this.onChange,
      onFocus: this.handleInputFocus,
      onBlur: this.handleInputBlur,
    };

    return (
      <ReactAutosuggest
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={this.handleSelect}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        shouldRenderSuggestions={this.shouldRenderSuggestions}
        inputProps={inputProps}
        highlightFirstSuggestion
        theme={this.theme}
        {...props}
        suggestions={suggestions}
      />
    );
  }
}

Autosuggest.defaultProps = {
  defaultValue: "",
  placeholder: "",
  options: [],
  onSelect: (e, props) => undefined,
  width: 4,
  theme: DEFAULT_THEME,
};

export default Autosuggest;