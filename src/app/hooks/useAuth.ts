import axios from "axios";
import { getCookie } from "cookies-next";
import { useContext } from "react";
import { AuthenticationContext } from "../context/AuthContext";

const useAuth = () => {
    const { setAuthState } = useContext(AuthenticationContext);

    const signin = async (
        {
            email,
            password,
        }: {
            email: string;
            password: string;
        },
        handleClose: () => void
    ) => {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_NEXTAUTH_AUTH_URL}/signin`,
                {
                    email,
                    password,
                }
            );
            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
            handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.response.data.errorMessage,
                loading: false,
            });
        }
    };
    const signup = async (
        {
            email,
            password,
            userName,
        }: {
            email: string;
            password: string;
            userName: string;
        },
        handleClose: () => void
    ) => {
        setAuthState({
            data: null,
            error: null,
            loading: true,
        });
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_NEXTAUTH_AUTH_URL}/signup`,
                {
                    email,
                    password,
                    userName,
                }
            );
            setAuthState({
                data: response.data,
                error: null,
                loading: false,
            });
            handleClose();
        } catch (error: any) {
            setAuthState({
                data: null,
                error: error.message,
                loading: false,
            });
        }
    };

    const signout = () => {
        setAuthState({
            data: null,
            error: null,
            loading: false,
        });
    };

    return {
        signin,
        signup,
        signout,
    };
};

export default useAuth;