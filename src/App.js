import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/New';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import Page500 from './Components/Page500';


const App = () => {
  const pageSize = 8;
  const Apikey = process.env.REACT_APP_NEWS_KEY;

  const [progress, setprogress] = useState(10);

  const setProgress = (progress) => {
    setprogress(progress);
  }

  return (
    <>
      <div>
        <BrowserRouter>
          <LoadingBar color="#f11946" progress={progress} />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News Apikey={Apikey} setProgress={setProgress} key="general" category="general" pageSize={pageSize} country="in" />} />
            <Route exact path="/business" element={<News Apikey={Apikey} setProgress={setProgress} key="business" category="business" pageSize={pageSize} country="in" />} />
            <Route exact path="/entertainment" element={<News Apikey={Apikey} setProgress={setProgress} key="entertainment" category="entertainment" pageSize={pageSize} country="in" />} />
            <Route exact path="/health" element={<News Apikey={Apikey} setProgress={setProgress} key="health" category="health" pageSize={pageSize} country="in" />} />
            <Route exact path="/science" element={<News Apikey={Apikey} setProgress={setProgress} key="science" category="science" pageSize={pageSize} country="in" />} />
            <Route exact path="/sports" element={<News Apikey={Apikey} setProgress={setProgress} key="sports" category="sports" pageSize={pageSize} country="in" />} />
            <Route exact path="/technology" element={<News Apikey={Apikey} setProgress={setProgress} key="technology" category="technology" pageSize={pageSize} country="in" />} />
            <Route exact path="/page500" element={<Page500/>} />
          </Routes>
        </BrowserRouter>
      </div>

    </>

  )

}
export default App;