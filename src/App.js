import './App.css';
import ItemDescription from './components/ItemDescription.js';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <>
      <NavBar/>
      <ItemDescription 
        title="Apple AirPods" 
        image="https://dummyimage.com/720x600" 
        description="AirPods deliver effortless, all-day audio on the go. And AirPods Pro bring Active Noise Cancellation to an in-ear headphone — with a customizable fit."
      />
    </>
  );
}

export default App;
