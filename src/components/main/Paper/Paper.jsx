import React from 'react';

export default function Paper(props) {
  return <div className={props.className}>{props.children}</div>;
}
