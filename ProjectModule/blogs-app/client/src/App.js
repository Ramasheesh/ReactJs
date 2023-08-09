import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';  
import About from "./pages/About";
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";

import Navbar from './component/navbar';
import PageNotFound from './pages/PageNotFound'
function App() {
  return (
    <Router>
      <Navbar/>
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about'element={<About />} />
          <Route path='/article-list'element={<ArticleList />} />
          <Route path='/article/:name' element={<Article />} />
          <Route path='*' element={<PageNotFound/>} />      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
