import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return (
    <button {...rest} style={{ padding: '10px 20px', margin: '5px' }}>
      {label}
    </button>
  );
};

export default Button;
