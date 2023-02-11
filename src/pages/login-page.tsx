import React from "react";


import { useAppDispatch, useAppSelector } from "../redux-store/hook";
import {
  authReducer,
  updateProfileAction,
} from "../redux-store/slice/authSlice";
import { authProfile } from "../app-type/Login.type";
import { toast } from "react-hot-toast";
import FormLogin from "../components/Login/FormLogin";



function Login() {
  const { username, password } = useAppSelector(authReducer);
  const dispatch = useAppDispatch();

  const Login = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username !== "ROOT" || password !== "123456") {
      return toast.error("Login invalid");
    }

    let authProfile: authProfile = {
      nickname: "John Doe",
      role: "Admin",
    };

    dispatch(updateProfileAction(authProfile));
    toast.success("Login sucessfully");
  };

  return (
    <>
      <FormLogin SubmitForm={Login}/>
    </>
  );
}

export default Login;
