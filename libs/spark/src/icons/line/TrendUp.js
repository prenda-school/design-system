import * as React from 'react';

function SvgTrendUp(props) {
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
        d="M14.25 7a.75.75 0 01.75-.75h6a.75.75 0 01.75.75v6a.75.75 0 01-1.5 0V8.81l-4.72 4.72-.085.086c-.46.461-.817.818-1.224 1.02a2.75 2.75 0 01-2.442 0c-.407-.202-.763-.559-1.223-1.02l-.086-.086c-.588-.588-.759-.744-.915-.822a1.25 1.25 0 00-1.11 0c-.156.078-.327.234-.915.822l-4 4a.75.75 0 11-1.06-1.06l4-4 .085-.086c.46-.461.817-.818 1.224-1.02a2.75 2.75 0 012.442 0c.407.202.763.559 1.223 1.02l.086.086c.588.588.759.744.915.822.35.173.76.173 1.11 0 .156-.078.327-.234.915-.822l4.72-4.72H15a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgTrendUp;
