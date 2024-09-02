import React from 'react'

export default function User() {
    return (
        <>
            <div>
                <div className='flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer '>
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://img.freepik.com/free-photo/3d-rendering-elder-person-portrait_23-2150964616.jpg?t=st=1724479151~exp=1724482751~hmac=ff480b5d669e3d821af39d06fe961e737e203b2146b507f2ad9eaa4f9fffad6f&w=826" />
                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold'>Chandan Yadav</h1>
                        <span>chandan@nova.co</span>
                    </div>
                </div>
            </div>
        </>




    )
}
