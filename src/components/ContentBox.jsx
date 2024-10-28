import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar CSS
import './ContentBox.css';

function ContentBox(props) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [notices, setNotices] = useState([]);

  // Function to handle fetching notices from the backend
  const fetchNoticesForDate = async (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    try {
      const response = await fetch(`/api/notices?date=${formattedDate}`);
      const data = await response.json();
      setNotices(data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    fetchNoticesForDate(date);
  };

  return (
    <div className="container">
      <div className="left-box">
        {selectedDate ? (
          <>
            <h1>{selectedDate.toDateString()}</h1>
            {notices.length > 0 ? ( // Show notices if available
              <ol>
                {notices.map((notice, index) => (
                  <li key={index}>
                    <a href={notice.url} target="_blank" rel="noopener noreferrer">
                      {notice.text}
                    </a>
                  </li>
                ))}
              </ol>
            ) : (
              <p>No notices for the selected date.</p> // Show this message only if no notices found
            )}
          </>
        ) : (
          <>
            <h1>{props.heading}</h1>
            {props.listItems && props.listItems.length > 0 && (
              <ol>
                {props.listItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            )}
            {props.visionAndMissionContent && (
              <p>{props.visionAndMissionContent}</p>
            )}
            {props.disclaimerContent && props.disclaimerLink && (
              <p>
                {props.disclaimerContent}
                <a href={props.disclaimerLink}>geu.ac.in </a>
              </p>
            )}
            {props.studentErp && (
              <h3>
                <a href={props.studentErp}>Student erp portal</a>
              </h3>
            )}
          </>
        )}
      </div>
      <div className="right-box">
        <h2>New Notices</h2>
        <div style={{ maxWidth: '250px', margin: '0 auto' }}>
          <Calendar onClickDay={handleDateClick} />
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
