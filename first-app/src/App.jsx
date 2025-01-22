import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <h1>This is my sites mein content</h1>
      </main>

      <div className="cards">
        <Card title='card-1' description='card 2 decription'/>
        <Card title='card-1' description='card 2 decription'/>
        <Card title='card-1' description='card 2 decription'/>
        <Card title='card-1' description='card 2 decription'/>
        <Card title='card-1' description='card 2 decription'/>
        <Card title='card-1' description='card 2 decription'/>
      </div>
      <Footer />
    </>
  );
};

export default App;
