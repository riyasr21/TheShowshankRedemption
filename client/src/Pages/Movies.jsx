import Header from '../Components/Header/Header'
import React, { useState } from 'react'
import '../movies.css'
import Switch from 'react-ios-switch'

import Advanced from '../Examples/Advanced'
import Simple from '../Examples/Simple'

function Movies() {
  const [showAdvanced, setShowAdvanced] = useState(true)

  return (

    <div className='app'>
      <Header/>
      <Advanced /> 
      {/* <div className='row'>
        <p style={{ color: '#fff' }}>Show advanced example</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} />
      </div> */}
    </div>
  )
}

export default Movies