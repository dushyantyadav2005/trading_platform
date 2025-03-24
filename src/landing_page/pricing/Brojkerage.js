import React from 'react'


function Brojkerage() {
    return ( <div className='container p-5 mb-5'>
        <div className='row '> 
           <div className='col-4'>
            <img src='media/images/pricing0.svg' alt=''/>
            <h3 className='mb-5'>Free equity delivery</h3>
            <p className='text-muted '>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
           </div>
           <div className='col-4'>
           <img src='media/images/intradayTrades.svg' alt=''/>
           <h3 className='mb-5'>Intraday and F&O trades</h3>
           <p className='text-muted '>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
           </div>
           <div className='col-4'>
           <img src='media/images/pricing0.svg' alt=''/>
           <h3 className='mb-5'>Free direct MF</h3>
           <p className='text-muted '>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
           </div>
        </div>
    </div> );
}

export default Brojkerage;