/* eslint-disable @next/next/no-img-element */
import React, { useContext, useState } from 'react';
import useAuth from './../../hooks/useAuth';
import { signIn } from 'next-auth/react';
import { AuthenticationContext } from './../../context/AuthContext';

const WelcomeSignUp = ({ onClose }: { onClose: Function }) => {
  const { signup } = useAuth();
  const { error: signUpError } = useContext(AuthenticationContext);
  const [userInfo, setUserInfo] = useState({
    userName: '',
    email: '',
    password: '',
  });

  const handleClose = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const handlSubmit = async (event: Event) => {
    event.preventDefault();
    const signUpResponse = await signup(
      {
        email: userInfo.email,
        password: userInfo.password,
        userName: userInfo.userName,
      },
      () => {
        signIn('credentials', {
          email: userInfo.email,
          password: userInfo.password,
        });
      },
    );
  };
  return (
    <section>
      <div className="flex h-5/6 flex-col items-center justify-center px-6 py-8 md:h-4 lg:py-1">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e: any) => handlSubmit(e)}
            >
              <div>
                <label
                  htmlFor="userName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={userInfo.userName}
                  onChange={(event) =>
                    setUserInfo({ ...userInfo, userName: event.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userInfo.email}
                  onChange={(event) =>
                    setUserInfo({ ...userInfo, email: event.target.value })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userInfo.password}
                  onChange={(event) =>
                    setUserInfo({ ...userInfo, password: event.target.value })
                  }
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <span className="text-red-700">
                {signUpError !== undefined
                  ? 'Error while signup please retry !'
                  : ''}
              </span>
              <button
                type="submit"
                className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
              >
                Sign UP
              </button>
              <p
                className="text-sm font-light text-gray-500 dark:text-gray-400 cursor-pointer"
                onClick={(e: any) => handleClose(e)}
              >
                Already have an account?
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSignUp;
