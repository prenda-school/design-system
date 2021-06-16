import * as React from 'react';

function SvgBookmark(props) {
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
        d="M20 18.764V8c0-2.828 0-4.243-.879-5.121C18.243 2 16.828 2 14 2h-4c-2.828 0-4.243 0-5.121.879C4 3.757 4 5.172 4 8v10.764c0 1.45 0 2.175.474 2.469.475.293 1.123-.032 2.42-.68l3.317-1.659c.878-.438 1.317-.658 1.789-.658s.911.22 1.789.658l3.317 1.659c1.297.648 1.945.973 2.42.68.474-.294.474-1.019.474-2.47z"
      />
    </svg>
  );
}

export default SvgBookmark;
