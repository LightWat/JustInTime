import React from 'react'
import '../CSS/Popup.css'

function Popup(props) {
  return (props.trigger)?(
      <div className="popup-inner">
        <button className="close-btn" onClick={()=> props.setTrigger(false)}></button>
        {props.children}
      </div>

  ): "";
}

export default Popup
