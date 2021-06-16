import * as React from 'react';

function SvgCheckboxSquare(props) {
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
        d="M4.172 4.172C3 5.343 3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-2c0-2.094 0-3.607-.2-4.739l1.73-1.73a.75.75 0 00-1.06-1.061l-1.224 1.224a2.978 2.978 0 00-.418-.522C18.657 3 16.771 3 13 3h-2C7.229 3 5.343 3 4.172 4.172zm16.074.522L12 12.939l-2.47-2.47a.75.75 0 00-1.06 1.061l3 3a.75.75 0 001.06 0l8.27-8.269c-.112-.628-.285-1.14-.555-1.567z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCheckboxSquare;
