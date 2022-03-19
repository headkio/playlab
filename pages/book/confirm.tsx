import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="space-y-4 ">
        <div className="rounded-md pl-2 shadow-md">
          <h2 className="mb-4 text-xl">일정</h2>
          <div className="grid grid-cols-2 space-y-1">
            <span>2022. 4. 18(월) 14:00</span>
            <span>Farming Lab</span>
            <span>2022. 4. 18(월) 15:00</span>
            <span>Drawing Lab</span>
          </div>
        </div>
        <div className="rounded-md pl-2 shadow-md">
          <h2 className="mb-4 text-xl">예약자 정보</h2>
          <div className="grid grid-cols-2 space-y-1">
            <span>예약자</span>
            <span>박상협</span>
            <span>연락처</span>
            <span>010-1234-1234</span>
            <span>이메일</span>
            <span>tester_1@gmail.com</span>
          </div>
        </div>
        <div className="rounded-md pl-2 shadow-md">
          <h2 className="mb-4 text-xl">결제 정보</h2>
          <div className="grid grid-cols-2 space-y-1">
            <span>예약금 (아동 1명)</span>
            <span>10,000 원</span>
            <span>방문 후 현장 결제금액</span>
            <span>20,000 원</span>
            <span>합계</span>
            <span>30,000 원</span>
          </div>
          <span className="text-sm text-slate-500">
            1시간 내 예약금이 입금되지 않으면 예약이 취소 됩니다.
          </span>
        </div>
      </div>
      <div className="flex justify-around p-4">
        <Link href="/account/book">
          <a className="hover: my-2 flex w-full justify-around rounded-full bg-orange-400 py-2 font-bold text-slate-100 shadow-md hover:bg-orange-500 hover:transition-colors">
            예약 신청하기
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
