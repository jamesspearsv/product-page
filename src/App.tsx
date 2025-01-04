import './App.css';
import ActionButtons from './components/ActionButtons';
import ImageCarousel from './components/ImageCarousel';
import Nav from './components/Nav';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <>
      <Nav />
      <main>
        <ImageCarousel />
        <div>
          <ProductInfo />
          <ActionButtons />
        </div>
      </main>
    </>
  );
}

export default App;
