import * as React from 'react';

function SvgTag(props) {
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
        d="M15 18h-4.981c-1.342 0-2.014 0-2.631-.206a4.02 4.02 0 01-.516-.214c-.583-.29-1.058-.765-2.007-1.715-1.636-1.635-2.453-2.453-2.593-3.447a3 3 0 010-.836c.14-.994.957-1.811 2.593-3.447.95-.95 1.424-1.424 2.007-1.715a4 4 0 01.516-.213C8.005 6 8.677 6 10.018 6H15c2.828 0 4.242 0 5.121.879C21 7.757 21 9.172 21 12c0 2.829 0 4.243-.879 5.121-.878.88-2.293.88-5.121.88zm-5-4a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTag;
