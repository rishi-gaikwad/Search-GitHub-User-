import GitHubProfile from "./components/GitHubProfile";
import GitHubProvider from "./hooks/GitHubProvider";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <GitHubProvider>
        <GitHubProfile />
      </GitHubProvider>
    </div>
  );
}

export default App;
