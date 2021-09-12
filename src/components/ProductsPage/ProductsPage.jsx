import { useProducts } from "../../contexts";
import { ProductCard } from "../ProductCard/ProductCard";
import "./productsPage.css";

export const ProductsPage = () => {
  const { products } = useProducts();

  return (
    <div className="page page-products">
      <main className="container-listing">
        <div className="list-products">
          {products &&
            products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </main>
    </div>
  );
};
