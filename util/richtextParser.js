import React from 'react';

const parse = ({ content }) => {
  if (typeof content !== 'undefined') {
    let string = ``;

    if (content.nodeType === 'document') {
      const child = content.content.map(a => parse({ content: a }));
      string = `<div>${child.join('')}</div>`;
    } else if (content.nodeType === 'paragraph') {
      const child = content.content.map(a => parse({ content: a }));
      string = `<p>${child.join('')}</p>`;
    } else if (content.nodeType === 'text') {
      string = content.value;
    } else if (content.nodeType === 'embedded-asset-block') {
      console.log(content.data);
    }

    return string;
  }
  return ``;
};

const RichTextParser = content => {
  const endResult = parse(content);
  console.log(endResult);
  return <p>oi</p>;
};

export default RichTextParser;
