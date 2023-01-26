import React, {useState, useEffect} from 'react'

function Featured() {

  const [loading, setLoading] = useState(false)

        useEffect(() => {
        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
      }, [])

  return (
    
    <div>
      
      
        <div>yes</div>
      
    
    </div>
  )
}

export default Featured