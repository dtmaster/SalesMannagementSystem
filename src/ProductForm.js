import React from 'react';
import ThreeInput from './Component/ThreeInput'
import SubmitButton from './Component/SubmitButton'
import SingleInput from './Component/SingileInput'

const ProductForm = ()=>{
    return(
    <div>
        <ThreeInput title="공급단가" placeholder="$"/>
        <ThreeInput title="구매단가" placeholder="$"/>
        <ThreeInput title="구매/공급수량" placeholder="ea"/>
        <SingleInput title="환율" label="￦/$ Ratio" placeholder="￦"/>
        <SingleInput title="기술요율" label="Royalty Ratio" placeholder="%"/>
        <SubmitButton/>
    </div>
);
}


export default ProductForm;