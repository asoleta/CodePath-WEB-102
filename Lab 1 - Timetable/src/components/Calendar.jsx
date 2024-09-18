import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="time">8 am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">9 am</td>
                <td></td>
                <Event event="Cryptology" color="blue"/>
                <Event event="Literature" color="blue"/>
                <Event event="Cryptology" color="blue"/>
                <Event event="Literature" color="blue"/>
                <Event event="Cryptology" color="blue"/>
                <td></td>
            </tr>

            <tr>
                <td className="time">10 am</td>
                <td></td>
                <Event event="Digital Art 2" color="blue"/>
                <td></td>
                <Event event="Digital Art 2" color="blue"/>
                <td></td>
                <Event event="Digital Art 2" color="blue"/>
                <td></td>
            </tr>

            <tr>
                <td className="time">11 am</td>
                <td></td>
                <td></td>
                <Event event="Tennis" color="blue"/>
                <td></td>
                <Event event="Tennis" color="blue"/>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">12 pm</td>
                <td></td>
                <td></td>
                <Event event="Web Dev" color="blue"/>
                <td></td>
                <Event event="Web Dev" color="blue"/>
                <td></td>
                <td></td>
            </tr>

            <tr>
                <td className="time">1 pm</td>
                <td></td>
                <Event event="Lunch!" color="pink"/>
                <td></td>
                <Event event="Lunch!" color="pink"/>
                <td></td>
                <Event event="Lunch!" color="pink"/>
                <td></td>
            </tr>

            <tr>
                <td className="time">2 pm</td>
                <td></td>
                <Event event="Work" color="green"/>
                <Event event="Lunch!" color="pink"/>
                <Event event="Work" color="green"/>
                <Event event="Lunch!" color="pink"/>
                <Event event="Work" color="green"/>
                <td></td>
            </tr>

            <tr>
                <td className="time">3 pm</td>
                <td></td>
                <Event event="Work" color="green"/>
                <Event event="Work" color="green"/>
                <Event event="Work" color="green"/>
                <Event event="Work" color="green"/>
                <Event event="Work" color="green"/>
                <td></td>
            </tr>

            <tr>
                <td className="time">4 pm</td>
                <td></td>
                <Event event="Work" color="green"/>
                <Event event="Work" color="green"/>
                <Event event="Work" color="green"/>
                <Event event="Work" color="green"/>
                <Event event="Work" color="green"/>
                <td></td>
            </tr>

            <tr>
                <td className="time">5 pm</td>
                <td></td>
                <td></td>
                <Event event="Work" color="green"/>
                <td></td>
                <Event event="Work" color="green"/>
                <td></td>
                <td></td>
            </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Calendar;