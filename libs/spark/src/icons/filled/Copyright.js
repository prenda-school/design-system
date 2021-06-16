import * as React from 'react';

function SvgCopyright(props) {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.111 5.25C9.307 7.25 7.25 9.397 7.25 12s2.057 4.75 4.639 4.75a4.552 4.552 0 002.792-.956c.35-.271.662-.592.925-.951a.75.75 0 10-1.212-.885 3.22 3.22 0 01-.63.649 3.052 3.052 0 01-1.875.643c-1.714 0-3.139-1.435-3.139-3.25s1.425-3.25 3.139-3.25c.702 0 1.35.238 1.875.643.238.184.45.403.63.649a.75.75 0 101.212-.885 4.718 4.718 0 00-.925-.95 4.552 4.552 0 00-2.792-.957z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCopyright;
