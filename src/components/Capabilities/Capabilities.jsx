import React from 'react'
import { capabilities } from '../../caps'
import './Capabilities.css'

const Capabilities = () => {
  return (
    <div id='capabilities' className='container manrope-regular'>
      <div className='cap-left'>
        <h2 className='bebas-neue-regular'>My Capabilities</h2>
      </div>
      <div className='cap-right'>
        <p>I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. </p>
        <div className='cap-info'>
          {capabilities.map(cap => (
            <div className='capability'>
              {cap}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Capabilities