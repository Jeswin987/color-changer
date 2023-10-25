import React, { useState } from 'react';

function ColorChanger() {
  const [backgroundColor, setBackgroundColor] = useState('black');
  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <h1 style={{color:'white',marginLeft:'50px'}}>Color Changer App</h1>
        <p  style={{color:'white',marginLeft:'50px'}}>Click the buttons to change the background color.</p>
        <div  style={{marginTop:'20px' ,width:'420px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <button className='butt-1' onClick={() => changeColor('red')}>Red</button>
          <button className='butt-2' onClick={() => changeColor('blue')}>Blue</button>
          <button className='butt-3' onClick={() => changeColor('green')}>Green</button>
          <button className='butt-4' onClick={() => changeColor('yellow')}>Yellow</button>
          <button className='butt-5' onClick={() => changeColor('purple')}>Purple</button>
        </div>
      </div>
    </div>
  );
}

export default ColorChanger;
