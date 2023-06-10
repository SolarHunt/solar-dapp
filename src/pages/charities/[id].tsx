import { Fragment, ReactNode, useState } from "react";
import { useRouter } from "next/router";

const hunt = {
  charity: "Bingus Chairty",
  name: "Lorem Ipsum",
  address: "0x123...789",
  description:
    "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  status: "Open",
  start: "06/12/2023:H03:14",
  end: "06/13/2023:H03:14",
  entry: "15",
  total: "345",
  participants: "33",
};

const huntSecret = {
  yourDeposit: "15",
  secret: "AAAAAAAAAA",
  prize: "90",
};

function Charity() {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const switchStep = (e: any) => {
    // ToDo - add connection to smart contracts here
    setStep(step + 1);
  };

  return (
    <div className="mx-auto text-gray-300 lg:px-0 w-full">
      <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content flex-col-reverse">
          <div className="text-center lg:text-left w-3/4 md:w-3/5">
            <div className="flex flex-row w-full justify-between align-center text-left items-center">
              <div className="text-5xl font-bold">{hunt.name}</div>
              <div className="flex flex-col">
                <div className="badge badge-primary badge-outline">
                  {hunt.address}
                </div>
              </div>
            </div>
            <p className="py-6 center self-center text-left">
              {hunt.description}
            </p>
          </div>

          <div className="stats shadow my-12">
            <div className="stat">
              <div className="stat-figure text-secondary"></div>
              <div className="stat-title">Tresure Hunts</div>
              <div className="stat-value">13</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary"></div>
              <div className="stat-title">Gathered Funds</div>
              <div className="stat-value">4,200</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary"></div>
              <div className="stat-title">Participants</div>
              <div className="stat-value">118</div>
            </div>
          </div>

          {step == 0 ? (
            <div className="indicator w-3/4 md:w-2/5 min-w-md h-2xl mx-auto items-center justify-center">
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
          ) : null}
          {step == 1 ? (
            <div className="indicator w-3/4 md:w-2/5 min-w-md h-2xl">
              <span className="indicator-item indicator-center badge badge-primary">
                15 hours left
              </span>
              <div className="card flex-shrink-0 w-full min-w-md shadow-2xl bg-base-100 md:w-96 md:h-96">
                <div className="card-body flex gap-4">
                  <div>
                    <div className="flex flex-row w-full justify-around align-center text-center items-center ">
                      <div className="text-3xl font-bold pb-8">
                        {hunt.charity}
                      </div>
                    </div>
                    <div className="font-normal">
                      Your Entry:{" "}
                      <span className="font-bold">
                        {huntSecret.yourDeposit}
                      </span>
                    </div>
                    <div className="font-normal">
                      Clue:{" "}
                      <span className="font-bold">{huntSecret.secret}</span>
                    </div>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Secret Key"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button
                      className="btn btn-outline"
                      onClick={(event) => switchStep(event)}
                    >
                      Unlock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {step == 2 ? (
            <div className="indicator w-3/4 md:w-2/5 min-w-md h-2xl">
              <span className="indicator-item indicator-center badge badge-primary">
                15 hours left
              </span>
              <div className="card flex-shrink-0 w-full min-w-md shadow-2xl bg-base-100 md:w-96 md:h-96">
                <div className="card-body flex flex-col gap-4">
                  <div>
                    <div className="flex flex-row w-full justify-around align-center text-center items-center ">
                      <div className="text-3xl font-bold pb-8">
                        {hunt.charity}
                      </div>
                    </div>
                    <label className="label flex flex-around">
                      <span className="label-text">Your prize:</span>{" "}
                      <span className="text-6xl">{huntSecret.prize}</span>
                    </label>
                  </div>
                  <div className="h-full">
                    <div className="font-normal">
                      You were the first person to successfuly find all the
                      clues. As a prize you can withdraw 30% of the fund
                      deposited by the participants.
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      className="btn btn-outline"
                      onClick={(event) => switchStep(event)}
                    >
                      Withdraw
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Charity;
