import * as React from 'react';

function SvgAlertTriangle(props) {
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
        d="M12 2.242c-.923 0-1.597.556-2.173 1.28-.564.708-1.163 1.744-1.905 3.025l-.033.057-4.062 7.016-.033.057c-.744 1.286-1.346 2.325-1.68 3.17-.343.862-.49 1.725-.027 2.526.462.802 1.282 1.107 2.2 1.244.898.133 2.1.133 3.585.133h8.256c1.485 0 2.687 0 3.585-.133.918-.137 1.738-.442 2.2-1.244.463-.801.316-1.664-.026-2.527-.335-.844-.937-1.883-1.681-3.17l-.033-.056-4.062-7.016-.033-.057c-.742-1.281-1.341-2.317-1.905-3.025-.576-.724-1.25-1.28-2.173-1.28zM12.75 9a.75.75 0 00-1.5 0v4a.75.75 0 001.5 0V9zm.25 7a1 1 0 11-2 0 1 1 0 012 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgAlertTriangle;
