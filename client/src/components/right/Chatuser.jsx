import React from 'react'

function Chatuser() {
    return (
        <div className='pt-5 pl-5 h-[8vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
            <div>
                <div className="avatar online">
                    <div className="w-14 rounded-full">
                        <img src="https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964616.jpg?t=st=1724479151~exp=1724482751~hmac=ff480b5d669e3d821af39d06fe961e737e203b2146b507f2ad9eaa4f9fffad6f&w=826" />
                    </div>
                </div>
            </div>
            <div>
            <h1 className='text-xl'>Chandan yadav</h1>
            <span className='text-sm'>online</span>
            </div>
        </div>
    )
}

export default Chatuser
