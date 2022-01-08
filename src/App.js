import "./App.css";
import useMergeState from "./hooks/useMergeState";

function App() {
  const initState = {
    username: "",
    email: "",
    password: "",
  };

  const [data, setData] = useMergeState(initState);

  return (
    <div className="App">
      <>
        <input
          value={data.username}
          onChange={(e) => setData({ username: e.target.value })}
          placeholder="User Name"
        />
        <input
          value={data.age}
          onChange={(e) => setData({ age: e.target.value })}
          placeholder="Age"
        />
        <input
          value={data.location}
          onChange={(e) => setData({ location: e.target.value })}
          placeholder="Location"
        />

        <input
          value={data.job}
          onChange={(e) => setData({ job: e.target.value })}
          placeholder="Job"
        />
      </>
    </div>
  );
}

export default App;
