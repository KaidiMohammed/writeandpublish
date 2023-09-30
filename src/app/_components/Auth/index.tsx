import Head from 'next/head';
import { FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function WelcomeAuth({ onClose }: any) {
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState<{ email: string; password: string }>(
    {
      email: '',
      password: '',
    },
  );
  const [authError, setAuthError] = useState('');

  const handleClick = (event: Event) => {
    event?.preventDefault();
    setShowModal(!showModal);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const handleSignIn = async (event: Event) => {
    event.preventDefault();
    const user = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });
    if (user?.error) setAuthError(user.error);
    onClose();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <Head>
        <title>Sign in </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
          {/* SIGN IN */}
          <div className=" p-5">
            <div className="text-left font-bold flex justify-between">
              <span className="text-blue-500">Write & publish</span>
              <span
                className="text-red-500 cursor-pointer text-xl"
                onClick={() => onClose()}
              >
                X
              </span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-yellow-500 mb-2">
                Sign In To Account
              </h2>
              <div className="border-2 w-10 border-yellow-500 inline-block mb-2"></div>
              {/* SOCIAL LOGIN SECTION */}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                  onClick={() => signIn('google')}
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>

              <p className="text-gray-400 my-3">
                or use your email account <br /> (not ready yet)
              </p>

              <div className="flex flex-col items-center wrap">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={(event) =>
                      setUserInfo({ ...userInfo, email: event.target.value })
                    }
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    disabled
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    value={userInfo.password}
                    onChange={(event) =>
                      setUserInfo({ ...userInfo, password: event.target.value })
                    }
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                    disabled
                  />
                </div>

                <div className="flex justify-between w-64 mb-5">
                  <label htmlFor="" className="flex items-center text-xs">
                    <input
                      type="checkbox"
                      name="remember"
                      className="mr-1"
                      disabled
                    />
                    Remember me
                  </label>
                  <a className="text-xs" aria-disabled>
                    Forgot Password?
                  </a>
                </div>
                <span className="text-red-700">
                  {authError !== '' ? 'Error while signup please retry !' : ''}
                </span>

                <button
                  className="hidden border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
                  onClick={(event: any) => handleSignIn(event)}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
