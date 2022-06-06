import React, {createContext, useContext, useState} from "react";

import usersData from "../data/usersData.json";


const NoticeContext = createContext();

export function NoticeProvider({children}) {
  const [users, setUsers] = useState(usersData);

  const updateNoticeTeacher = (userId, courseId) => {
    const updatedUsers = [...users];

    for (let user of updatedUsers) {
      if (user.id === userId) {
        let status = !user.course[0].showTeacher;
        for (let i = 0; i < user.course.length; ++i) {
          if (courseId === "all") {
            user.course[i].showTeacher = status;
          } else if (user.course[i].id === courseId) {
            user.course[i].showTeacher = !user.course[i].showTeacher;
          }
        }
      }
    }

    setUsers(updatedUsers);
  };

  const updateNoticeTime = (userId, courseId) => {
    const updatedUsers = [...users];

    for (let user of updatedUsers) {
      if (user.id === userId) {
        let status = !user.course[0].showTime;
        for (let i = 0; i < user.course.length; ++i) {
          if (courseId === "all") {
            user.course[i].showTime = status;
          } else if (user.course[i].id === courseId) {
            user.course[i].showTime = !user.course[i].showTime;
          }
        }
      }
    }

    setUsers(updatedUsers);
  };

  const updateNoticeOpen = (userId, courseId) => {
    const updatedUsers = [...users];

    for (let user of updatedUsers) {
      if (user.id === userId) {
        let status = !user.course[0].open;
        for (let i = 0; i < user.course.length; ++i) {
          if (courseId === "all") {
            user.course[i].open = status;
          } else if (user.course[i].id === courseId) {
            user.course[i].open = !user.course[i].open;
          }
        }
      }
    }

    setUsers(updatedUsers);
  };

  const updateRemindTime = (userId, courseId, selectedTime) => {
    const updatedUsers = [...users];

    for (let user of updatedUsers) {
      if (user.id === userId) {
        for (let i = 0; i < user.course.length; ++i) {
          if (courseId === "all") {
            user.course[i].remind = selectedTime;
          } else if (user.course[i].id === courseId) {
            user.course[i].remind = selectedTime;
          }
        }
      }
    }
  }

  return (
    <NoticeContext.Provider value={{
      users,
      updateNoticeTeacher,
      updateNoticeTime,
      updateNoticeOpen,
      updateRemindTime
    }}>
      {children}
    </NoticeContext.Provider>
  );
}

export const useNotices = () => useContext(NoticeContext);