import React from 'react';
import InstallmentForm from './components/InstallmentForm';
import FormContextProvider from './context/FormContext';
import Summary from './components/Summary';
import InstallmentList from './components/InstallmentList';

function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <div id="form-summary-container">
            <InstallmentForm />
            <Summary />
        </div>
        <InstallmentList />
      </FormContextProvider>
    </div>
  );
}

export default App;
