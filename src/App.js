import { Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import Nav from "./components/Nav";
import ReviewContainer from "./components/ReviewContainer";
import ReviewsContainer from "./components/ReviewsContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/reviews" element={<ReviewsContainer />} />
        <Route path="/reviews/:review_id" element={<ReviewContainer />} />
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </div>
  );
}

export default App;
