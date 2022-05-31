import React, { useState } from "react";
import "./Expenses.css";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [yearFilter, setYearFilter] = useState(2021);
  const fiteredExpenses = props.expenses.filter((item) => {
    console.log("filter" + yearFilter + "item " + item.date.getFullYear());
    return item.date.getFullYear() === yearFilter;
  });
  const yearFilterChangedHandler = (year) => {
    setYearFilter(year);
  };

  return (
    <Card className="expenses hello">
      <ExpensesFilter
        selected={yearFilter}
        onYearFilterChanged={yearFilterChangedHandler}
      />
      <ExpensesList items={fiteredExpenses} />
    </Card>
  );
}

export default Expenses;
