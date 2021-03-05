import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import MainComponent from './components/MainComponent';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore()

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainComponent/>
      </div>
    </Provider>
    
  );
}

export default App;
