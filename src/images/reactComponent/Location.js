import * as React from "react";

function Location(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#EDF2F7" />
      <path
        d="M15.96 15.164A5.604 5.604 0 0012 5.6a5.598 5.598 0 00-5.6 5.602c0 1.486.59 2.911 1.64 3.962l1.217 1.2 1.634 1.587.107.095c.62.502 1.528.47 2.112-.095l1.948-1.896.902-.891zM12 13.6a2.4 2.4 0 110-4.801 2.4 2.4 0 010 4.801z"
        fill="#227EFF"
      />
    </svg>
  );
}

const MemoLocation = React.memo(Location);
export default MemoLocation;
