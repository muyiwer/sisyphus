import { useState } from "react";
import { MD5 } from "crypto-js";

export const useAuthForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Retrieve Gravatar image
    const gravatarUrl = `https://www.gravatar.com/avatar/${MD5(email)}?s=200`;
    fetch(`https://api.github.com/users/${email}/repos`)
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
          localStorage.setItem("email", email);
          window.location.href = "/dashboard.html";
        }
      })
      .catch((error) => setError(error));
  };

  return { email, setEmail, error, handleSubmit };
};
