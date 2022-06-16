import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
  signInWithAuthEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

// utils
import useForm from '../../utils/hooks/useForm';

// components
import Button from '../../sub-components/Button/Button.component';
import FormInput from '../../sub-components/FormInput/FormInput.component';

//styles
import './SignInForm.styles.scss';

const InitialFormValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formValues, handleChange, clearForm] = useForm(InitialFormValues);
  const { email, password } = formValues;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      clearForm();
      const response = await signInWithAuthEmailAndPassword(email, password);
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <h4>Sign in with your email and password</h4>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          name='email'
          value={email}
          type='email'
          onChange={handleChange}
        />
        <FormInput
          label='Password'
          name='password'
          value={password}
          type='password'
          required
          onChange={handleChange}
        />
        <div className='sign-in-buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
