import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="space-y-2">
      <div className=" space-y-6 rounded-2xl bg-slate-100 px-4 py-10">
        <div className="relative  flex">
          <label className="absolute left-5 top-1 mx-2 text-ellipsis text-slate-500">
            나이
          </label>
          <input
            type="text"
            className="w-full rounded-full border-gray-300 py-4 px-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
        </div>
        <div className="flex space-x-2">
          <div className="relative  flex">
            <label className="absolute left-5 top-1 mx-2 text-ellipsis text-slate-500">
              시작일
            </label>
            <input
              type="text"
              className="w-full rounded-l-full border-gray-300 py-4 px-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
          </div>
          <div className="relative  flex">
            <label className="absolute left-5 top-1 mx-2 text-ellipsis text-slate-500">
              종료일
            </label>
            <input
              type="text"
              className="w-full rounded-r-full border-gray-300 py-4 px-12 shadow-sm shadow-md focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
          </div>
        </div>

        <div className=" flex justify-around">
          <button className="rounded-full border-2 border-orange-500 px-3 py-1 hover:bg-orange-500 hover:text-white hover:ring-2 hover:ring-orange-500 hover:ring-offset-2 hover:transition-all">
            Farming Lab 🌱
          </button>
          <button className="rounded-full border-2 border-orange-500 px-3 py-1 hover:bg-orange-500 hover:text-white hover:ring-2 hover:ring-orange-500 hover:ring-offset-2 hover:transition-all">
            Drawing Lab 🌈
          </button>
          <button className="rounded-full border-2 border-orange-500 px-3 py-1 hover:bg-orange-500 hover:text-white hover:ring-2 hover:ring-orange-500 hover:ring-offset-2 hover:transition-all">
            Sensation Lab 🏃‍♀️
          </button>
        </div>
        <div className="flex w-full justify-around rounded-full bg-orange-400 py-2 font-bold text-slate-100 shadow-md hover:cursor-pointer hover:bg-orange-500 hover:transition-colors">
          Search
        </div>
      </div>

      <div className=" space-y-6 rounded-2xl bg-slate-100 px-4 py-10">
        <div className="text-center text-2xl font-thin">4월</div>
        <div className="g grid grid-cols-7 text-center">
          {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
            <div key={day} className="py-4">
              {day}
            </div>
          ))}
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
          ].map((i) => (
            <div
              key={i}
              className="py-4 hover:cursor-pointer hover:rounded-full hover:bg-slate-500 hover:text-white"
            >
              {i}
            </div>
          ))}
        </div>
      </div>
      <div className="flex space-y-6 rounded-2xl bg-slate-100 px-4 py-5">
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
    </div>
  );
};

export default Home;
