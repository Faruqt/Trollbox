import * as React from "react";

function More(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4 4.8a.8.8 0 100 1.6h19.2a.8.8 0 100-1.6H2.4zM1.6 12a.8.8 0 01.8-.8h19.2a.8.8 0 110 1.6H2.4a.8.8 0 01-.8-.8zm0 6.4a.8.8 0 01.8-.8h19.2a.8.8 0 110 1.6H2.4a.8.8 0 01-.8-.8z"
        fill="#718596"
      />
    </svg>
  );
}

const MemoMore = React.memo(More);
export default MemoMore;
