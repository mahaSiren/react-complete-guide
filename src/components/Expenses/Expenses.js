import ExpenseItem from "./ExpenseItem";
import React, { useState } from "react";
import "./Expenses.css";
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [yearFilter, setYearFilter] = useState(2021);
  const fiteredExpenses = props.expenses.filter((item) => {
    console.log("filter" + yearFilter + "item " + item.date.getFullYear());
    return item.date.getFullYear() === yearFilter;
  });
  const yearFilterChangedHandler = (year) => {
    setYearFilter(year);
  };

  //---- we can have the content in here
  let expensesContent = "No expenses found!";
  if (fiteredExpenses.length > 0) {
    expensesContent = fiteredExpenses.map((item, index) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }
  return (
    <Card className="expenses hello">
      <ExpensesFilter
        selected={yearFilter}
        onYearFilterChanged={yearFilterChangedHandler}
      />
      {expensesContent}
      {/* {fiteredExpenses.length == 0 && "No Expenses found"}
      {fiteredExpenses.length > 0 &&
        fiteredExpenses.map((item, index) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))} */}
    </Card>
  );
}

export default Expenses;
