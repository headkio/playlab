import type { NextPage } from "next";
import moment from "moment";

const Home: NextPage = () => {
  return (
    <div>
      <div>
        <label>연령</label>
        <input
          type="text"
          className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
        ></input>
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
    </div>
  );
};

export default Home;
