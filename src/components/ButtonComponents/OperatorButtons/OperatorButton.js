import React, {Fragment} from "react";

const OperatorButton = ({ operator: { char, value }, clickOperatorBtn }) => {
  // Fragment: same as <> ... </>
  // allows nested elements without showing up on the DOM
  return (
    <Fragment>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={clickOperatorBtn} data-type="operator">{char}</button>
    </Fragment>
  );
};

export default OperatorButton;
