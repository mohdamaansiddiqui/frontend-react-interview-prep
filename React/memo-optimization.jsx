import React, { memo } from "react";

const ExpensiveComponent = memo(({ data }) => {
  console.log("Rendered!");
  return <div>{data}</div>;
});

export default ExpensiveComponent;