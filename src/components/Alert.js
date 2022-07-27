import React from "react";
function Alert(props) {
  function capitalize(word) {
    return word[0].toUpperCase() + word.substring(1).toLowerCase();
  }
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        {/* <button
          type="button"
          className="close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
    )
  );
}
export default Alert;
