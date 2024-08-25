import React from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

import styles from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;

    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(login(user));

    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Enter email address"
        name="email"
        type="email"
        required={true}
      />
      <Input
        autoComplete="on"
        label="Enter password"
        name="password"
        type="password"
        required={true}
      />
      <Button type="submit">Log In</Button>
    </form>
  );
}
