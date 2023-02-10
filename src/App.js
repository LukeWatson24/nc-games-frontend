import { Route, Routes } from "react-router-dom";
import HomeContainer from "./components/HomeContainer";
import LoginContainer from "./components/LoginContainer";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import ReviewContainer from "./components/ReviewContainer";
import ReviewsContainer from "./components/ReviewsContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/reviews" element={<ReviewsContainer />} />
        <Route path="/reviews/:review_id" element={<ReviewContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/" element={<HomeContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
