import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearch(value); 
  };

  return (
    <div className="search-row">
      <input 
        type="text" 
        className="search-input"
        placeholder="Курстарды іздеу..." 
        value={term}
        onChange={handleChange}
      />
      <button className="action-btn edit" style={{ padding: '0 20px', fontSize: '14px' }}>Іздеу</button>
    </div>
  );
}