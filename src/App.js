import './styles.css';

import ShipmentForm from './components/ShipmentForm';

import {Fragment} from 'react';



function App() {
  return (
    <Fragment>
      <header className=''>
        <h1 className='text-center heading-color'>Shipment Registration</h1>
      </header>

      <main>
        <ShipmentForm/>
      </main>

      <footer></footer>
    </Fragment>
  );
}

export default App;
