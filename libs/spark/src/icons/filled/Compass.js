import * as React from 'react';

function SvgCompass(props) {
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
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-2.632 9.647c.31-.93.465-1.396.799-1.73.334-.334.8-.49 1.73-.8l2.206-.735c.828-.276 1.242-.413 1.46-.195.218.219.08.632-.196 1.46l-.735 2.206c-.31.93-.465 1.396-.799 1.73-.334.334-.8.49-1.73.8l-2.206.735c-.828.275-1.241.413-1.46.195-.218-.219-.08-.633.195-1.46l.736-2.206z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCompass;
