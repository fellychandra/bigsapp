import React from 'react'

const Button = ({ height, width, bgColor, textColor, text }) => {
    return (
        <>
            <button className={`h-${height} w-${width} bg-${bgColor} text-${textColor} p-3 rounded-md`}>
                {text}
            </button>
        </>
    )
}

export default Button
