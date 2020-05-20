import React from "react";
import "./styles.css";

export const Cell = ({ value, state }) => {
  return <button type="button" className={`cell ${state}`}>{value}</button>;
}
