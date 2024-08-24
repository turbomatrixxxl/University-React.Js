import React from 'react';

import Button from 'components/common/Button';
import Input from 'components/common/Input';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

import styles from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(user));

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Enter User name"
        name="name"
        type="text"
        required="required"
      />
      <Input
        label="Enter email address"
        name="email"
        type="email"
        required="required"
      />
      <Input
        label="Enter password"
        name="password"
        type="password"
        required="required"
      />
      <Button type="submit">Register</Button>
    </form>
  );
}
