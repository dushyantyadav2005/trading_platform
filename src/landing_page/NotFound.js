import React from 'react'


function NotFound() {
    return (   <div className='container p-5 mb-5'>
        <div className='row text-center'> 
            {/* <img src='media/images/O.png' alt='' className='mb-5'/> */}
            <h1 className='mb-3'>404 Not Found</h1>
            <p className='mb-4'>Sorry the page you are looking for does not exist.</p>
            {/* <button className='p-2 btn btn-primary fs-5 ' style={{width:"17%",margin:"0 auto"}}>Go Home</button> */}
        </div>
    </div> );
}

export default NotFound;