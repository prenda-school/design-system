import * as React from 'react';

function SvgDroplet(props) {
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
        d="M12 1.667c-.992 0-1.613.514-2.363 1.134l-.099.082C8.322 3.887 6.761 5.37 5.5 7.217c-1.261 1.847-2.25 4.102-2.25 6.635 0 2.915 1.08 5.158 2.747 6.667C7.65 22.016 9.837 22.75 12 22.75c2.164 0 4.35-.734 6.003-2.231 1.667-1.509 2.747-3.752 2.747-6.667 0-2.533-.989-4.788-2.25-6.635-1.262-1.848-2.822-3.33-4.039-4.334l-.099-.082c-.75-.62-1.37-1.134-2.362-1.134z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDroplet;
