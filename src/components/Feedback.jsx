import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import ContentBox from './ContentBox'

function Feedback() {
  const listItems = [
    { text: 'ALUMNI FEEDBACK ', url: ' ' },
    { text: 'EMPLOYEE FEEDBACK', url: '' },
    { text: `STUDENTS' FEEDBACK `, url: ' ' },
    { text: `PARENT'S FEEDBACK `, url: ' ' },
    { text: `TEACHERS FEEDBACK ON CURRICULUM `, url: ' ' },
    
  ];

  return (
    <div>
      <ContentBox 
      heading="Feedback"
      listItems={listItems}
      />
       
      
      
    </div>
  )
}

export default Feedback
