import React from 'react';
import './style/css/style.css';
import Header from "./components/Header";
import MainInfo from "./components/MainInfo";
import WeAreDiff from "./components/WeAreDiff";

function App() {
  return (
    <>
      <Header/>
      <main>
        <MainInfo/>
        <WeAreDiff/>
      </main>
    </>
  );
}

export default App;
