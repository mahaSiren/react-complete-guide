import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterChangedHandler = (event) => {
    const selectedYear = event.target.options[event.target.selectedIndex].value;
    if (props.onYearFilterChanged) {
      props.onYearFilterChanged(selectedYear);
    }
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangedHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
