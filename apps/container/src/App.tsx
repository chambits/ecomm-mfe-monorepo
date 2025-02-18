import React, { Suspense } from "react";

const ProductList = React.lazy(() => import("products/ProductList"));
const Cart = React.lazy(() => import("cart/Cart"));

const App = () => (
  <div>
    <h1>Microfrontend Store</h1>
    <Suspense fallback={<div>Loading Products...</div>}>
      <ProductList />
    </Suspense>
    <Suspense fallback={<div>Loading Cart...</div>}>
      <Cart />
    </Suspense>
  </div>
);

export default App;
