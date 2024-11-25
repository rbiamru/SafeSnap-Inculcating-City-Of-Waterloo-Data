import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../providers/AuthProvider';
import "../styles/Authentication.css";
import Username from "../components/InputAndButton";
import Register from './Register';

const Authentication = () => {
  const navigate = useNavigate();
  const { login, authErrorMessages, profile } = useAuthContext();

  const [email, setEmail] = useState(''); // input field value cannot be null
  const [password, setPassword] = useState(''); // input field value cannot be null
  const [loginRunning, setLoginRunning] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [authState , setAuthState] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  //Login Handler
  const handleButtonClick = async () => {
    setLoginRunning(true);
    let success = await login(email, password);
    setLoginRunning(false);

    if (success && profile.displayName) {
      navigate("/user-profile"); // Navigate to feed2a if login is successful
    } else {
      setErrorMessage('Registration failed! Auth');
      navigate("/authentication")
    }
  };

  //Home Screen Navigation
  const OnHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  //Register Screen Navigation
  const onRegisterToggle = () => {
    setAuthState((authState) => !authState);
  };

  //Post Picture
  const onPostPictureWithoutClick = useCallback(() => {
    navigate("/without-signup");
  }, [navigate]);

  const toggleShowRegisterScreen = () => {
    setShowRegisterForm((currVal) => !currVal);
  };

  

 

 

  if (showRegisterForm) {
    return (
      <div>
        <Register />
        <br />
        <br />
        <button onClick={toggleShowRegisterScreen}>
          Sign In To Existing Account
        </button>
      </div>
    );
  }

  return (
    <div className="w-full relative bg-white flex flex-col items-start justify-start pt-6 px-6 pb-44 box-border leading-[normal] tracking-[normal] text-left text-xl text-black font-small-text mainImage">
      <div className="relative font-semibold cursor-pointer boxEffect" onClick={OnHomeClick}>
        Snap Home
        <i className="bi bi-camera-fill ml-3"></i>
      </div>
      <main className="align-items">
        <section className="w-[1203px] flex flex-row items-end justify-start gap-[73px] max-w-full text-left text-base text-white font-small-text lg:flex-wrap mq750:gap-[36px] mq450:gap-[18px]">
          <div className="h-[670px] flex-1 relative bg-cover bg-no-repeat bg-[top] min-w-[474px] max-w-full mq750:min-w-full" style={{minWidth:"800px"}}>
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover"
              loading="lazy"
              alt=""
              src="/image-31@2x.png"
            />
          </div>
          <div className="w-[400px] flex flex-col items-start justify-end pt-0 px-0 pb-4 box-border min-w-[400px] max-w-full lg:flex-1 mq750:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[59px] mq450:gap-[29px]">
              <div className="self-stretch btnEffect rounded-lg bg-black flex flex-row items-start 
                           justify-center py-2 px-5 whitespace-nowrap cursor-pointer" onClick={onPostPictureWithoutClick}>
                <div className="relative leading-[150%] font-medium cursor-pointer">
                  <i className="bi bi-upload mr-3"></i>
                  Post Picture 
                </div>
              </div>
              {/*Login View - Auth State(true means that Login State)*/}
              {authState ?
                <>
                <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[57px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                        <h3 className="m-0 relative text-5xl tracking-[-0.01em] leading-[150%] font-semibold font-small-text text-black text-center mq450:text-lgi mq450:leading-[29px]">
                          Sign in account
                        </h3>
                      </div>
                      <div className="relative text-base leading-[150%] font-small-text text-black text-center">
                        Enter your email and password to sign in for this app
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
                    <input
                      type='text'
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="inputField"
                    />
                    <input
                      type='password'
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="inputField"
                    />
                    {!loginRunning ? (
                     <> 
                      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[30px]">
                        <button className="rounded-lg btnEffect bg-black flex flex-row items-start justify-start py-[6.5px] px-[68px] cursor-pointer"
                          onClick={handleButtonClick}>
                          <div className="relative text-base leading-[150%] font-medium font-small-text text-white text-left inline-block min-w-[64px]">
                          <i className="bi bi-lock mr-3"></i>
                          Login
                          </div>
                        </button>
                        </div>
                        {(errorMessage || authErrorMessages) && (
                          <div>
                            <h6 style={{ color: 'red' , textAlign:"center" }}>
                            <em>Login Failed! Try Again.</em>
                            </h6>
                        </div>
                        )}
                   </>
                    ) : (
                      <div>
                        <h6 style={{ color: 'green' }}>
                          <em>logging in...</em>
                        </h6>
                      </div>
                    )}
                    </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[84px]">
                      <div className="self-stretch h-px relative bg-gainsboro-100" />
                    </div>
                    <div className="relative text-base leading-[150%] font-small-text text-gray-200 text-center inline-block min-w-[123px]">
                      or continue with
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[84px]">
                      <div className="self-stretch h-px relative bg-gainsboro-100" />
                    </div>
                  </div>
                  <div className="self-stretch btnEffect rounded-lg bg-whitesmoke-200 flex flex-row items-start justify-start py-2 px-3.5 gap-[138.5px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/google.svg"
                      />
                    </div>
                    <div className="relative text-base leading-[150%] font-medium font-small-text text-black text-left inline-block min-w-[55px] cursor-pointer">
                      Google
                    </div>
                  </div>
                </form>
              <div className="self-stretch flex flex-col items-end justify-start gap-[9px]">
                  <div className="self-stretch relative text-base leading-[150%] font-small-text text-center">
                    <span className="text-gray-200">{`By clicking continue, you agree to our `}</span>
                    <span className="text-black">Terms of Service</span>
                    <span className="text-gray-200">{` and `}</span>
                    <span className="text-black">Privacy Policy</span>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[30px]">
                    <div className="rounded-lg btnEffect bg-black flex flex-row items-start justify-start py-[6.5px] px-[68px] cursor-pointer"
                      onClick={onRegisterToggle} >
                      <div className="relative text-base leading-[150%] font-medium font-small-text text-white text-left inline-block min-w-[64px]">
                        <i className="bi bi-person mr-3"></i>
                        Register
                      </div>
                    </div>
                  </div>
                </div>
                </> : <Register onToggle={onRegisterToggle} />}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Authentication;
