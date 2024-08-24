import React from 'react';
import RegisterForm from 'components/RegisterForm';

export default function Register() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '36px',
        paddingLeft: '5px',
      }}
    >
      <h2>Registration</h2>
      <RegisterForm />
    </div>
  );
}
