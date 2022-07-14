import logo from "./logo.svg";
// import "./App.css";
import ToDo from "./containers/ToDo";
import NestedComponent from "./containers/NestedComponent";
import MovieList from "./containers/MovieList";
import Customform from "./components/CustomForm";
import AnimalList from "./containers/AnimalList";
import DetailAnimal from "./containers/DetailAnimal";
import CounterReducerContainer from "./containers/CounterReducerContainer";
import { Route, Routes, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import CounterReduxContainer from "./containers/CounterReduxContainer";

function App() {
  return (
    <div className="App">
      <h1> React Navigation - APP</h1>
      <br />
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieList></MovieList>} />
        <Route path="/todo-list" element={<ToDo />} />
        <Route path="/nested-component" element={<NestedComponent />} />
        <Route path="/formulir" element={<Customform />} />
        <Route path="/planet-animal" element={<AnimalList />}>
          {/** child route */}
          <Route path=":animalId" element={<DetailAnimal />}></Route>
        </Route>
        <Route
          path="/use-reducer"
          element={<CounterReducerContainer />}
        ></Route>
        <Route path="/use-redux" element={<CounterReduxContainer />}></Route>
      </Routes>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <h2> Ini halaman Home</h2>
    </>
  );
};

export default App;
