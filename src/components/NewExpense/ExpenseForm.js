import "./ExportForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: 0.0,
  //     eneteredDate: new Date(),
  //   });
  const [enteredTite, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0.0);
  const [enteredDate, setEnteredDate] = useState(new Date());

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //--------- alternative 1
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //----------- alternative 2
    //------------safer way since react schedule states
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value,
    //   };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTite,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    if (props.onSaveExpenseData) {
      props.onSaveExpenseData(expenseData);
    }

    setEnteredAmount(0.0);
    setEnteredDate(new Date());
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTite}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2013-01-01"
            max="2022-06-01"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
