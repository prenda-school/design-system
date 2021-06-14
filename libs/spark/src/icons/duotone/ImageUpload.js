import * as React from 'react';

function SvgImageUpload(props) {
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
        d="M6.672 15.328L5 17l-1.5 1.5A3.977 3.977 0 007.193 21h9.645c.267 0 .4 0 .52-.007a4 4 0 003.47-2.501A8.91 8.91 0 0021 18l-1.172-1.172c-1.333-1.333-2-2-2.828-2-.828 0-1.495.667-2.828 2L14 17l-1.672-1.672c-1.333-1.333-2-2-2.828-2-.828 0-1.495.667-2.828 2z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M10.944 2.25H12a.75.75 0 010 1.5h-1c-1.907 0-3.261.002-4.29.14-1.005.135-1.585.389-2.008.812-.423.423-.677 1.003-.812 2.009-.138 1.028-.14 2.382-.14 4.289v2c0 1.778.001 3.076.114 4.076l.606-.606 1.671-1.672.037-.037c.635-.635 1.165-1.165 1.642-1.529.504-.384 1.036-.654 1.68-.654.644 0 1.176.27 1.68.654.477.364 1.007.894 1.642 1.53l.037.036L14 15.94c.496-.493.926-.907 1.32-1.208.504-.384 1.036-.654 1.68-.654.644 0 1.176.27 1.68.654.448.342.943.83 1.528 1.415.041-.848.042-1.874.042-3.147v-1a.75.75 0 011.5 0v1.056c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153h-2.112c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-2.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.749-.748 1.698-1.08 2.87-1.238 1.14-.153 2.595-.153 4.433-.153zM4.702 19.298a2.25 2.25 0 01-.399-.54L5.53 17.53l1.672-1.671c.682-.682 1.14-1.139 1.528-1.434.37-.283.586-.347.77-.347.184 0 .4.064.77.347.387.295.846.752 1.528 1.434l1.672 1.671 2.677 2.678c-.848.041-1.874.042-3.147.042h-2c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812zm14.596 0c-.306.307-.695.524-1.267.672L15.06 17c.491-.488.854-.835 1.17-1.075.37-.283.585-.347.769-.347.184 0 .4.064.77.347.387.295.846.752 1.528 1.434l.672.671c-.148.573-.365.962-.672 1.268zM18.53 2.47a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06l1.22-1.22V9a.75.75 0 001.5 0V4.81l1.22 1.22a.75.75 0 101.06-1.06l-2.5-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgImageUpload;