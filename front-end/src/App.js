import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import groupByGrade from './helpers/groupByGrade'
import findLowestAverages  from './helpers/findLowestAverages'

function App() {
  //useState hook to set the component the state
  const [studentData, setStudentData] = useState([])
  const [grades, setGrades] = useState()
  const [averages, setAverages] = useState([])

  useEffect(() => {
  //Axios checks server @ '/studentlist' endpoint and returns the data in the response
    axios.get('/studentlist')
      .then(res => {
        setGrades([groupByGrade(res.data)])
        setAverages(findLowestAverages(res.data))
    })
      .catch(err => console.log(err));
    }, []);

    let renderStudents;
    if (grades) {
      renderStudents = grades[0].map((student) => {
        return <div key={student.name}>
          <p className='name'>{student.name}</p><p className='grade'>Grade:{student.grade}</p>
          </div>;
      });
    }

    let renderAverage;
    if (averages) {
      renderAverage = averages.map((student) => {
        return <div key={student.name}>
          <p className='name'>{student.name}</p><p className='grade'>Grade: {student.grade}</p> <p className='average'>Grade Average: {student.average}</p>
          </div>;
      });
    }

  return (
    <div>
      <h1>Steven's New Vision Performance Task</h1>
    <div id='container'>
      <div id='roster'> 
      <h2>Student Roster</h2>
        <div id='ros'>{renderStudents}</div>
      </div>
      <div id='lowestAverage'>
      <h2>Lowest Average</h2>
        <div id='avg'>{renderAverage}</div>
      </div>
    </div>
    </div>
  );
}

export default App;
