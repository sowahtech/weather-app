import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <div className="app-left">
          <form>
            <label>Your City</label>
            <input type="text" name="city" placeholder="London" />
          </form>
        </div>
        <div className="app-right"></div>
      </div>
    </div>
  );
}

export default App;
