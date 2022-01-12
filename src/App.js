import { useSelector } from 'react-redux';

import './App.css';
import Header from './componets/header/Header';
import Display from './componets/display/Display';
import Footer from './componets/footer/Footer';
import ModalContent from './componets/modal-content/ModalContent';

import { Provider } from 'react-redux';

import store from './store/store';

function App() {
  const modal = useSelector((state) => state.modal);
  const { modalIsShown } = modal;

  return (
    <Provider store={store}>
      <div className="App">
        {modalIsShown && <ModalContent />}
        <Header />
        <main>
          <Display />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
