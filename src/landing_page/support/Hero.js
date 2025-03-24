import React from 'react'

function Hero(icon) {
    return ( <div className='container p-5 mb-5'>
        <div className='row  text-white' style={{backgroundColor:"blue",textColor:"white"}}>
            <div className='col-12 p-5'>
                <h1 className='fs-4'>Support Portal</h1>
                <p className='fs-4'>Search for an answer or browse help topics to create a ticket</p>
                <form>
                    <input type='text' className='p-3' style={{width:"100%"}} placeholder='Eg: how do i activate F&O, why is my order getting rehected... ' ></input>
                </form>
            </div>
        </div>
    </div> );
}

export default Hero;