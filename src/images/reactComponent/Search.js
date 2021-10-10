import * as React from "react";

function Search(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        d="M11.333 11.333l3.334 3.334-3.334-3.334zM13 7.167a5.833 5.833 0 11-11.667 0 5.833 5.833 0 0111.667 0z"
        stroke="#2E4457"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
