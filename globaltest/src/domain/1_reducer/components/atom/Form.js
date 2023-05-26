import React from 'react';

const Q1Form = ({ onAddingredient }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 1000000);
        const name = e.target.name.value;
        const price = e.target.price.value;
        onAddingredient(name, price, id);
        e.target.reset();
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input type='text' name='name' placeholder='재료' />
            </label>
            <label>
                <input type='number' name='price' placeholder='가격' />
            </label>
            <button type='submit'>추가</button>
        </form>
    );
};
export default Q1Form;
