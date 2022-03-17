import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { cls } from "../libs/utils";

const Home: NextPage = () => {
  const [signInType, setSignInType] = useState<"email" | "phone">("email");

  return (
    <div className="mx-10 flex flex-col">
      <div className="my-10 flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-medium text-slate-600">
          아동놀이연구소 PLAYLAB
        </h1>
        <p className="text-center text-sm text-gray-400">
          집에서 더 재밌게! 수업보다 더 알차게! <br />
          놀수있는 놀이패키지를 연구하는 플레이랩입니다.
          <br />
          <span className="text-xl">🧑🏻‍🎨</span>
        </p>
      </div>
      <div className="my-2 flex justify-around space-x-4 rounded-full bg-orange-100 py-2 px-4 shadow-lg">
        <button
          className={cls(
            signInType == "email" ? "bg-orange-400 text-white shadow-md" : "",
            "flex-1 rounded-full py-2 px-10 font-bold text-slate-500 "
          )}
          onClick={() => setSignInType("email")}
        >
          Email
        </button>
        <button
          className={cls(
            signInType == "phone" ? "bg-orange-400 text-white shadow-md" : "",
            "flex-1 rounded-full py-2 px-10 font-bold text-slate-500 "
          )}
          onClick={() => setSignInType("phone")}
        >
          Phone
        </button>
      </div>
      <div className="my-10 space-y-8">
        {signInType == "email" ? (
          <label className="flex flex-col">
            <span>Email</span>
            <input type="email" className="rounded-full border-2" />
          </label>
        ) : (
          ""
        )}
        {signInType == "phone" ? (
          <label className="flex flex-col">
            <span>Phone number</span>
            <input type="tel" className="rounded-full border-2" />
          </label>
        ) : (
          ""
        )}
        <Link href="/book">
          <a className="hover: my-2 flex w-full justify-around rounded-full bg-orange-400 py-2 font-bold text-slate-100 shadow-md hover:bg-orange-500 hover:transition-colors">
            놀러 가기
          </a>
        </Link>
      </div>
      <div className="relative my-5 flex flex-col items-center border-t-2 py-5">
        <span className="absolute top-[-12px] bg-white px-2 text-sm font-medium text-slate-500">
          or Sign in with other account
        </span>
        <div className="mb-10 w-full space-y-3">
          <button className="hover: my-2 flex w-full justify-around rounded-full bg-gray-100 py-2 font-bold text-red-500 shadow-md hover:bg-gray-700 hover:transition-colors">
            Google
          </button>
          <button className="hover: my-2 flex w-full justify-around rounded-full bg-gray-100 py-2 font-bold text-blue-500 shadow-md hover:bg-gray-700 hover:transition-colors">
            Facebook
          </button>
          <button className="hover: my-2 flex w-full justify-around rounded-full bg-gray-100 py-2 font-bold text-yellow-500 shadow-md hover:bg-gray-700 hover:transition-colors">
            Kakaotalk
          </button>
        </div>
        <div className="my-2 space-x-2">
          <span className="w-full text-sm text-slate-500">
            아직 계정이 없으신가요?
          </span>
          <button className="text-sm text-orange-500 hover:text-orange-700">
            계정 생성하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
