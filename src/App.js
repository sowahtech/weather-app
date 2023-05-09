import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="outer-app-container">
        <div className="inner-app-container">
          <div className="app-left">
            <form>
              <label className="lbl-city">Your City</label>
              <input
                type="text"
                className="inp-city"
                name="city"
                placeholder="London"
              />
            </form>
          </div>
          <div className="app-right"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
