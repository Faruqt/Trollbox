import * as React from "react";

function Wallet(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M21.639 14.396h-4.048a2.692 2.692 0 010-5.383h4.048M18.049 11.643h-.312"
        stroke="#718596"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M7.748 3h8.643a5.248 5.248 0 015.248 5.248v7.177a5.248 5.248 0 01-5.248 5.247H7.748A5.248 5.248 0 012.5 15.425V8.248A5.248 5.248 0 017.748 3z"
        stroke="#718596"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.036 7.538h5.399"
        stroke="#718596"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoWallet = React.memo(Wallet);
export default MemoWallet;
