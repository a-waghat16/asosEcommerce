import "./App.css";
import Root from "./components/Root/Root";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import { CartContextProvider } from "./contexts/CartContext";
import "./fonts.css";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="productdetail/:id" element={<ProductDetail />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
