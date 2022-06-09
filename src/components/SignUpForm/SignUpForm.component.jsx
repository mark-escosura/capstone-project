import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

// components
import FormInput from '../../sub-components/FormInput/FormInput.component';
import Button from '../../sub-components/Button/Button.component';
// styles
import './SignUpForm.styles.scss';

const initialFormValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [initialValues, setInitialValues] = useState(initialFormValues);
  const { displayName, email, password, confirmPassword } = initialValues;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInitialValues({
      ...initialValues,
      [name]: value,
    });
  };

  const clearForm = () => {
    setInitialValues(initialFormValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      clearForm();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Name'
          type='name'
          required
          value={displayName}
          name='displayName'
          onChange={handleChange}
        />
        <FormInput
          label='Email Address'
          type='email'
          required
          value={email}
          name='email'
          onChange={handleChange}
        />
        <FormInput
          label='Password'
          type='password'
          required
          value={password}
          name='password'
          onChange={handleChange}
        />
        <FormInput
          label='Confirm Password'
          type='password'
          required
          value={confirmPassword}
          name='confirmPassword'
          onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
