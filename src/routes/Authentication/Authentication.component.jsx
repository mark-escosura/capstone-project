import SignUpForm from '../../components/SignUpForm/SignUpForm.component';
import SignInForm from '../../components/SignInForm/SignInForm.component';
import './Authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
