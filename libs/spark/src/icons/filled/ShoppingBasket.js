import * as React from 'react';

function SvgShoppingBasket(props) {
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
        d="M9.643 3.386a.75.75 0 00-1.286-.772l-2.79 4.651c-.489.123-.886.302-1.227.564a4 4 0 00-1.113 1.329c-.626 1.207-.336 2.829.243 6.072.42 2.351.63 3.526 1.318 4.345a4 4 0 001.064.89C6.779 21 7.973 21 10.36 21h3.278c2.388 0 3.582 0 4.51-.534a4 4 0 001.063-.89c.689-.82.899-1.995 1.318-4.346.58-3.243.87-4.865.243-6.072a4 4 0 00-1.113-1.33c-.34-.261-.738-.44-1.226-.563l-2.79-4.65a.75.75 0 00-1.287.77l2.19 3.65C15.75 7 14.796 7 13.639 7h-3.278c-1.157 0-2.11 0-2.908.036l2.19-3.65z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgShoppingBasket;
