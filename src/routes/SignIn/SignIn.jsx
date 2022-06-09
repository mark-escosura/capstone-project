import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>SignIn</h1>
      <button>
        <img
          src='https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg'
          width={50}
          height={50}
          alt='google'
          onClick={logGoogleUser}
        />
      </button>
    </div>
  );
};

export default SignIn;
