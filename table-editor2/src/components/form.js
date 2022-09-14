import React, { useEffect, useRef, useState } from 'react';

export default function Form() {
  const inputRef = useRef();
  const [input, setInput] = useState(null);
  const handleChange = (e) => {
    setInput(e);
  };
  console.log(inputRef?.current.value);
  useEffect(() => {});
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
