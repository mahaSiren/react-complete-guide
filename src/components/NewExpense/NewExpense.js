import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: new Date().getTime().toString(),
    };
    if (props.onAddExpense) {
      props.onAddExpense(expenseData);
    }
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
