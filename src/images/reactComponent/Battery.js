import * as React from "react";

function Battery(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 25 12" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.59.16h14.82c1.249 0 1.701.13 2.158.374.456.244.814.602 1.058 1.058.244.457.374.91.374 2.157v4.322c0 1.248-.13 1.7-.374 2.157a2.544 2.544 0 01-1.058 1.058c-.457.244-.91.374-2.157.374H3.589c-1.248 0-1.7-.13-2.157-.374a2.544 2.544 0 01-1.058-1.058C.13 9.77 0 9.318 0 8.07V3.749c0-1.248.13-1.7.374-2.157A2.544 2.544 0 011.432.534C1.89.29 2.342.16 3.59.16zm0 1c-.988 0-1.332.067-1.686.256-.282.15-.497.366-.648.648-.19.354-.256.698-.256 1.685v4.322c0 .987.067 1.331.256 1.685.15.282.366.497.648.648.354.19.698.256 1.685.256h14.822c.986 0 1.331-.066 1.685-.256.282-.15.497-.366.648-.648.19-.354.256-.698.256-1.685V3.749c0-.987-.067-1.331-.256-1.685a1.544 1.544 0 00-.648-.648c-.354-.19-.698-.256-1.685-.256H3.589zM24.5 5.85c0 1.237-1.5 2-1.5 2v-4s1.5.763 1.5 2z"
        fill="#000"
        fillOpacity={0.36}
      />
      <rect x={2} y={2.077} width={18} height={7.667} rx={1.6} fill="#000" />
    </svg>
  );
}

const MemoBattery = React.memo(Battery);
export default MemoBattery;