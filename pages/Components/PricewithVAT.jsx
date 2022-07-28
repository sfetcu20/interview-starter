const PricewithVAT = ({values,setValues})=>{
    const handleChangeVAT=(e)=>{
        const aux=(parseInt(e.target.value)/(1+parseInt(values.VATRate)/100)).toFixed(2);
        setValues({...values,PricewithVAT:e.target.value,PricewithoutVAT:aux})
}
    return( 
        <label htmlFor='vatprice' className='flex flex-column'><p className='text-glow'><span className='font-size-18 mg-right-5px'>&#8900;</span>Sale price with VAT:</p>
            <input type="text" className="input-style mg-top-10px pad-left-30px" onChange={handleChangeVAT} value={values.PricewithVAT} />
          </label>
    );
}
export default PricewithVAT;