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
        fill="currentcolor"
        fillRule="evenodd"
        d="M16.15 2.793a2.75 2.75 0 013.7 0c.048.045.1.097.168.164l.012.013.013.012c.067.068.119.12.163.168a2.75 2.75 0 010 3.7c-.044.049-.096.1-.163.168l-.013.012-6.933 6.933-.074.074c-.708.708-1.165 1.166-1.728 1.485-.563.318-1.19.475-2.162.718l-.101.025-1.85.463a.75.75 0 01-.91-.91l.463-1.85.025-.101c.243-.972.4-1.6.718-2.162.319-.563.776-1.02 1.485-1.729l.073-.073L15.97 2.97l.012-.013c.067-.067.12-.12.168-.163zM4 20.25a.75.75 0 000 1.5h16a.75.75 0 000-1.5H4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgEdit2;
