import * as React from 'react';

function SvgShare(props) {
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
        d="M15.095 4.25a3.001 3.001 0 110 1.5H11c-.942 0-1.611 0-2.138.036-.52.036-.845.103-1.106.211a3.25 3.25 0 00-1.759 1.76c-.108.26-.175.586-.21 1.105-.006.077-.01.156-.014.238a3.001 3.001 0 010 5.8l.013.238c.036.52.103.845.211 1.106a3.25 3.25 0 001.76 1.759c.26.108.586.175 1.105.21.527.037 1.196.037 2.138.037h4.095A3.001 3.001 0 0121 19a3 3 0 01-5.905.75h-4.122c-.91 0-1.63 0-2.213-.04-.596-.04-1.104-.125-1.578-.322a4.75 4.75 0 01-2.57-2.57c-.197-.474-.282-.982-.322-1.578a12.69 12.69 0 01-.018-.329 3.001 3.001 0 010-5.822c.005-.114.01-.224.018-.329.04-.596.125-1.104.322-1.578a4.75 4.75 0 012.57-2.57c.474-.197.982-.282 1.578-.322.584-.04 1.304-.04 2.213-.04h4.122z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgShare;