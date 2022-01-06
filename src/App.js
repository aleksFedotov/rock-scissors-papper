import './App.css';
import Header from './componets/header/Header';
import Display from './componets/display/Display';
import Footer from './componets/footer/Footer';
import Rules from './componets/rules-card/Rules';

function App() {
  return (
    <div className="App">
      <Rules />
      <Header />
      <main>
        <Display />
      </main>
      <Footer />
    </div>
  );
}

export default App;
