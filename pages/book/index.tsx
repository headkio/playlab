import type { NextPage } from "next";
import Link from "next/link";

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
      <div className="py-4 text-xl">Calendar</div>
      <div className="g grid grid-cols-7 text-center">
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
          <div key={day}>{day}</div>
        ))}
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ].map((i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
      <div className="py-4 text-xl">Time table</div>
      <div className="flex space-x-4">
        <Link href="/book/confirm">
          <a className="rounded-full border-none bg-orange-300 px-2 text-white shadow-md hover:bg-orange-500">
            11:00
          </a>
        </Link>
        <Link href="/book/confirm">
          <a className="rounded-full border-none bg-orange-300 px-2 text-white shadow-md hover:bg-orange-500">
            13:00
          </a>
        </Link>
        <Link href="/book/confirm">
          <a className="rounded-full border-none bg-orange-300 px-2 text-white shadow-md hover:bg-orange-500">
            16:00
          </a>
        </Link>
        <Link href="/book/confirm">
          <a className="rounded-full border-none bg-orange-300 px-2 text-white shadow-md hover:bg-orange-500">
            17:00
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
