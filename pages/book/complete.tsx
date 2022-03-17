import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>예약이 완료되었습니다 !! 😘</h1>
      <div>
        <div>14:00 파밍랩</div>
        <div>15:00 드로잉랩</div>
      </div>
      <Link href="/book">
        <a className="hover: my-2 flex w-full justify-around rounded-full bg-orange-400 py-2 font-bold text-slate-100 shadow-md hover:bg-orange-500 hover:transition-colors">
          처음으로
        </a>
      </Link>
    </div>
  );
};

export default Home;
