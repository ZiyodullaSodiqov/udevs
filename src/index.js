import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/main.css'
import './css/app.css'
import Nav from "./components/Nav/Nav";
import HeaderTwo from "./components/Header/HeaderTwo";
import HeaderThree from "./components/Header/Headerthree";
import News from './components/News/New'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}></Route>
      <Route path="/signIn" element={<HeaderTwo />} />
      <Route path="/signUp" element={<HeaderThree />} />
      <Route path="/news" element={<News />} />
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);