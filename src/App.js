import React from 'react';
import './style/css/style.css';
import Header from "./components/Header";
import MainInfo from "./components/MainInfo";
import WeAreDiff from "./components/WeAreDiff";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
        <MainInfo/>
        <WeAreDiff/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
