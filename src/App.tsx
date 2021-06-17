import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onErrorButtonClickHandle = React.useCallback(() => {
    throw new Error ("This button throw error");
  }, []);

  return (
    <div className="App">
        <input type="button" onClick={onErrorButtonClickHandle} value="Throw Error" />
    </div>
  );
}

export default App;
