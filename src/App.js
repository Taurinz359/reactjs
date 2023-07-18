import './assets/css/App.css';
import './components/Header';
import HeaderBar from './components/Header';
import NewsCards from './components/NewsCards';

const App = () => {
  return (
    <>
      <HeaderBar />
      <NewsCards />
    </>
  );
};

export default App;
