import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import GoogleMapComponent from "./components/GoogleMapComponent";

function App() {
    const [data, setData] = useState([])
    console.log(data)

  useEffect(()=>{
      fetch("https://data.culture.gouv.fr/api/v2/catalog/datasets/panorama-des-festivals/records")
          .then(
              res => {
                  return res.json()
              }
          )
          .then(
              res => {
                  setData(res)
              }
          )
          .catch(e => console.log(e))
  }, [])

    function research(e){
        let value = e.target.value;
    }
  return (
    <>
        <GoogleMapComponent />
    </>
  );
}

export default App;
