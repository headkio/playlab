import type { NextPage } from "next";

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
        <input type="number" className="border-2"></input>
      </div>
      <div>
        {[1, 2, 3].map((i) => {
          <div>x</div>;
        })}
      </div>
    </div>
  );
};

export default Home;
