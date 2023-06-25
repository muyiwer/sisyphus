import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MD5 } from "crypto-js";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../model/state";
import { setAllAppState } from "../store";

export const useAuthForm = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const state = useSelector((state: any): State => {
    return state.app?.value;
  });
  const setEmail = useCallback((value: string) => {
    dispatch(
      setAllAppState({
        ...state,
        email: value,
      })
    );
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Retrieve Gravatar image
    const gravatarUrl = `https://www.gravatar.com/avatar/${MD5(
      state.email as string
    )}?s=200`;
    fetch(`https://api.github.com/users/${state.email}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (
          typeof data === "object" &&
          data !== null &&
          data.message === "Not Found"
        ) {
          setError(
            "Github username or email not found. Please provide a valid github username"
          );
        } else {
          localStorage.setItem("repos", JSON.stringify(data));
          localStorage.setItem("profile", gravatarUrl);
          localStorage.setItem("email", state.email as string);
          navigate("/dashboard")
        }
      })
      .catch((error) => setError(error));
  };

  return { email: state.email, setEmail, error, handleSubmit };
};
