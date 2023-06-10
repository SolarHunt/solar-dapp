import { Fragment, ReactNode, useState } from "react";
import { truncateAddress } from "../../utils";
// import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";

function Dashboard() {
  const [hunt, setHunt] = useState([
    { name: "Prague Hunt", status: "Open", bounty: "9", total: "99" },
    { name: "Other Hunt", status: "Closed", bounty: "5", total: "50" },
  ]);
  const [participants, setParticipants] = useState([
    {
      address: "0xE0F05F319B99cF78f5ca4C96197a652B0FC88b5C",
      deposit: "99",
      hunt: "first tresure hunt",
    },
    {
      address: "0xBA73115919e46F82fA990F8067d2905cB6FF3c60",
      deposit: "13",
      hunt: "Prague Hack `23",
    },
  ]);

  return (
    <div className="w-full h-full min-h-screen flex flex-col justify-center bg-base-100 px-4">
      <div className="flex flex-row w-full justify-between align-center text-left items-center">
        <div className="text-6xl font-bold mx-auto my-12 text-gray-300">
          Manage Your Charity
        </div>
      </div>

      <div className="flex gap-4 flex-col md:flex-row">
        <div className="stats bg-primary text-primary-content w-full md:w-1/2">
          <div className="stat">
            <div className="stat-title">Charity Balance</div>
            <div className="stat-value">$75420</div>
            <div className="stat-actions">
              <button className="btn btn-sm btn-success">View Funds</button>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Available for withdraw</div>
            <div className="stat-value">$524200</div>
            <div className="stat-actions">
              <button className="btn btn-sm mr-1">Withdrawal</button>
              <button className="btn btn-sm ml-1">Send</button>
            </div>
          </div>
        </div>

        <div className="stats shadow bg-base-200 md:h-full w-full md:w-1/2">
          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">Tresure Hunts</div>
            <div className="stat-value">13</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">Gathered Funds</div>
            <div className="stat-value">4200</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary"></div>
            <div className="stat-title">Participants</div>
            <div className="stat-value">118</div>
          </div>
        </div>
      </div>

      <p className="text-xs font-medium tracking-wider text-gray-400 mt-24 mb-2 ml-1">
        Your Treasure Hunts - <span>{participants.length}</span>
      </p>

      <div className="overflow-x-auto w-full self-center bg-base-200 rounded-md">
        <table className="table">
          <thead className="bg-base-300 w-full">
            <tr>
              <th></th>
              <th>Hunt Name</th>
              <th>Charity</th>
              <th>Bounty Amount</th>
              <th>Total Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {hunt.map((item, i) => {
              return (
                <tr key={i} className="hover:bg-base-300">
                  <th>{++i}</th>
                  <td>{item.name}</td>
                  <td>{item.status}</td>
                  <td>${item.bounty}</td>
                  <td>${item.total}</td>
                  <td>
                    <button className="btn btn-outline">View</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs font-medium tracking-wider text-gray-400 mt-24 mb-2 ml-1">
        Donations - <span>{participants.length}</span>
      </p>

      <div className="overflow-x-auto w-full self-center bg-base-200 rounded-md">
        <table className="table">
          <thead className="bg-base-300 w-full">
            <tr>
              <th></th>
              <th>Address</th>
              <th>Deposit</th>
              <th>Treasure Hunt</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((item, i) => {
              return (
                <tr key={i} className="hover:bg-base-300">
                  <th>{++i}</th>
                  <td>{truncateAddress(item.address)}</td>
                  <td>${item.deposit}</td>
                  <td>{item.hunt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
}

export default Dashboard;
