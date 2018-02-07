import React from "react";

const Feel = ({ gif, caption }) => (
  <div>
    <h1>{caption}</h1>

    <img src={`https://media1.giphy.com/media/${gif}/200.gif`} alt={caption} />
  </div>
);

Feel.defaultProps = {
  gif: "",
  caption: "",
};

export default Feel;
