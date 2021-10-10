import * as React from "react";

function Icon1(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" {...props}>
      <rect width={48} height={48} rx={4} fill="#227EFF" />
      <path
        d="M28.191 14C31.28 14 33 15.78 33 18.83v10.33c0 3.1-1.72 4.84-4.809 4.84H19.81C16.77 34 15 32.26 15 29.16V18.83c0-3.05 1.77-4.83 4.81-4.83h8.381zM20.08 27.74a.795.795 0 00-.75 1.21c.16.25.45.4.75.36h7.84c.399-.04.7-.381.7-.78 0-.41-.301-.75-.7-.79h-7.84zm7.84-4.561h-7.84a.781.781 0 000 1.561h7.84a.781.781 0 000-1.561zm-4.851-4.529H20.08v.01a.78.78 0 000 1.56h2.989c.431 0 .781-.35.781-.791a.781.781 0 00-.781-.779z"
        fill="#E9F2FF"
      />
    </svg>
  );
}

const MemoIcon1 = React.memo(Icon1);
export default MemoIcon1;
