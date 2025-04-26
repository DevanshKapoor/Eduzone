import React from 'react'

const TimeNow = () => {
    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
 
    return (
        <div className="text-gray-700 text-sm pt-2">{showTime}</div>
    );
}

export default TimeNow