const CurrencyRows = ({amount, curr, handleAmountChange, handleCurrChange}) => {
    return ( 
        <>
        <div className="inputs-box" style={{marginTop: "8vh"}}>
          <form>
          <input type="number" placeholder='0.00' value={amount} onChange={handleAmountChange} className='text-inputs' />
            <select name="currency" id="currency1"value={curr} onChange={handleCurrChange} className='currs'>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="AUD">AUD</option>    
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CNY">CNY</option>
                <option value="SEK">SEK</option>
                <option value="NZD">NZD</option>
            </select>
        </form>          
        </div>
        </>  
        );
}
 
export default CurrencyRows;