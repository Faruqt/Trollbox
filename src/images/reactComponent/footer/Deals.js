import * as React from "react";

function Deals(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14.876 6.024a2 2 0 011.865.656l1.174 1.348a2 2 0 01.39 1.938l-.962 2.923a2 2 0 01-.587.884l-7.858 6.835a2 2 0 01-2.822-.197l-3.239-3.724a2 2 0 01.197-2.821l7.858-6.835a2 2 0 01.956-.46l3.028-.547z"
        stroke="#718596"
      />
      <circle
        cx={13.957}
        cy={10.286}
        r={2.031}
        transform="rotate(-41.017 13.957 10.286)"
        stroke="#718596"
      />
      <path
        d="M18.262 5.952c.845-.56 2.311-2.01 1.41-3.329"
        stroke="#718596"
        strokeLinecap="round"
      />
    </svg>
  );
}

const MemoDeals = React.memo(Deals);
export default MemoDeals;
