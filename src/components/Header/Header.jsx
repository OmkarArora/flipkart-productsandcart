import { useNavigate } from "react-router";
import "./header.css";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header-app">
      <div>Flipkart</div>
      <nav>
        <button className="btn-nav" onClick={() => navigate("/")}>
          Products
        </button>
        <button className="btn-nav" onClick={() => navigate("/cart")}>
          Cart
        </button>
      </nav>
    </header>
  );
};
