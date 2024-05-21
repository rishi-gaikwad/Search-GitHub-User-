import { useContext } from "react";
import GitHubContext from "../hooks/GitHubContext";

const GitHubProfile = () => {
  const { username, handleInputChange, handleSubmit, userData } =
    useContext(GitHubContext);

  return (
    <div className="w-1/4 mx-auto mt-10 p-5 bg-slate-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-5">
        GitHub Profile Viewer
      </h1>
      
      <form onSubmit={handleSubmit} className="mb-5">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
      {userData && (
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">{userData.name}</h2>
          <img
            src={userData.avatar_url}
            alt="GitHub Avatar"
            className="w-36 h-36 mx-auto rounded-full mb-4"
          />
          <p className="text-gray-600 mb-2">Followers: {userData.followers}</p>
          <p className="text-gray-600 mb-2">Following: {userData.following}</p>
          <p className="text-gray-600 mb-2">
            Public Repos: {userData.public_repos}
          </p>
          <p className="text-gray-600 mb-2">Location: {userData.location}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubProfile;
