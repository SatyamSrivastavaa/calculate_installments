import React, {useContext} from 'react';

// context
import {FormContext} from '../context/FormContext';

export default function Summary() {
    const {
        loanAmount,
        numberOfEmis,
        rate,
        monthlyIntRate,
        monthlyEMIPayment,
        totaInterest,
        totaLoanAmount,
    } = useContext(FormContext);

    return (
        <div id="summary">
            <p>
                <span>Laon Amount:</span>
                <span>{loanAmount}</span>
            </p>
            <p>
                <span>Number of EMIs:</span>
                <span>{numberOfEmis}</span>
            </p>
            <p>
                <span>Annual Interest Rate:</span>
                <span>{rate/100}</span>
            </p>
            <p>
                <span>Monthly Interest Rate</span>
                <span>{monthlyIntRate/100}</span>
            </p>
            <p>
                <span>Monthly EMI Payment</span>
                <span>{monthlyEMIPayment}</span>
            </p>
            <p>
                <span>Total Loan Amount Payble:</span>
                <span>{totaLoanAmount}</span>
            </p>
            <p>
                <span>Total Interest Payble</span>
                <span>{totaInterest}</span>
            </p>
        </div>
    )
}
