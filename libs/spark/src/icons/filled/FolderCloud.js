import * as React from 'react';

function SvgFolderCloud(props) {
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
        d="M6 2.25h-.116c-.818 0-1.376 0-1.855.128a3.75 3.75 0 00-2.651 2.651c-.128.479-.128 1.037-.128 1.855v7.171c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.601 1.36.86 2.26.981.867.117 1.97.117 3.337.117h8.11c1.367 0 2.47 0 3.337-.117.9-.12 1.658-.38 2.26-.982.602-.601.86-1.36.982-2.26.116-.866.116-1.969.116-3.336v-2.11c0-1.368 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.982-.867-.116-1.97-.116-3.337-.116h-.934c-.907 0-1.216-.007-1.495-.086a2.252 2.252 0 01-.477-.198c-.254-.141-.477-.355-1.119-.996l-.07-.072c-.544-.543-.92-.92-1.38-1.175a3.75 3.75 0 00-.795-.33C9.28 2.25 8.748 2.25 7.98 2.25H6zm4 8.5a2.25 2.25 0 000 4.5h4a1.25 1.25 0 10-.674-2.303.75.75 0 01-1.135-.461A2.251 2.251 0 0010 10.75zM6.25 13a3.75 3.75 0 017.106-1.674A2.75 2.75 0 1114 16.75h-4A3.75 3.75 0 016.25 13z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFolderCloud;