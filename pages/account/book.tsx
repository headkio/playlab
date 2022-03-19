import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="mb-4 text-2xl">내 예약 목록</h1>
      <div className="rounded-md pl-2 shadow-md">
        <div>14:00 파밍랩</div>
        <div>15:00 드로잉랩</div>
      </div>
    </div>
  );
};

export default Home;
