import Nav from './components/Nav';
import ProductPage from './pages/ProductPage';
import styles from './App.module.css';

function App() {
  return (
    <>
      <Nav />
      <main className={styles.container}>
        <ProductPage />
      </main>
    </>
  );
}

export default App;
