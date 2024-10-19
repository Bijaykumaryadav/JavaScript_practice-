import React, { useEffect, useState } from 'react'

function Timer() {
    const [currentTime,setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        },1000);
        return () => clearInterval(timer);
    },[]);
  return (
    <div className="mb-4 text-xl font-semibold text-center text-gray-700">
      {currentTime.toLocaleString()}
    </div>
  )
}

export default Timer
