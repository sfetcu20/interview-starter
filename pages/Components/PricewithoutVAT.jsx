const PricewithoutVAT=({values,setValues})=>{
    const handleChangePrice=(e)=>{
            const aux=(parseInt(e.target.value) * parseInt(values.VATRate)/100 + parseInt(e.target.value)).toFixed(2);
            setValues({...values,PricewithoutVAT:e.target.value,PricewithVAT:aux})
    }
    return( 
        <div>
            <label className="flex flex-column " htmlFor='price'><p className='text-glow'><span className='font-size-18 mg-right-5px'>&#8900;</span>Sale price without VAT:</p>
                <input type="text" id="price" className="input-style mg-top-10px pad-left-30px" onChange={handleChangePrice} value={values.PricewithoutVAT} name="price"/>
            </label>
        </div>
    );
}
export default PricewithoutVAT;