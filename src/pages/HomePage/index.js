import { useState, useEffect } from "react"
import "./style.css"
// import Header from '../../components/Header'
import Title from '../../components/Title'
import Loader from "../../components/Loader"
import Products from "../Products"

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch(`https://apps.kodim.cz/react-2/xxxmuck/products`)
      .then((response) => response.json())
      .then((data) => {
        setPageData(data);

        setLoading(false);
      });
  }, []);
  
return (
    <>
      <main>
        <Title />

        {loading ? <Loader /> : <Products props={pageData} />}
      </main>
        
    </>
  );
};

export default HomePage