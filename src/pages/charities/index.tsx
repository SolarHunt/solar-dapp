import { Fragment, ReactNode, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Charities() {
  const router = useRouter();

  const handleClick = (e: any, href) => {
    e.preventDefault();
    router.push(href);
  };

  const [charities, setCharities] = useState([
    { name: "Bingus Charity", address: "xyz", funds: "400" },
    { name: "Ethreum Charity", address: "abc", funds: "999" },
    { name: "Lorem Ipsum", address: "0x123", funds: "0" },
  ]);

  const [hunt, setHunt] = useState([
    {
      name: "Prague Hunt",
      charity: "Bingus Charity",
      bounty: "9",
      total: "99",
    },
    {
      name: "Other Hunt",
      charity: "Ethereum Charity",
      bounty: "5",
      total: "50",
    },
  ]);

  return (
    <div className="flex flex-col bg-base-100 items-center justify-center center py-24">
      <div className="flex flex-row w-full justify-between align-center text-left items-center">
        <div className="text-6xl font-bold mx-auto mb-24 text-gray-300">
          Participate
        </div>
      </div>

      <p className="text-xs font-medium tracking-wider text-gray-400 my-2 ml-1">
        Registered Charities - <span>{charities.length}</span>
      </p>

      <div className="overflow-x-auto w-4/5 xl:w-1/2 self-center bg-base-200 rounded-md">
        <table className="table">
          <thead className="bg-base-300 w-full">
            <tr>
              <th></th>
              <th>Charity Name</th>
              <th>Address</th>
              <th>Funds Raised</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {charities.map((item, i) => {
              return (
                <tr key={i} className="hover:bg-base-300">
                  <th>{++i}</th>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>${item.funds}</td>
                  <td>
                    <button
                      onClick={(event) => handleClick(event, `/charities/${i}`)}
                      className="btn btn-outline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs font-medium tracking-wider text-gray-400 mt-24 mb-2 ml-1">
        Active Treasure Hunts - <span>{hunt.length}</span>
      </p>

      <div className="overflow-x-auto w-4/5 xl:w-1/2 self-center bg-base-200 rounded-md">
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
                  <td>{item.charity}</td>
                  <td>${item.bounty}</td>
                  <td>${item.total}</td>
                  <td>
                    <button
                      onClick={(event) => handleClick(event, `/hunts/${i}`)}
                      className="btn btn-outline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Charities;
