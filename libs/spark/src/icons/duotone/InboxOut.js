import * as React from 'react';

function SvgInboxOut(props) {
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
        d="M9.307 21h5.386c1.736 0 2.604 0 3.316-.283a4 4 0 001.992-1.728c.381-.665.504-1.524.75-3.243.079-.555.119-.833.048-1.053a1 1 0 00-.514-.592C20.078 14 19.797 14 19.236 14h-1.433c-.715 0-1.072 0-1.393.112a1.97 1.97 0 00-.544.292c-.271.204-.47.501-.866 1.096-.396.595-.595.892-.866 1.096a1.976 1.976 0 01-.545.292c-.32.112-.677.112-1.392.112h-.394c-.715 0-1.072 0-1.393-.112a1.999 1.999 0 01-.545-.292c-.27-.204-.469-.501-.865-1.096-.396-.595-.595-.892-.865-1.096a2 2 0 00-.545-.292C7.27 14 6.912 14 6.197 14H4.764c-.561 0-.842 0-1.05.101a1 1 0 00-.513.592c-.07.22-.03.498.048 1.053.246 1.719.369 2.578.75 3.243a4 4 0 001.992 1.728C6.703 21 7.571 21 9.307 21z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12.53 1.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72V12a.75.75 0 001.5 0V3.81l1.72 1.72a.75.75 0 101.06-1.06l-3-3zM7.403 7.25H8a.75.75 0 110 1.5h-.5c-.69 0-.877.008-1.029.054a1.25 1.25 0 00-.603.401c-.1.123-.18.292-.445.93l-1.076 2.582a38.76 38.76 0 00-.22.533h2.177c.61 0 1.09-.001 1.533.154.269.094.522.23.75.401.374.283.64.683.978 1.19l.059.089c.426.64.548.804.693.914.104.078.219.14.34.182.173.06.378.07 1.146.07h.394c.768 0 .973-.01 1.145-.07.122-.043.237-.104.34-.182.146-.11.268-.275.694-.914l.06-.09c.337-.506.603-.906.978-1.189a2.75 2.75 0 01.749-.401c.443-.155.923-.155 1.533-.154h2.177a38.111 38.111 0 00-.22-.533l-1.076-2.582c-.266-.638-.345-.807-.445-.93a1.25 1.25 0 00-.603-.401c-.152-.046-.338-.054-1.029-.054H16a.75.75 0 010-1.5h.598c.546 0 .973 0 1.366.118.52.157.98.465 1.326.884.26.316.424.711.634 1.216l.038.09 1.076 2.582.021.052c.21.503.345.826.43 1.166.095.373.144.756.146 1.141.001.35-.048.698-.125 1.236l-.008.056-.004.027c-.124.866-.222 1.554-.341 2.109-.123.57-.277 1.049-.535 1.487a4.75 4.75 0 01-2.28 1.977c-.47.194-.967.279-1.548.32-.566.039-1.261.039-2.135.039H9.34c-.874 0-1.569 0-2.135-.04-.581-.04-1.078-.125-1.548-.319a4.75 4.75 0 01-2.28-1.977c-.258-.438-.412-.918-.535-1.487-.119-.555-.217-1.243-.34-2.108l-.005-.028-.008-.056c-.077-.538-.126-.885-.125-1.236a4.75 4.75 0 01.145-1.141c.086-.34.221-.664.43-1.166l.022-.052 1.076-2.582.038-.09c.21-.505.374-.9.634-1.216a2.75 2.75 0 011.326-.884c.393-.119.82-.118 1.367-.118zm-3.42 8.329a16.621 16.621 0 01-.107-.829h2.321c.768 0 .973.01 1.145.07.122.043.237.104.34.182.146.11.268.275.694.914l.06.089c.337.508.603.907.978 1.19.227.172.48.307.749.401.443.155.923.155 1.533.154h.608c.61 0 1.09.001 1.533-.154a2.75 2.75 0 00.75-.401c.374-.283.64-.683.978-1.19l.059-.089c.426-.64.548-.804.693-.914.104-.078.219-.14.34-.182.173-.06.378-.07 1.146-.07h2.321a16.66 16.66 0 01-.107.829c-.129.899-.22 1.535-.327 2.033-.105.49-.216.795-.36 1.04a3.25 3.25 0 01-1.56 1.352c-.262.109-.58.175-1.08.21-.509.036-1.151.036-2.059.036H9.37c-.908 0-1.55 0-2.059-.036-.5-.035-.818-.101-1.08-.21a3.25 3.25 0 01-1.56-1.352c-.144-.245-.255-.55-.36-1.04-.107-.498-.198-1.134-.327-2.033z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgInboxOut;