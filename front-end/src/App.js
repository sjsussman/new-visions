import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

import groupByGrade from './helpers/groupByGrade'
import findLowestAverages  from './helpers/findLowestAverages'

function App() {
  //useState hook to set the component the state
  const [studentData, setStudentData] = useState([])

  useEffect(() => {
  //Axios checks server @ '/studentlist' endpoint and returns the data in the response
    axios.get('/studentlist')
      .then(res => {
      setStudentData(res.data)
      console.log(studentData)
    })
    .then(res => {
      console.log(groupByGrade(studentData));
      console.log(findLowestAverages(studentData));
    })
      .catch(err => console.log(err));
    }, []);

  return (
    <div>
      Test
    </div>
  );
}

export default App;
