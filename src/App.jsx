import { useState, useEffect } from 'react'
import './index.css'
import CurrencyRows from './CurrencyRows';

function App() {

    const [curr1, setCurr1] = useState('USD');
    const [curr2, setCurr2] = useState('EUR');
    const [amount1, setAmount1] = useState('');
    const [amount2, setAmount2] = useState('');
    const [isChangingAmount1, setIsChangingAmount1] = useState(false);
    const [isChangingAmount2, setIsChangingAmount2] = useState(false);

    const handleAmountChange1 = (e) => {
        setIsChangingAmount2(false);
        setIsChangingAmount1(true);
        setAmount1(e.target.value);
        console.log(amount1)
    };

    const handleAmountChange2 = (e) => {
      setIsChangingAmount1(false);
      setIsChangingAmount2(true);
      setAmount2(e.target.value);
      console.log(amount2)
    };
    
    const handleCurrChange1 = (e) => {
        setCurr1(e.target.value);
        console.log(curr1);
    }; 

    const handleCurrChange2 = (e) => {
      setCurr2(e.target.value);
      console.log(curr2);
    };

    const convertCurrency = (amount, fromCurrency, toCurrency) => {
      const conversionRates = {
        USD: 1,
        EUR: 0.93,
        GBP: 0.79,
        JPY: 156.52,
        AUD: 1.52,
        CAD: 1.38,
        CHF: 0.9,
        CNY: 7.25,
        SEK: 10.54,
        NZD: 1.64,
      }
      return (amount*(conversionRates[toCurrency]/conversionRates[fromCurrency]))
    }
    
    useEffect(() => {
      if (isChangingAmount1) {
      setAmount2(convertCurrency(amount1,curr1,curr2))
      }
      else if (isChangingAmount2) {
       setAmount1(convertCurrency(amount2,curr2,curr1))
  }}, [amount1, curr1, curr2, amount2])

    return (
        <>
        <h1 style={{marginTop: "10vh"}}>Currency Converter</h1>
        <CurrencyRows 
         amount={amount1} 
         curr={curr1} 
         handleAmountChange={handleAmountChange1} 
         handleCurrChange={handleCurrChange1} />

        <CurrencyRows 
        amount={amount2} 
        curr={curr2} 
        handleAmountChange={handleAmountChange2} 
        handleCurrChange={handleCurrChange2} />
       </>

    );
}

export default App
