import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleClick = (e: any, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="w-full h-full min-h-screen">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/SolarFund_copy_2_1.png" className="max-w-md rounded-lg" />
          <div>
            <h1 className="text-7xl font-bold w-4/5">
              Incentivise Donors,
              <br />
              with treasure hunts!
            </h1>
            <p className="py-6">
              All the <span className="font-bold">transparency</span>. with one
              button{" "}
              <span className="font-bold">
                Gamification of Donations to non-profit causes
              </span>
              .
            </p>
            <button
              onClick={(event) => handleClick(event, "/charities")}
              className="btn btn-outline"
            >
              explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
