import React from 'react'
import Shoes from '../shoes.json'
function Product(){
    // console.log(Shoes);
    return (
        <div>
            <h1>Products</h1>
            <div>
                {Object.keys(Shoes).map(keyName=>{
                    const Shoe=Shoes[keyName];
                    return (<div key={keyName}>
                        <h2>{Shoe.name}</h2>
                        <h3>{Shoe.price}</h3>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Product
