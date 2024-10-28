import React from 'react'
import ContentBox from './ContentBox'

function Home() {
  const listItems = [
    { text: 'Syllabus 3rd Sem BCA ', url: ' ' },
    { text: 'Syllabus 5th Sem BCA', url: '' },
    { text: 'Syllabus 1st Sem MCA', url: ' ' },
  ];

  return (
    <div>
      <ContentBox
      heading="Home"
      listItems={listItems}

      />
    </div>
  )
}

export default Home
