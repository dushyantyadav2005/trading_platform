import React from 'react'


function LeftSection({imageURL,productName,productDesription,tryDemo,learnMore,googlePlay,appStore}) {
    return (<div className='container border-top mt-5 p-5'>
        <div className='row p-5'>
        <div className='col-1'></div>
            <div className='col-5'>
                <img src={imageURL} alt=''/>
            </div>
            <div className='col-2'></div>
            <div className='col-4 pt-5'>
                <h1 className='mb-4'>{productName}</h1>
                <p className='mb-4'>{productDesription}</p> 
                <div className='mb-4'>
                <a href={tryDemo} className='' style={{textDecoration:"none",marginRight:"50px"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                <a href={learnMore} className='' style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                {/* <br/> */}
                <div>
                <a href={googlePlay} className=' 'style={{textDecoration:"none",marginRight:"50px"}}><img src='media/images/googlePlayBadge.svg' alt=''/></a>
                <a href={appStore} className=''><img src='media/images/appStoreBadge.svg' alt=''/></a>
                </div>
            </div>
        </div>
    </div> );
}

export default LeftSection;