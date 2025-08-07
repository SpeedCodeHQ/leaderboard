import { format, timeAgo } from "@/lib/utils";
import { formatDate } from "date-fns";
import { TrophyIcon } from "lucide-react";
import React from "react";

export interface Speedrun {
  rank: number;
  name: string;
  time: number;
  date: number;
  problem: string;
}

interface TableProps {
  data: Speedrun[];
}

const SpeedrunTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto p-4 bg-[#121212] rounded-lg shadow-inner">
      <table className="min-w-full text-sm text-[#e0e0e0]">
        <thead>
          <tr className="border-b border-[#2a2a2a]">
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase w-14">
              #
            </th>
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase w-52">
              Player
            </th>
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase w-52">
              Time
            </th>
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase w-52">
              Date
            </th>
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase">
              Problem
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((speedrun, i) => (
            <tr
              key={i}
              className="hover:bg-[#1f1f1f] transition-colors border-b border-[#1e1e1e]"
            >
              <td className="px-6 py-4 whitespace-nowrap flex justify-center">
                <Rank rank={speedrun.rank} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-bold">
                {speedrun.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(speedrun.time)}
              </td>
              <td
                className="px-6 py-4 whitespace-nowrap"
                title={new Date(speedrun.date).toLocaleString()}
              >
                {timeAgo(speedrun.date)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {speedrun.problem}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function Rank({ rank }: { rank: number }) {
  if (rank === 1) return <TrophyIcon className="w-4 text-amber-400" />;
  if (rank === 2) return <TrophyIcon className="w-4 text-slate-400" />;
  if (rank === 3) return <TrophyIcon className="w-4 text-amber-600" />;

  return rank;
}

export default SpeedrunTable;
