import React, {createContext, useContext, useState} from "react";


const usersData = [
  {
    id: "111001001",
    name: "Dennis",
    course: [
      {
        id: "001",
        name: "Web程式設計",
        notice: {
          isOpen: true,
          teacher: true,
          time: true,
          remind: 0,
        }
      },
      {
        id: "002",
        name: "演算法",
        notice: {
          isOpen: true,
          teacher: false,
          time: true,
          remind: 10,
        }
      }
    ]
  }
]

const NoticeContext = createContext();

export function NoticeProvider({children}) {
  const [users, setUsers] = useState(usersData);

  const updateNoticeTeacher = (userId, courseId) => {
    const updatedUsers = [...users];

    for (let user of updatedUsers) {
      if (user.id === userId) {
        for (let i = 0; i < user.course.length; ++i) {
          if (user.course[i].id === courseId) {
            if (user.course[i].notice.teacher) {
              user.course[i].notice.teacher = false;
            } else {
              user.course[i].notice.teacher = true;
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
            if (user.course[i].notice.time) {
              user.course[i].notice.time = false;
            } else {
              user.course[i].notice.time = true;
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
            if (user.course[i].notice.isOpen) {
              user.course[i].notice.isOpen = false;
            } else {
              user.course[i].notice.isOpen = true;
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
            user.course[i].notice.remind = selectedTime;
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