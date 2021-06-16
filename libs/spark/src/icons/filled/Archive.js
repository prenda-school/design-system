import * as React from 'react';

function SvgArchive(props) {
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
        d="M2.076 3.617C2 3.801 2 4.034 2 4.5s0 .699.076.883a1 1 0 00.541.54C2.801 6 3.034 6 3.5 6h17c.466 0 .699 0 .883-.076a1 1 0 00.54-.541C22 5.199 22 4.966 22 4.5s0-.699-.076-.883a1 1 0 00-.541-.54C21.199 3 20.966 3 20.5 3h-17c-.466 0-.699 0-.883.076a1 1 0 00-.54.541zM4 7h16v8c0 2.828 0 4.243-.879 5.121C18.243 21 16.828 21 14 21h-4c-2.828 0-4.243 0-5.121-.879C4 19.243 4 17.828 4 15V7zm4.25 3A.75.75 0 019 9.25h6a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgArchive;
