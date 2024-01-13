import { useEffect, useState } from "react";
import { Recipes } from "./components/Recipes";
function App() {
  //stan dla przepisów (usestate)
  //Pobrane przepisów z dummyjson
  //console.log pobranych przepisów z dummyjson

  /* mój fetch
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/recipes");

        const responseData = await response.json();

        console.log(responseData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    console.log(error.message);
  }*/

  return (
    <main className="container">
      <article>
        <h1>Welcome to the world of Recipes</h1>
      </article>
      <Recipes></Recipes>
    </main>
  );
}

export default App;
