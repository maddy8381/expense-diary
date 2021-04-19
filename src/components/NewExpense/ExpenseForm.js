import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const submitHanlder = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: date
        }

        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHanlder}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={title} onChange={handleTitleChange} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={amount} onChange={handleAmountChange} />
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={date} onChange={handleDateChange} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
