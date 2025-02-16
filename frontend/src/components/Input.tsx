import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  return (
    <div style={{ margin: '10px 0' }}>
      <label>
        {label}
        <input {...rest} style={{ padding: '8px', width: '100%', marginTop: '5px' }} />
      </label>
    </div>
  );
};

export default Input;
