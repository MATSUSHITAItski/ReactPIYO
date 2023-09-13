import React from "react";

const Map = () => {
  const gridContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    height: "300px",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    flex: "1",
  };

  const cellStyle = {
    width: "30%",
    height: "30%",
    border: "1px solid gray",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={gridContainerStyle}>
      {[1, 2, 3].map((row) => (
        <div key={row} style={rowStyle}>
          {[1, 2, 3].map((col) => (
            <div key={col} style={cellStyle}>
              {row * 3 + col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Map;