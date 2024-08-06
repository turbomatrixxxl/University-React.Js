import React from 'react';

export default function Paper(props) {
  return (
    <div key={props.key} className={props.className}>
      {props.children}
    </div>
  );
}
