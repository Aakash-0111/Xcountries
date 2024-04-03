import { useState, useEffect } from "react";
import  "./App.css";

function App() {
  const [countries, setCountries] = useState([]);

  const getCountriesData = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const res = await data.json();
      setCountries(res);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    getCountriesData();
  }, []);

  return (
    <div className="container">
      {countries.map((country) => {
        return (
          <div key={country.cca3} className="cardStyle">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="imageStyle"
            />
            <p className="textStyle">{country.name.common}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;