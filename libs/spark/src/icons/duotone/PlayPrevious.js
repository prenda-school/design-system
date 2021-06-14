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
        fill={props.fillColor || '#F0F1F2'}
        d="M15.89 17.927c1.37.913 2.054 1.369 2.582 1.086.528-.283.528-1.105.528-2.75V7.737c0-1.645 0-2.468-.528-2.75-.528-.283-1.213.173-2.581 1.086l-6.395 4.263c-1.129.752-1.693 1.129-1.693 1.664 0 .535.564.912 1.693 1.664l6.395 4.263z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M16.307 6.697c.705-.47 1.164-.774 1.51-.937.166-.079.256-.1.297-.105.02.037.051.124.078.306.056.378.058.928.058 1.776v8.526c0 .848-.002 1.398-.058 1.776a1.045 1.045 0 01-.078.306 1.05 1.05 0 01-.297-.105c-.346-.163-.805-.467-1.51-.937L9.912 13.04c-.585-.39-.952-.637-1.183-.846a.88.88 0 01-.17-.189L8.554 12l.003-.005a.88.88 0 01.171-.19c.231-.208.598-.455 1.183-.845l6.395-4.263zm1.837-1.041l-.012-.002c.009 0 .013.001.012.002zm-.038-.016c-.007-.005-.01-.009-.01-.01.001 0 .004.002.01.01zm-.01 12.73c0-.001.003-.005.01-.01-.006.008-.009.01-.01.01zm.035-.024c.008-.003.013-.002.013-.002s-.003.002-.012.002zm.695-14.02c-.587-.315-1.179-.145-1.65.078-.458.216-1.01.584-1.652 1.012l-.05.033L9.08 9.712l-.046.03c-.525.35-.987.658-1.31.951-.345.311-.671.726-.671 1.307s.326.996.67 1.307c.324.293.786.6 1.311.95l.046.031 6.395 4.263.05.033c.641.428 1.193.796 1.651 1.012.471.223 1.063.392 1.65.078s.774-.9.85-1.415c.074-.502.074-1.165.074-1.936V7.677c0-.771 0-1.434-.074-1.936-.076-.515-.263-1.101-.85-1.415zM4.75 5a.75.75 0 10-1.5 0v14a.75.75 0 001.5 0V5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPlayPrevious;