import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import Button from '../../sub-components/Button/Button.component';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn</h1>
      <Button type='submit' buttonType='google' onClick={logGoogleUser}>
        Sign In With Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
