import "./App.css";
import { Header } from "./Components/Header";
import { Mobile } from "./Components/mobile";
import { Product } from "./Components/product";
import { Footer } from "./Components/footer";

function App() {
  return (
    <div>
      <Header />
      <Mobile />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
