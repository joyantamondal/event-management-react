import Font, { Text } from 'react-font'
import './App.css';
import Header from './components/Header/Header';
import Persons from './components/Persons/Persons';

function App() {
  return (
    <div className="Main">
   <Font family='Roboto'>
   <Header></Header>
   <Persons></Persons>   
     </Font>   
    </div>
  );
}

export default App;
