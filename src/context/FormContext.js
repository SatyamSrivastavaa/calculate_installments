import React, {useState, useEffect, createContext} from 'react';

export const FormContext = createContext();

export default function FormContextProvider(props) {
    const [loanAmount, setLaonAmount] = useState(0);
    const [numberOfEmis, setNumberOfEmis] = useState(0);
    const [rate, setRate] = useState(0);
    const [monthlyIntRate, setMonthlyIntRate] = useState(0);
    const [totaLoanAmount, setTotaLoanAmount] = useState(0);
    const [totaInterest, setTotaInterest] = useState(0);
    const [monthlyEMIPayment, setMonthlyEMIPayment] = useState(0);

    useEffect(() => {
        const mnthlyInterestRate = rate/12;
        setMonthlyIntRate(mnthlyInterestRate);
        const monthlyEMIPaymentTest = ((loanAmount*(mnthlyInterestRate/100))/(1-Math.pow((1+(mnthlyInterestRate/100)),(-numberOfEmis)))).toFixed(4);
        setMonthlyEMIPayment(monthlyEMIPaymentTest);
        const totalAMount = (monthlyEMIPaymentTest*numberOfEmis).toFixed(2);
        setTotaLoanAmount(totalAMount);
        setTotaInterest(totalAMount-loanAmount);
    }, [loanAmount, numberOfEmis, rate]);

    const calculate = ({loanAmount, numberOfEmis, rate}) => {
        setRate(rate);
        setLaonAmount(loanAmount);
        setNumberOfEmis(numberOfEmis);
    }

    return (
        <FormContext.Provider value={{
            loanAmount,
            numberOfEmis,
            rate,
            monthlyIntRate,
            monthlyEMIPayment,
            totaInterest,
            totaLoanAmount,
            calculate
        }}>
            {props.children}
        </FormContext.Provider>
    )
}
