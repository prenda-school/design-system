import * as React from 'react';

function SvgPhone(props) {
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
        d="M5.462 2.25h.125c.332 0 .59 0 .83.042A2.75 2.75 0 018.45 3.88c.099.22.161.472.241.794l.015.058.414 1.655.009.036c.14.56.259 1.036.316 1.439.06.428.063.838-.074 1.259-.137.42-.38.75-.682 1.061-.283.292-.66.607-1.102.977l-.029.024-1.612 1.348a13.897 13.897 0 005.523 5.523l1.348-1.612.024-.029c.37-.443.685-.819.977-1.102.31-.302.64-.545 1.061-.682.42-.137.83-.135 1.26-.074.402.057.878.176 1.438.316l.036.01 1.655.413.058.014c.322.08.573.143.794.242a2.75 2.75 0 011.588 2.034c.042.238.042.497.042.829v.125c0 .383 0 .686-.066.983-.242 1.084-1.246 1.995-2.348 2.13-.302.038-.562.012-.885-.02l-.047-.004c-2.64-.258-5.016-.917-7.085-1.957-3.074-1.544-5.445-3.915-6.99-6.99-1.039-2.068-1.698-4.444-1.956-7.084l-.005-.046c-.031-.324-.057-.584-.02-.886.136-1.102 1.046-2.106 2.13-2.348.298-.066.6-.066.984-.066zm7.396 16.482c1.68.72 3.582 1.196 5.691 1.402.387.038.483.044.604.029.473-.059.963-.504 1.067-.968.026-.117.03-.244.03-.722 0-.42-.003-.537-.02-.629a1.25 1.25 0 00-.72-.924c-.086-.038-.198-.069-.606-.17l-1.654-.415c-.607-.151-1.006-.25-1.322-.295-.3-.042-.458-.025-.584.016-.126.04-.265.12-.482.331-.229.223-.493.537-.894 1.017l-1.11 1.328zm-7.59-7.59l1.328-1.11c.48-.4.795-.665 1.017-.894.21-.217.29-.356.331-.482.041-.126.058-.285.016-.584-.045-.316-.144-.715-.296-1.321l-.413-1.655c-.102-.408-.133-.52-.171-.605a1.25 1.25 0 00-.924-.722c-.092-.016-.208-.019-.63-.019-.478 0-.604.004-.72.03-.465.104-.91.595-.969 1.067-.015.121-.009.217.029.604.206 2.11.682 4.01 1.402 5.691z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPhone;