import React from 'react'

export default function Cart({keys,title,imag,description}) {
  return (
    <div key={keys}> 
         <div className='row container'>
            <div className='col-md-6'> 
               <div className= "card "> 
                 <img className="card-img-top" src={imag} alt="Card image cap"  />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href="#" className="btn btn-primary">buy it </a>
                        </div>
                </div>
            </div>
         </div>
    </div>
  )
}
