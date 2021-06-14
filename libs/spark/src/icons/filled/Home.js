import * as React from 'react';

function SvgHome(props) {
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
        d="M5 11.616c0-.539-.709-.847-1.09-.466l-1.38 1.38a.75.75 0 11-1.06-1.06l7.17-7.172.037-.037c.635-.635 1.165-1.165 1.642-1.529.504-.384 1.036-.654 1.68-.654.644 0 1.176.27 1.68.654.477.364 1.007.894 1.642 1.53l.037.036 7.171 7.172a.75.75 0 01-1.06 1.06l-1.38-1.38c-.381-.38-1.09-.073-1.09.466V15c0 2.828 0 4.243-.879 5.121C17.243 21 15.828 21 13 21h-2c-2.828 0-4.243 0-5.121-.879C5 19.243 5 17.828 5 15v-3.384z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgHome;
