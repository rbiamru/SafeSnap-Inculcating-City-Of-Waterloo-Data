import { useState } from 'react';
import { useAuthContext } from '../providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const Register = ({ onToggle }) => {
  const { register, authErrorMessages } = useAuthContext();
  
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationRunning, setRegistrationRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleButtonClick = async () => {
    setRegistrationRunning(true);
    let theDisplayName = displayName || 'NO DISPLAY NAME PROVIDED 😟';
    let success = await register(email, password, theDisplayName);
    setRegistrationRunning(false);
    if (!success) {
      setErrorMessage('Registration failed!');
    }else{
      toast('Registration Successful!');
    }
  };

  return (
    <form>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[57px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <h3 className="m-0 relative text-5xl tracking-[-0.01em] leading-[150%] font-semibold font-small-text text-black text-center mq450:text-lgi mq450:leading-[29px]">
                    Register Your Account
                </h3>
            </div>
            <div className="relative text-base leading-[150%] font-small-text text-black text-center">
               Tell us what you want to be called!
            </div>
          </div>
      </div>
      <div className='form-group mb-4 mt-3'>
        <input
          type='text'
          id='displayName'
          placeholder='Display Name'
          className='inputField'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          id='email'
          placeholder='Email'
          value={email}
          className='inputField'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          placeholder='Password'
          value={password}
          className='inputField'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='form-actions'>
        <div className="self-stretch relative text-base leading-[150%] font-small-text text-center mb-2 mt-3">
          <span className="text-gray-200">{`By clicking continue, you agree to our `}</span>
          <span className="text-black">Terms of Service</span>
          <span className="text-gray-200">{` and `}</span>
          <span className="text-black">Privacy Policy</span>
        </div>
        {!registrationRunning ? (
          <>
            <button className='formBtn' onClick={handleButtonClick}>
             <i className='bi bi-person mr-4'></i> Create User
            </button>
            <button className='formBtn' type='button' onClick={onToggle}>
            <i className='bi bi-lock mr-4'></i>Login
            </button>
          </>
        ) : (
          <div>
            <h6 style={{ color: 'green' }}>
              <em>Registering...</em>
            </h6>
          </div>
        )}
        {errorMessage && (
           <div>
            <h6 style={{ color: 'red' , textAlign:"center" }}>
            <em>{errorMessage}</em>
            </h6>
          </div>
        )}
      </div>
      <Toaster />
    </form>
  );
};

export default Register;
