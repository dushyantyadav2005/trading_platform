import React from 'react'


function OpenAccount() {
    return (   <div className='container p-5 mb-5'>
        <div className='row text-center'> 
            {/* <img src='media/images/O.png' alt='' className='mb-5'/> */}
            <h1 className='mb-3'>Open a Zerodha account</h1>
            <p className='mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className='p-2 btn btn-primary fs-5 ' style={{width:"17%",margin:"0 auto"}}>Sign up for free</button>
        </div>
    </div> );
}

export default OpenAccount;