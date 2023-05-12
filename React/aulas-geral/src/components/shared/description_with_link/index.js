import React, { Fragment } from "react";

const DescriptionWithLink = (props) => {
  if (!props.description) return null;

  if (props.link) {
    return (
      <Fragment>
        <p>{props.description}</p>
        <p>
          <a href={props.link}>{props.img_url}</a>
        </p>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <p>
          <u>{props.description}</u>
        </p>
      </Fragment>
    );
  }
};

export default DescriptionWithLink;
