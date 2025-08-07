import { format, timeAgo } from '@/lib/utils';
import { formatDate } from 'date-fns';
import React from 'react';

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
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase w-14">#</th>
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase w-52">Player</th>
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase w-52">Time</th>
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase w-52">Date</th>
            <th className="px-6 py-3 text-left font-medium tracking-wide text-[#aaaaaa] uppercase">Problem</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr
              key={user.rank}
              className="hover:bg-[#1f1f1f] transition-colors border-b border-[#1e1e1e]"
            >
              <td className="px-6 py-4 whitespace-nowrap">{user.rank}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{format(user.time)}</td>
              <td className="px-6 py-4 whitespace-nowrap" title={new Date(user.date).toLocaleString()}>{timeAgo(user.date)}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.problem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SpeedrunTable;
