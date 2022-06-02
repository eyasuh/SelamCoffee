import './App.css';
import ProductList from '../ProductList/ProductList';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div class="App">
      <h1>Lucy Coffee</h1>
      <SearchBar />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
