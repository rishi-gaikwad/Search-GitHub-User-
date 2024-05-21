import React, { useState } from "react";
import GitHubContext from "./GitHubContext";

const GitHubProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.trim()) {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    }
  };

  return (
    <GitHubContext.Provider
      value={{ username, handleInputChange, handleSubmit, userData }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubProvider;
