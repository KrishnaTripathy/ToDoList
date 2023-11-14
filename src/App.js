// src/App.js
import React, { useState } from 'react';

function TodoList() {
  const [items, setItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const handleCorrect = (index) => {
    const completedItem = items[index];
    setCompletedItems([...completedItems, completedItem]);
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleWrong = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddItem();
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new item"
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      <div>
        
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input
               
                type="checkbox"
                
                id={`correctCheckbox-${index}`}
                onChange={() => handleCorrect(index)
               }
              />
              <label htmlFor={`correctCheckbox-${index}`}>✅</label>
              <input
                type="checkbox"
                id={`wrongCheckbox-${index}`}
                onChange={() => handleWrong(index)}
              />
              <label htmlFor={`wrongCheckbox-${index}`}>❎</label>
              <label> </label>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Completed Items</h2>
        <ul>
          {completedItems.map((item, index) => (
            <li key={index} >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
