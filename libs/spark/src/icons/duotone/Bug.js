import * as React from 'react';

function SvgBug(props) {
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
        height={15}
        x={6}
        y={6}
        fill={props.fillColor || '#F0F1F2'}
        rx={6}
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M12 2.25A3.75 3.75 0 008.25 6v.387a6.781 6.781 0 00-2.262 2.54l-.7-.7C4.378 7.317 4.079 7 3.92 6.618c-.158-.381-.171-.816-.171-2.103V4a.75.75 0 10-1.5 0v.657c0 1.088 0 1.844.285 2.535.287.692.822 1.226 1.591 1.995l.101.1 1.194 1.195A6.771 6.771 0 005.25 12v3c0 .222.01.441.032.658l-1.055 1.054-.1.101c-.77.769-1.305 1.303-1.592 1.995-.286.691-.286 1.447-.285 2.535V22a.75.75 0 001.5 0v-.515c0-1.287.013-1.722.171-2.103.158-.382.456-.699 1.367-1.609l.393-.394a6.753 6.753 0 0012.638 0l.393.394c.91.91 1.209 1.227 1.367 1.609.158.381.171.816.171 2.103V22a.75.75 0 001.5 0v-.657c0-1.088 0-1.844-.285-2.535-.287-.692-.822-1.226-1.591-1.995l-.101-.1-1.055-1.055A6.84 6.84 0 0018.75 15v-3c0-.522-.06-1.03-.171-1.518l1.194-1.194.1-.101c.77-.769 1.305-1.303 1.592-1.995.286-.691.286-1.447.285-2.535V4a.75.75 0 00-1.5 0v.515c0 1.287-.013 1.722-.171 2.103-.158.382-.456.699-1.367 1.609l-.7.7a6.78 6.78 0 00-2.262-2.54V6A3.75 3.75 0 0012 2.25zm2.219 3.373a2.25 2.25 0 00-4.438 0A6.74 6.74 0 0112 5.25a6.74 6.74 0 012.219.373zM12.75 15v5.197A5.251 5.251 0 0017.25 15v-3a5.25 5.25 0 10-10.5 0v3a5.251 5.251 0 004.5 5.197V15a.75.75 0 011.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBug;