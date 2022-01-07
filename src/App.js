import './App.css';
import Header from './componets/header/Header';
import Display from './componets/display/Display';
import Footer from './componets/footer/Footer';
import ModalContent from './componets/modal-content/ModalContent';

function App() {
  return (
    <div className="App">
      {/* <ModalContent /> */}
      <Header />
      <main>
        <Display />
      </main>
      <Footer />
    </div>
  );
}

export default App;
