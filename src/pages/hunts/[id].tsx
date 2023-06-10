import { Fragment, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import { truncateAddress } from '../../utils';

const hunt = {
  charity: "Bingus Chairty",
  name: "Lorem Ipsum",
  description: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.",
  status: "Open",
  start: "06/12/2023:H03:14",
  end: "06/13/2023:H03:14",
  entry: "15",
  total: "345",
  participants: "33"
}

const huntSecret = {
  yourDeposit: "15",
  secret: "AAAAAAAAAA",
  prize: "90"
}

function Hunt() {
  const [participants, setParticipants] = useState([{address: "0xE0F05F319B99cF78f5ca4C96197a652B0FC88b5C", deposit: "99"}, {address: "0xBA73115919e46F82fA990F8067d2905cB6FF3c60", deposit: "13"}]);
  const [step, setStep] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const switchStep = (e: any) => {
    // ToDo - add connection to smart contracts here
    setStep(++step)
  };

  return (
    <div className='mx-auto text-gray-300 lg:px-0 w-full'>
      <div className="hero min-h-screen bg-base-100 w-full">
  <div className="hero-content flex-col lg:flex-row-reverse items-start p-8">
    <div className="text-center lg:text-left w-3/4 md:w-3/5 mx-auto">
      <div className='flex flex-row w-full justify-between align-center text-left items-center'><div className="text-5xl font-bold">{hunt.name}</div><div className='flex flex-col'><div className="badge badge-primary badge-outline">Open</div></div></div>
      <p className="py-6 center self-center text-left">{hunt.description}</p>
      <p className="text-xs font-medium tracking-wider text-gray-400 mt-24 mb-2 ml-1">
        Active Treasure Hunts - <span>{participants.length}</span>
      </p>
      
    <div className="overflow-x-auto w-full self-center bg-base-200 rounded-md">
  <table className="table">
  <thead className='bg-base-300 w-full'>
      <tr>
        <th></th>
        <th>Address</th>
        <th>Deposit</th>
      </tr>
    </thead>
    <tbody>
    {participants.map((item, i) => {
        return (
      <tr key={i} className='hover:bg-base-300'>
        <th>{++i}</th>
        <td>{truncateAddress(item.address)}</td>
        <td>${item.deposit}</td>
      </tr>
    )})}
    </tbody>
  </table>
</div>
    </div>
    <div className='flex flex-col w-full md:w-1/2 mx-auto items-center md:items-start justify-between '>
    { step == 0 ?
    <div className="indicator w-3/4 md:w-2/5 min-w-md h-2xl">
      <span className="indicator-item indicator-center badge badge-primary">15 hours left</span>
        <div className="card flex-shrink-0 w-full min-w-md shadow-2xl bg-base-200 md:w-96 md:h-96">
          <div className="card-body h-2xl flex gap-4">
            <div>
            <div className='flex flex-row w-full justify-around align-center text-center items-center '><div className="text-3xl font-bold pb-8">{hunt.charity}</div></div>
              <div className='font-normal'>Minimum Entry: <span className='font-bold'>{hunt.entry}</span></div>
              <div className='font-normal'>Total Balance: <span className='font-bold'>{hunt.total}</span></div>
              <div className='font-normal'>Participants: <span className='font-bold'>{hunt.participants}</span></div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input type="number" placeholder="Ether Amount" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline" onClick={event => switchStep(event)}>Deposit</button>
            </div>
          </div>
        </div>
    </div>
    : null }
    { step == 1 ?
    <div className="indicator w-3/4 md:w-2/5 min-w-md h-2xl">
      <span className="indicator-item indicator-center badge badge-primary">15 hours left</span>
        <div className="card flex-shrink-0 w-full min-w-md shadow-2xl bg-base-200 md:w-96 md:h-96">
          <div className="card-body flex gap-4">
            <div>
            <div className='flex flex-row w-full justify-around align-center text-center items-center '><div className="text-3xl font-bold pb-8">{hunt.charity}</div></div>
              <div className='font-normal'>Your Entry: <span className='font-bold'>{huntSecret.yourDeposit}</span></div>
              <div className='font-normal'>Clue: <span className='font-bold'>{huntSecret.secret}</span></div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="text" placeholder="Secret Key" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline" onClick={event => switchStep(event)}>Unlock</button>
            </div>
          </div>
        </div>
    </div>
    : null }
    { step == 2 ?
    <div className="indicator w-3/4 md:w-2/5 min-w-md h-2xl">
      <span className="indicator-item indicator-center badge badge-primary">15 hours left</span>
        <div className="card flex-shrink-0 w-full min-w-md shadow-2xl bg-base-200 md:w-96 md:h-96">
          <div className="card-body flex flex-col gap-4">
            <div>
            <div className='flex flex-row w-full justify-around align-center text-center items-center '><div className="text-3xl font-bold pb-8">{hunt.charity}</div></div>
              <label className="label flex flex-around">
                <span className="label-text">Your prize:</span> <span className="text-6xl">{huntSecret.prize}</span>
              </label>
            </div>
            <div className='h-full'>
            <div className='font-normal'>You were the first person to successfuly find all the clues. As a prize you can withdraw 30% of the fund deposited by the participants.</div>
              </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline" onClick={event => switchStep(event)}>Withdraw</button>
            </div>
          </div>
        </div>
    </div>
    : null }
      <div className="w-full min-w-md md:w-96 flex flex-col items-center justify-center gap-4 my-8 center">
      <div className="stats shadow mx-auto bg-base-200">
  
        <div className="stat">
          <div className="stat-title">Total Raised Funds</div>
          <div className="stat-value">${hunt.total}</div>
          <div className="stat-desc">Out of the goal: $1430</div>
        </div>

      </div>
        {/* <progress className="progress progress-primary w-56 mx-auto" value="70" max="100"></progress> */}
        <div className="radial-progress text-primary mx-auto" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }}>70%</div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Hunt;
