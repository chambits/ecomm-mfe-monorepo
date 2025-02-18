import React, { Suspense } from "react";

const ProductList = React.lazy(() => import("products/ProductList"));
const Cart = React.lazy(() => import("cart/Cart"));

const App = () => (
  <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
    <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
      Microfrontend Store
    </h1>
    <div style={{ display: "flex", gap: "20px" }}>
      <div
        style={{
          flex: 1,
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <Suspense fallback={<div>Loading Products...</div>}>
          <ProductList />
        </Suspense>
      </div>
      <div
        style={{
          width: "300px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: "16px",
        }}
      >
        <Suspense fallback={<div>Loading Cart...</div>}>
          <Cart />
        </Suspense>
      </div>
    </div>
  </div>
);

export default App;
