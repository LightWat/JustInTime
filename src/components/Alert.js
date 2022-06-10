import Popup from './components/Popup';
import {useState ,useEffect} from 'react';

function App() {
  const [buttonPopup, setButtonPopup]= useState(false);
  const [timedPopup, setTimedPopup]= useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setTimedPopup(true);
    }, 3000);
  },[]);

  return (
    <div className="App">
      <main>
        <h1>課程提醒</h1>
        <button onClick={() => setButtonPopup(true)}>確定通知</button>
      </main>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>課程提醒通知</h3>
          <p>web程式設計</p>
          <p>教師：盧建成</p>
          <p>上課時間：13:00~16:00(一)</p>
          <p>上課連結：點這裡!</p>          
      </Popup>
  
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
          <h3>上課提醒</h3>
          <p>web程式設計</p>
          <p>教師：盧建成</p>
          <p>十分鐘後上課</p>
          <p>上課連結：點這裡!</p>          
      </Popup>
    </div>
  );
}

export default App;
