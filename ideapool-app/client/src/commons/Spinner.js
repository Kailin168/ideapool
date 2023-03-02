import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const MySpinner = ({isShowing = true}) => {
  return isShowing ? (
    <div style={{
      position: "absolute",
      backgroundColor: "rgba(239,239,239,0.7)",
      height: "100%",
      width: "100%",
      zIndex: "999999",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  ) : null;
}

export default MySpinner;