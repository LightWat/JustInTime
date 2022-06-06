import React, {createContext, useContext, useState} from "react";

import usersData from "../data/usersData.json";


const NoticeContext = createContext();

export function NoticeProvider({children}) {
  const [users, setUsers] = useState(usersData);

  const updateNoticeTeacher = (userId, courseId) => {
    const updatedUsers = [...users];

    for (let user of updatedUsers) {
      if (user.id === userId) {
        for (let i = 0; i < user.course.length; ++i) {
          if (user.course[i].id === courseId) {
            if (user.course[i].showTeacher) {
              user.course[i].showTeacher = false;
            } else {
              user.course[i].showTeacher = true;
            }
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
        for (let i = 0; i < user.course.length; ++i) {
          if (user.course[i].id === courseId) {
            if (user.course[i].showTime) {
              user.course[i].showTime = false;
            } else {
              user.course[i].showTime = true;
            }
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
        for (let i = 0; i < user.course.length; ++i) {
          if (user.course[i].id === courseId) {
            if (user.course[i].open) {
              user.course[i].open = false;
            } else {
              user.course[i].open = true;
            }
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
          if (user.course[i].id === courseId) {
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