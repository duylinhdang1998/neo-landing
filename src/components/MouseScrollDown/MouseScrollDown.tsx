import React from 'react';
import "./styles.css"
export default function MouseScrollDown() {
  return (
    <div className='hidden lg:block absolute top-[110%] left-[10px] z-10'>
      <div className='mouse_scroll'>
        <div className='mouse'>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <span className='m_scroll_arrows unu'></span>
          <span className='m_scroll_arrows doi'></span>
          <span className='m_scroll_arrows trei'></span>
        </div>
      </div>
    </div>
  );
}
