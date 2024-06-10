import React, { useState } from 'react'
import './FAQ.css'
import { questions } from '../faqQuestion';

function FAQ() {
  const [selected ,setSelected]=useState(null);
  const toggle=(i)=>{
    
      if(selected===i){
        return setSelected(null) 
      }
    setSelected(i)
  }
  return (
    <>
    <h2 className='faq-heading'>f<span>a</span>q</h2>
    <div className='faq-wrap'>
    
      <div className='accordion'>
        {questions.map((item,i)=>{
          return(
          <div className="item">
            <div className='title' onClick={()=>toggle(i)}>
              <h3>{item.question}</h3>
              <span>{selected===i?"-":"+"}</span>
            </div>
            <div className={selected===i?"answer show":"answer"}>{item.answer}</div>
          </div>
          )
        })}
      </div>
    </div>
  </>      
  
  );
}

export default FAQ
{/* <h2 id='accordion'>Accordion</h2> */}