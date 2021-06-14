import * as React from 'react';

function SvgEdit3(props) {
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
        fill={props.fillColor || '#F0F1F2'}
        d="M16.5 4.5l-9.933 9.933c-.779.779-1.168 1.168-1.436 1.641-.268.473-.401 1.007-.668 2.076L4 20l1.85-.463c1.069-.267 1.603-.4 2.076-.668.473-.268.862-.657 1.64-1.436L19.5 7.5c.08-.08.12-.12.151-.155a2 2 0 000-2.69 5.145 5.145 0 00-.15-.155c-.08-.08-.12-.12-.156-.151a2 2 0 00-2.69 0 5.933 5.933 0 00-.155.15V4.5z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M17.16 4.904a1.25 1.25 0 011.68 0c.02.017.044.04.13.126.085.086.11.11.127.13a1.25 1.25 0 010 1.68 4.649 4.649 0 01-.127.13l-.807.807a1.903 1.903 0 01-1.94-1.94l.808-.807c.085-.085.11-.11.128-.126zm-2.208 2.204l-7.855 7.856c-.807.806-1.107 1.116-1.313 1.48-.206.364-.317.78-.594 1.888l-.16.637.638-.16c1.107-.276 1.524-.387 1.888-.593.364-.206.674-.506 1.48-1.313l7.856-7.855a3.428 3.428 0 01-1.94-1.94zm4.898-3.314a2.75 2.75 0 00-3.868.163l-.012.013-9.933 9.933-.074.073c-.708.708-1.166 1.166-1.485 1.729-.318.563-.475 1.19-.718 2.162l-.025.1-.463 1.851a.75.75 0 00.91.91l1.85-.463.101-.025c.972-.243 1.6-.4 2.162-.718.563-.32 1.02-.777 1.729-1.485l.073-.073L20.03 8.03l.013-.012c.067-.068.12-.12.163-.168a2.75 2.75 0 00-.163-3.868l-.012-.012-.013-.013a5.11 5.11 0 00-.168-.163z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEdit3;