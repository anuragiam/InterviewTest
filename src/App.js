import "./App.css";
import Card from "./components/Card";
import React from "react";
import data from "./cardDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    
    <div className="App">
      <Navbar />   
      <Card data={data}/>
      <Footer />
    </div>
  );
}

export default App;
// var data = [
//   {
//     pic: "asdadasdasdas",
//     name: "asdasd",
//     lorem1: "adas da sdas d",
//     lorem2: "asd asda sd asdaasda dasddasd asd",
//   },
//   {
//     pic: "asdadasdasdas",
//     name: "asdasd",
//     lorem1: "adas da sdas d",
//     lorem2: "asd asda sd asdaasda dasddasd asd",
//   },
//   {
//     pic: "asdadasdasdas",
//     name: "asdasd",
//     lorem1: "adas da sdas d",
//     lorem2: "asd asda sd asdaasda dasddasd asd",
//   },
//   {
//     pic: "asdadasdasdas",
//     name: "asdasd",
//     lorem1: "adas da sdas d",
//     lorem2: "asd asda sd asdaasda dasddasd asd",
//   }
// ];