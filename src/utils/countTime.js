import coursesData from "../data/coursesData.json";


export function countTime(course) {
  const courseTime = coursesData.find(courseData => 
    courseData.id === course.id).time;
  const remindTime = course.remind;
  const nowTime = new Date();

  let day;
  switch (courseTime.substring(0, 3)) {
    case "SUN":
      day = 0;
      break;
    case "MON":
      day = 1;
      break;
    case "TUE":
      day = 2;
      break;
    case "WED":
      day = 3;
      break;
    case "THU":
      day = 4;
      break;
    case "FRI":
      day = 5;
      break;
    case "SAT":
      day = 6;
      break;
    default:
      day = -1;
  }

  
  if (day !== nowTime.getDay()) {
    return -1;
  }

  let courseTimeObject = new Date();
  courseTimeObject.setHours(parseInt(courseTime.substring(4, 6)));
  courseTimeObject.setMinutes(parseInt(courseTime.substring(7, 9)));
  courseTimeObject.setSeconds(0);

  // console.log(courseTimeObject);
  // console.log(nowTime);
  // console.log(remindTime);
  // console.log(courseTimeObject.getTime() - nowTime.getTime() - remindTime * 1000 * 60);

  return courseTimeObject.getTime() - nowTime.getTime() - remindTime * 1000 * 60;
}