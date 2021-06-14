import * as React from 'react';

function SvgEditSlash(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M19.85 3.794a2.75 2.75 0 00-3.868.163l-.012.013-3.5 3.5L13 8l-.53-.53-.5.5a.75.75 0 001.06 1.06l.5-.5 1.422-1.422a3.428 3.428 0 001.94 1.94L15.47 10.47l-.5.5a.75.75 0 001.06 1.06l.5-.5 3.5-3.5.013-.012c.067-.068.12-.12.163-.168a2.75 2.75 0 00-.163-3.868l-.012-.012-.013-.013a5.104 5.104 0 00-.168-.163zm-1.687 3.983l.807-.807c.085-.086.11-.11.127-.13a1.25 1.25 0 000-1.68 4.709 4.709 0 00-.127-.13 4.727 4.727 0 00-.13-.127 1.25 1.25 0 00-1.68 0 4.662 4.662 0 00-.13.127l-.807.807a1.903 1.903 0 001.94 1.94zM4.53 3.47a.75.75 0 00-1.06 1.06l5.97 5.97-3.403 3.403-.074.073c-.708.708-1.166 1.166-1.485 1.729-.318.563-.475 1.19-.718 2.162l-.025.1-.463 1.851a.75.75 0 00.91.91l1.85-.463.101-.025c.972-.243 1.6-.4 2.162-.718.563-.32 1.02-.777 1.729-1.485l.073-.073L13.5 14.56l5.97 5.97a.75.75 0 101.06-1.061l-6.5-6.5-1.5-1.5-1.5-1.5-6.5-6.5zm2.567 11.493l3.403-3.402.97.97.97.969-3.403 3.403c-.807.806-1.117 1.107-1.48 1.313-.365.206-.782.317-1.889.594l-.637.16.16-.638c.276-1.107.387-1.524.593-1.888.206-.364.506-.674 1.313-1.48z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEditSlash;