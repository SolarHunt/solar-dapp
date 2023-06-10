import { Fragment, ReactNode, useState } from "react";
import { truncateAddress } from "../../utils";

function Treasure() {
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

  const [questName, setQuestName] = useState("");
  const [description, setDescription] = useState("");
  const [clues, setClues] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    // Your submission logic here
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <form
        className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-quest-name"
            >
              Name of the Quest
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-quest-name"
              type="text"
              placeholder="Name of the Quest"
              value={questName}
              onChange={e => setQuestName(e.target.value)}
            />
          </div>
          <div className="w-full px-3 pb-8">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-description"
            >
              Description
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-description"
              type="text"
              placeholder="Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-clues"
            >
              Clues
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-clues"
              placeholder="Enter clues"
              value={clues}
              onChange={e => setClues(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Treasure;
