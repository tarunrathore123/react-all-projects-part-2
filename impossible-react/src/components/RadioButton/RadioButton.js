import React from 'react';
import './RadioButton.scss';

export default function RadioButton(props) {
  const handleRadioChange = (e) => {
    props.handleChange(e.currentTarget.id.toLowerCase());
  };
  return (
    <label className="container">
      {props.value}
      <input
        type="radio"
        id={props.value}
        onChange={handleRadioChange}
        defaultChecked={props.isChecked}
        className="input"
        name={props.name}
      />
      <span className="checkmark"></span>
    </label>
  );
}
