import React, {useContext} from 'react';

// context
import {FormContext} from '../context/FormContext';

export default function InstallmentList() {
    const {
        loanAmount,
        numberOfEmis,
        monthlyIntRate,
        monthlyEMIPayment,
    } = useContext(FormContext);
    let list = new Array(numberOfEmis).fill(0);
    let previousPrincipal = 0;
    let principleRemaining = loanAmount;
    let previousInterest = 0;

    const calculateInterest = () => {
        previousInterest = (principleRemaining * monthlyIntRate/100).toFixed(1);
        return previousInterest;
    }

    const setPrincipalValue = () => {
        previousPrincipal = (monthlyEMIPayment - previousInterest).toFixed(2);
        return previousPrincipal;
    }

    const setPrincipleRemaining = () => {
        principleRemaining = (principleRemaining-previousPrincipal).toFixed(2);
        return principleRemaining;
    }

    return (
        <>
        <table>
           <tr>
                <th>
                    Period
                </th>
                <th>
                    EMI
                </th>
                <th>
                    Interest
                </th>
                <th>
                    Principal
                </th>
                <th>
                    balance
                </th>
           </tr>
           <tr>
                <td>
                    0
                </td>
                <td>
                    
                </td>
                <td>
                   
                </td>
                <td>
                   
                </td>
                <td>
                    {loanAmount}
                </td>
           </tr>
           {
               list.map((value, index) => {
                   return <tr>
                        <td>
                            {index+1}
                        </td>
                        <td>
                            {monthlyEMIPayment}
                        </td>
                        <td>
                            {calculateInterest()}
                        </td>
                        <td>
                            {setPrincipalValue()}
                        </td>
                        <td>
                            {setPrincipleRemaining(index+2)}
                        </td>
                    </tr>
               })
           }
        </table>
        </>
    )
}
