import * as React from 'react';

function SvgPlayPrevious(props) {
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
        d="M17.176 4.404c.471-.223 1.063-.392 1.65-.078s.774.9.85 1.415c.074.502.074 1.165.074 1.937v8.645c0 .771 0 1.434-.074 1.936-.076.515-.263 1.101-.85 1.415-.587.314-1.179.145-1.65-.078-.458-.216-1.01-.584-1.652-1.012l-.05-.033-6.394-4.263-.046-.03c-.525-.35-.987-.658-1.31-.951-.345-.311-.671-.726-.671-1.307s.326-.996.67-1.307c.324-.292.786-.6 1.31-.95h.001l.046-.031 6.395-4.263.05-.033c.641-.428 1.193-.796 1.651-1.012zM4.75 5a.75.75 0 00-1.5 0v14a.75.75 0 001.5 0V5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlayPrevious;
