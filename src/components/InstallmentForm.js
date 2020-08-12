import React, { useState, useContext } from 'react';

// context
import {FormContext} from '../context/FormContext';

export default function InstallmentForm() {
    const [loanAmountInForm, setLaonAmountInForm] = useState(0);
    const [numberOfEmisInForm, setNumberOfEmisInForm] = useState(0);
    const [rateInForm, setRateInForm] = useState(0);
    const {calculate} = useContext(FormContext)

    const submit = (e) =>{
        e.preventDefault();
        calculate({
            loanAmount: parseInt(loanAmountInForm),
            numberOfEmis: parseInt(numberOfEmisInForm), 
            rate: parseInt(rateInForm)
        });
    }

    const reset = () => {
        setLaonAmountInForm(0);
        setNumberOfEmisInForm(0);
        setRateInForm(0);
    }

    return (
        <form>
            <div>
                <label htmlFor="loan-amount">Loan Amount:</label>
                <input type="number" value={loanAmountInForm} id="loan-amount" onChange={(e) => setLaonAmountInForm(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="num-emis">Total number of EMI payments(in Months):</label>
                <input type="number" value={numberOfEmisInForm} id="num-emis" onChange={(e) => setNumberOfEmisInForm(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="rate">Annual Interest Rate:</label>
                <input type="number" id="rate" value={rateInForm} onChange={(e) => setRateInForm(e.target.value)}/>
            </div>
            <div id="buttons">
                <input type="submit" id="submit-button" value="Calculate" onClick={submit}/>
                <input type="button" id="reset" value="Start-Over" onClick={reset}/>
            </div>
        </form>
    )
}
