import * as React from "react";

function Wifi(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 12" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.3 2.696c2.235 0 4.384.859 6.003 2.399a.31.31 0 00.437-.004l1.166-1.176a.324.324 0 00-.003-.46 10.988 10.988 0 00-15.206 0 .324.324 0 00-.003.46L1.86 5.09a.31.31 0 00.437.004A8.713 8.713 0 018.3 2.696zm0 3.828c1.228 0 2.412.456 3.322 1.28a.313.313 0 00.437-.006l1.164-1.176a.325.325 0 00-.005-.463 7.22 7.22 0 00-9.833 0 .325.325 0 00-.005.463l1.164 1.176c.12.12.314.123.437.006a4.948 4.948 0 013.32-1.28zm2.238 2.807a.317.317 0 00-.01-.46 3.45 3.45 0 00-4.456 0 .317.317 0 00-.01.46l2.015 2.033a.314.314 0 00.447 0l2.014-2.033z"
        fill="#000"
      />
    </svg>
  );
}

const MemoWifi = React.memo(Wifi);
export default MemoWifi;
