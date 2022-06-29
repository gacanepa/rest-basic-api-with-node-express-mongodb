import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allTeachers } from '../endpoints/teachers';
import Teacher from './Teacher';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const getTeachers = async () => {
      const { data } = await axios.get(allTeachers);
      setTeachers(data);
    }

    getTeachers();
  }, []);

  return (
    <ul>
      {teachers.map((teacher, index) =>
        <Teacher
          name={teacher.name}
          age={teacher.age}
          status={teacher.isEnabled}
          key={index}
        />
      )}
    </ul>
  );
}

export default TeacherList;
