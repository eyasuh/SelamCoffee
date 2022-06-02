import './App.css';
import ProductList from '../ProductList/ProductList';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
    <div class="App">
      <h1>Lucy Coffee</h1>
      <SearchBar />
      <ProductList />
    </div>
  );
}

export default App;
