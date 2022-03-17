import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl">예약 하시겠습니까?</h1>
      <div>
        <div>
          <input type="checkbox" />
          <span>아이 1</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>아이 2</span>
        </div>
        <div>
          <input type="checkbox" />
          <span>아이 3</span>
        </div>
      </div>
      <div className="flex justify-around space-x-4 p-10">
        <Link href="/book/complete">
          <a className="hover: my-2 flex w-full justify-around rounded-full bg-orange-400 py-2 font-bold text-slate-100 shadow-md hover:bg-orange-500 hover:transition-colors">
            YES
          </a>
        </Link>
        <Link href="/book/complete">
          <a className="hover: my-2 flex w-full justify-around rounded-full bg-orange-400 py-2 font-bold text-slate-100 shadow-md hover:bg-orange-500 hover:transition-colors">
            NO
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
