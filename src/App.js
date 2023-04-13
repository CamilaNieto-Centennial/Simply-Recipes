import './styles/normalize.css';
import './styles/main.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'
import Footer from './components/Footer';
import About from './components/About';
import Tags from './components/Tags';
import Recipes from "./components/Recipes";
import Contact from "./components/Contact";
import Single_Recipe from "./components/Single-recipe";
import Tag_Template from "./components/Tag-template";
import Error404 from "./components/404";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/tags" element={<Tags/>} />
        <Route exact path="/recipes" element={<Recipes/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/single-recipe" element={<Single_Recipe/>} />
        <Route exact path="/tag-template" element={<Tag_Template/>} />
        <Route exact path="*" element={<Error404/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
