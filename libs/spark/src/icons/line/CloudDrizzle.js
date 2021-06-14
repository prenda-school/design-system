import * as React from 'react';

function SvgCloudDrizzle(props) {
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
        d="M12 2.75a6.25 6.25 0 00-6.249 6.363.75.75 0 01-.563.74 3.252 3.252 0 00-.812 5.963.75.75 0 11-.752 1.298 4.751 4.751 0 01.637-8.536 7.75 7.75 0 0115.168-1.79A5.75 5.75 0 0120.45 16.6a.75.75 0 11-.9-1.2 4.252 4.252 0 00-1.02-7.367.75.75 0 01-.458-.521A6.253 6.253 0 0012 2.75zm-3 9.5a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zM9.75 18a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2zM15 12.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zm.75 5.75a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2zM12 13.25a.75.75 0 01.75.75v2a.75.75 0 01-1.5 0v-2a.75.75 0 01.75-.75zm.75 5.75a.75.75 0 00-1.5 0v2a.75.75 0 001.5 0v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCloudDrizzle;
