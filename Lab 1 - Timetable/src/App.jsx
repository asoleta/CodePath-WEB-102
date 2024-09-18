import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Fall 2024 Weekly Schedule</h1>
      <h2>A timetable containing my current life schedule during this Fall semester!</h2>
      <Calendar />
    </div>
  )
}

export default App