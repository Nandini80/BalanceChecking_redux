import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from "./components/Navbar";
import Store from './components/Bank';

function App() {

  return (
    <>
       <Navbar></Navbar>
       <Store />
    </>
  )
}

export default App
