import React from 'react'


function Pricing() {
    return ( 
        <div className='container mb-3'>
            <div className='row mb-5'>
                <div className='col-4 mb-5'>
                    <h1 className='fs-2 '>Unbeatable pricing</h1>
                    <p className="mt-3">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="b" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'> 
                        <div className='col border p-2'>
                            <h1>₹0</h1>
                            <p>Free equilty delivery and direct mutual funds</p>
                        </div>
                        <div className='col border p-2'>
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;