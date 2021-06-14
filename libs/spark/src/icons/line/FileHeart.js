import * as React from 'react';

function SvgFileHeart(props) {
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
        d="M12.515 3.75c.283 0 .526 0 .735.003v.299c0 .899 0 1.648.08 2.243.084.627.27 1.194.726 1.65.455.455 1.022.64 1.65.725.594.08 1.343.08 2.242.08h.299c.002.21.003.452.003.735V15c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.754.101-1.756.103-3.191.103h-2c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191V9c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h1.515zm4.197 2.023c.805.804 1.131 1.145 1.305 1.477H18c-.964 0-1.612-.002-2.095-.066-.461-.063-.659-.17-.789-.3-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094v-.017c.332.174.673.5 1.477 1.305l.485.485zM12.657 2.25c1.088 0 1.844-.001 2.535.285.692.287 1.226.822 1.995 1.591l.1.101.486.485.1.101c.77.769 1.305 1.303 1.591 1.995.287.69.287 1.447.286 2.535v5.712c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.602.601-1.36.86-2.26.981-.867.117-1.97.117-3.337.117h-2.11c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.981-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.982.867-.116 1.97-.116 3.337-.116h1.712zM9.58 12.727a.912.912 0 011.26-.16l.711.533c.267.2.633.2.9 0l.711-.533a.912.912 0 011.148 1.416L12 16.003l-2.31-2.02a.912.912 0 01-.11-1.256zm2.16-1.36a2.412 2.412 0 00-3.036 3.745l2.587 2.263a1.078 1.078 0 001.42 0l2.587-2.263a2.412 2.412 0 00-3.036-3.745l-.261.196-.261-.196z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgFileHeart;