import React, { useState, useRef, ChangeEvent, KeyboardEvent } from 'react';

interface OTPInputProps {
  length: number;
  onChange: (value: string) => void;
}

export const OTPInput: React.FC<OTPInputProps> = ({ length, onChange }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = e.target.value;
    setValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = inputValue;

      // Join all the input values into a single string
      const otpValue = newValues.join('');
      onChange(otpValue);

      return newValues;
    });

    // Move focus to the next input field
    if (inputValue && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !values[index]) {
      // Move focus to the previous input field on Backspace press
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData('text/plain');
    const otpDigits = pasteData.slice(0, length).split('');
    const newValues = [...values];

    otpDigits.forEach((digit, index) => {
      if (inputRefs.current[index]) {
        newValues[index] = digit;
        inputRefs.current[index].value = digit;
      }
    });

    setValues(newValues);

    // Join all the input values into a single string
    const otpValue = newValues.join('');
    onChange(otpValue);
  };

  return (
    <div>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
        />
      ))}
    </div>
  );
};