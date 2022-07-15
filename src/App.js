import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Contacts from './components/CreateContacts';

function App() {
  return (
    <div className='ui container'>
      <Header />
      <Contacts />
    </div>
  );
}

export default App;
