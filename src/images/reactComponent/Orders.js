import * as React from "react";

function Orders(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#EDF2F7" />
      <path
        d="M7.413 7.333h9.167l-.627-.666h-8l-.54.666zm10.28.154c.194.226.307.513.307.846v8.334A1.334 1.334 0 0116.667 18H7.333A1.334 1.334 0 016 16.667V8.333c0-.333.113-.62.307-.846l.92-1.12A.99.99 0 018 6h8c.313 0 .587.14.767.367l.926 1.12zM8 16h4v-2H8v2z"
        fill="#7E42F5"
      />
    </svg>
  );
}

const MemoOrders = React.memo(Orders);
export default MemoOrders;
