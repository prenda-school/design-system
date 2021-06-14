import * as React from 'react';

function SvgStack(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <rect
        width={12}
        height={12}
        x={3}
        y={9}
        fill={props.fillColor || '#F0F1F2'}
        rx={2}
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M19.095 3.817c-.483-.065-1.131-.067-2.095-.067h-5c-.476 0-.796 0-1.043.017-.241.017-.358.046-.436.078a1.25 1.25 0 00-.676.677c-.032.077-.061.194-.078.435-.006.087-.01.184-.012.293h4.297c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.344.08 2.243v4.297c.11-.002.206-.006.293-.012.24-.017.358-.046.435-.078.306-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043V7c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3zM8.27 4.855a8.513 8.513 0 00-.017.4 8.528 8.528 0 00-.4.016 2.823 2.823 0 00-.907.188A2.75 2.75 0 005.46 6.948c-.12.29-.167.59-.188.907-.01.129-.014.27-.017.424a7.486 7.486 0 00-.549.05c-.627.085-1.194.271-1.65.726-.455.456-.64 1.023-.725 1.65-.08.595-.08 1.345-.08 2.243v4.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.344.08 2.243.08h4.103c.898 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.023-.17.04-.353.05-.548.155-.003.296-.008.425-.017.317-.021.617-.068.907-.188a2.75 2.75 0 001.489-1.489c.12-.29.166-.59.188-.907a6.74 6.74 0 00.016-.4 6.74 6.74 0 00.4-.016c.317-.021.617-.068.907-.188a2.75 2.75 0 001.489-1.489c.12-.29.166-.59.188-.907.02-.304.02-.675.02-1.12V6.948c0-.899 0-1.648-.079-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08h-5.077c-.445 0-.816 0-1.12.02a2.823 2.823 0 00-.908.19A2.75 2.75 0 008.46 3.947c-.12.29-.167.59-.188.907zm7.479 12.39c.11-.002.206-.006.293-.012.24-.017.358-.046.435-.078.306-.127.55-.37.677-.677.032-.077.061-.194.078-.435.017-.247.017-.567.017-1.043v-5c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066H9c-.476 0-.796 0-1.043.017-.241.017-.358.046-.435.078a1.25 1.25 0 00-.677.677c-.032.077-.061.194-.078.435-.006.087-.01.184-.012.293h4.297c.898 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v4.297zM4.116 10.116c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066h4c.964 0 1.611.002 2.095.067.46.062.658.169.789.3.13.13.237.327.3.788.064.483.066 1.131.066 2.095v4c0 .964-.002 1.612-.067 2.095-.062.461-.169.659-.3.789-.13.13-.327.237-.788.3-.484.064-1.131.066-2.095.066H7c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.238-.327-.3-.788-.065-.483-.066-1.131-.066-2.095v-4c0-.964.001-1.612.066-2.095.062-.461.17-.659.3-.789z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgStack;