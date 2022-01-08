import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Upload from './components/Upload';
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
     
    </div>
    
  );
}

export default App;
