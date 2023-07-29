import React from "react";

import Header from './Components/Header';
import Table from './Components/Table';
import '../styles/app.scss';

const App = () =>{
  return (
    <>
      <Header />
      <div className="container">
        <Table />
      </div>
    </>
  )
}

export default App