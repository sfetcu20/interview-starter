const VATRate = ({values,setValues})=>{
    const handleChangeRate=(e)=>{
        const aux=(parseInt(values.PricewithoutVAT) * parseInt(e.target.value)/100 + parseInt(values.PricewithoutVAT)).toFixed(2);
        setValues({...values,VATRate:e.target.value,PricewithVAT:aux})
}
    return( 
       <div>
        <label htmlFor='rate' className='flex gap-2'>
            <p className='text-glow'><span className='font-size-18 mg-right-5px'>&#8900;</span>VAT Rate:</p>
            <select onChange={handleChangeRate} value={values.VATRate} className="input-style circle pad-y10"  name="rate">
            <option value="1">1%</option>
            <option value="5">5%</option>
            <option value="10">10%</option>
            <option value="19">19%</option>
          </select>
          </label>
       </div>
    );

}
export default VATRate;