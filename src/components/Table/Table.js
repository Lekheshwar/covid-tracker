import React from "react";
import "./Table.css";
import numeral from "numeral";

export default function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,00")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}
