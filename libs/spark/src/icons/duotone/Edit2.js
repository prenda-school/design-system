import * as React from 'react';

function SvgEdit2(props) {
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
        d="M16.5 3.5l-6.933 6.933c-.779.779-1.168 1.168-1.436 1.641-.268.473-.402 1.008-.669 2.076L7 16l1.85-.463c1.068-.267 1.602-.4 2.076-.668.473-.268.862-.657 1.64-1.436L19.5 6.5c.08-.08.12-.12.151-.155a2 2 0 000-2.69c-.032-.036-.072-.075-.151-.155-.08-.08-.12-.12-.155-.151a2 2 0 00-2.69 0 3.39 3.39 0 00-.155.151z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M18.84 3.904a1.25 1.25 0 00-1.68 0 4.745 4.745 0 00-.13.126l-.307.307a1.903 1.903 0 001.94 1.94l.306-.307c.086-.086.11-.11.127-.13a1.25 1.25 0 000-1.68 4.649 4.649 0 00-.127-.13 4.662 4.662 0 00-.128-.126zm-1.448 3.644a3.428 3.428 0 01-1.94-1.94l-5.355 5.356c-.807.806-1.107 1.116-1.314 1.48-.206.364-.316.78-.593 1.888l-.16.637.638-.16c1.107-.276 1.524-.386 1.888-.593.364-.206.674-.506 1.48-1.313l5.356-5.355zM16.15 2.794a2.75 2.75 0 013.7 0c.048.044.1.096.168.163l.012.013.013.012c.067.068.119.12.163.168a2.75 2.75 0 01-.163 3.868l-.013.012-6.933 6.933-.074.074c-.708.708-1.165 1.166-1.728 1.485-.563.318-1.19.475-2.162.718l-.101.025-1.85.463a.75.75 0 01-.91-.91l.463-1.85.025-.101c.243-.972.4-1.6.718-2.162.319-.563.776-1.02 1.485-1.729l.073-.073L15.97 2.97l.012-.013c.067-.067.12-.12.168-.163zM3.25 21a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEdit2;