import React from 'react'


function RightSection({imageURL,productName,productDesription,tryDemo,learnMore,googlePlay,appStore}) {
    return (<div className='container  mt-5'>
        <div className='row'>
        <div className='col-2'></div>
            <div className='col-3 pt-5'>
            <h1 className='mb-4'>{productName}</h1>
                <p className='mb-4'>{productDesription}</p> 
                <div className='mb-4'>
                <a href={learnMore} className='' style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='col-1'></div>
            <div className='col-5'>
               <img src={imageURL} alt=''/>
            </div>
        </div>
    </div> );
}

export default RightSection;