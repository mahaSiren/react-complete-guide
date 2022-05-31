import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const yearFilterChangedHandler = (year) => {
    if (props.onYearFilterChanged) {
      props.onYearFilterChanged(year);
    }
  };
  return (
    <Card className="expenses hello">
      <ExpensesFilter
        selected={props.yearFilter}
        onYearFilterChanged={yearFilterChangedHandler}
      />
      {props.expenses.map((item, index) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
