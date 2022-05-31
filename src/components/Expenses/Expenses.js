import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const yearFilterChangedHandler = (year) => {
    setFilteredYear(year);
    if (props.onYearFilterChanged) {
      props.onYearFilterChanged(year);
    }
  };
  return (
    <Card className="expenses hello">
      <ExpensesFilter
        selected={filteredYear}
        onYearFilterChanged={yearFilterChangedHandler}
      />
      {props.expenses.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
