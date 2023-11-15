import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./pages/SharedLayout"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <SharedLayout /> }>
          <Route index element={ <HomePage /> }/>
          <Route path="/productPage/:id" element={ <ProductPage /> }/> 
          <Route path="*" element={ <Error />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App