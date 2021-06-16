import * as React from 'react';

function SvgThumbsUp(props) {
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
        d="M6.99 8.869l5.555-6.349a1.523 1.523 0 012.545 1.602L13 9h2.763c2.405 0 3.608 0 4.208.786.6.786.284 1.946-.349 4.267l-.818 3c-.387 1.417-.58 2.126-1.118 2.536-.537.411-1.272.411-2.741.411H10c-1.886 0-2.828 0-3.414-.586C6 18.828 6 17.886 6 16v-4.497c0-.743 0-1.115.128-1.455.128-.34.372-.62.862-1.18zM3.75 10a.75.75 0 00-1.5 0v10a.75.75 0 001.5 0V10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgThumbsUp;
