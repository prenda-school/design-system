import * as React from 'react';

function SvgPresentationLine(props) {
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
        d="M1.25 3A.75.75 0 012 2.25h20a.75.75 0 010 1.5h-2V9c0 2.828 0 4.243-.879 5.121C18.243 15 16.828 15 14 15h-1.25v2.575l4.636 2.782a.75.75 0 11-.772 1.286l-3.864-2.318V21a.75.75 0 01-1.5 0v-1.675l-3.864 2.318a.75.75 0 11-.772-1.286l4.636-2.782V15H10c-2.828 0-4.243 0-5.121-.879C4 13.243 4 11.828 4 9V3.75H2A.75.75 0 011.25 3zm15.166 5.624a.75.75 0 00-.832-1.248l-2.489 1.659L11.53 7.47a.75.75 0 00-.946-.094l-3 2a.75.75 0 10.832 1.248l2.488-1.659 1.565 1.565a.75.75 0 00.947.094l3-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPresentationLine;
