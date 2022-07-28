import { useState } from "react";
import PricewithoutVAT from "./PricewithoutVAT";
import PricewithVAT from "./PricewithVAT";
import VATRate from "./VATRate";
const VATForm = ({handleSubmit})=>{
    const [values,setValues] =useState({PricewithoutVAT:"",VATRate:"19",PricewithVAT:""})
    return( 
        <form onSubmit={()=>handleSubmit(values)} className="bg-glow text-shadow lt-spacing-1 trans-upper font-size-14px font-ms flex flex-column gap-2 border-black pad-x-2 pad-y-2">
          <PricewithoutVAT values={values} setValues={setValues}/>
          <VATRate values={values} setValues={setValues}/>
          <PricewithVAT values={values} setValues={setValues}/>
          <div className='flex flex-end'>
            <input className="input-style btn-style w-half" type="submit" value="SUBMIT"/>
          </div>
        </form>
    );
}
export default VATForm;