import React from "react";
import { Header, Segment } from "semantic-ui-react";

const Feel = ({ gif, caption }) => (
  <Segment basic>
    <Header inverted>{caption}</Header>

    <img src={`https://media1.giphy.com/media/${gif}/200.gif`} alt={caption} />
  </Segment>
);

Feel.defaultProps = {
  gif: "",
  caption: "",
};

export default Feel;
