import React from 'react'

const Button = ({button, filter}) => {
    
    return (
        <div className="items-center mx-auto flex w-4/5 my-5">
            {
                button.map((cat, i)=>{
                    return <button type="button" onClick={()=> filter(cat)} className="w-full border rounded-2xl p-2 m-2 font-medium text-bg-indigo-800 bg-white hover:bg-indigo-500 hover:text-white  border-black hover:shadow inline-flex space-x-2 items-center justify-center">{cat}</button>
                })
            }
        </div>
    )
}

export default Button;