import React from 'react'


function Universe() {
    return (<div className='container  mt-5'>
        <div className='row text-center'>
            <h1>The Zerodha Universe</h1>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
        <div className='col-4 fs-6 text-muted'>
            <div>
            <img src='media/images/zerodhaFundhouse.png' alt='' style={{width:"45%"}} className='p-2 '/>
            <p className='p-3' style={{fontSize:"10px"}}>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
            </div>
            <div>
            <img src='media/images/streakLogo.png' alt='' style={{width:"40%"}} className='p-2'/>
            <p className='p-3' style={{fontSize:"10px"}}>Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
</div>
            {/* <img src='media/images/sensibullLogo.svg' alt=''/> */}
        </div>
        <div className='col-4'>
            {/* <img src='media/images/zerodhaFundhouse.png' alt=''/>
            <img src='media/images/streakLogo.png' alt=''/> */}
             <div>
            <img src='media/images/sensibullLogo.svg' alt='' style={{width:"45%"}} className='p-2 '/>
            <p className='p-3' style={{fontSize:"10px"}}>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
            </div>
            <div>
            <img src='media/images/smallcaseLogo.png' alt='' style={{width:"40%"}} className='p-2'/>
            <p className='p-3' style={{fontSize:"10px"}}>Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.</p>
</div>
        </div>
        <div className='col-4'>
            {/* <img src='media/images/zerodhaFundhouse.png' alt=''/>
            <img src='media/images/streakLogo.png' alt=''/> */}
             <div>
            <img src='media/images/goldenpiLogo.png' alt='' style={{width:"45%"}} className='p-2 '/>
            <p className='p-3' style={{fontSize:"10px"}}>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
            </div>
            <div>
            <img src='media/images/dittoLogo.png' alt='' style={{width:"40%"}} className='p-2'/>
            <p className='p-3' style={{fontSize:"10px"}}>Personalized advice on life
and health insurance. No spam
and no mis-selling.
</p>
</div>
           
        </div>
        <button className='p-2 btn btn-primary fs-5 ' style={{width:"17%",margin:"0 auto"}}>Sign up for free</button>
        </div>
    </div> );
}

export default Universe;