import React, { useState } from 'react'



function Header() {

    const [input, setInput] = useState([])
    
  return (
    <div style={{border: 2, height: 100, width:1330, backgroundColor:'orange', borderRadius:5, color:'white'}}>
         
         <h4 style={{marginLeft:600, paddingTop:10}}>Search App Requirement</h4>
         
         <input type="text"
          value={input}
          onChange={(e)=> setInput(e.target.value)}
          style={{alignItems:'center', justifyContent:'center', marginLeft:600,}}
         />
        
          <button type='submit' style={{marginLeft: 20}}>Search</button>
    </div>
  )
}

export default Header
