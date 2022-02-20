import "./App.css";

//components
import MainLine from "./components/MainLine";

//import des films
import data from "./data.json";

function App() {
  // console.log(data);
  return (
    <div className="App">
      <h1>Netflix</h1>
      {data.map((mainCategory, index) => {
        return <MainLine mainCategory={mainCategory} key={index} />;
      })}
    </div>
  );
}

export default App;
