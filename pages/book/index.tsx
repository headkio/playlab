import type { NextPage } from "next";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <label>연령</label>
        <input type="number" className="border-2"></input>
      </div>
      <div>
        <label>날짜</label>
        <input type="number" className="border-2"></input>
      </div>
      <div>
        <label>Lab</label>
        <select className="border-2">
          <option>Farming Lab</option>
          <option>Drawing Lab</option>
          <option>Sensation Lab</option>
        </select>
      </div>
      <Calendar
        className="py-10"
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default Home;
