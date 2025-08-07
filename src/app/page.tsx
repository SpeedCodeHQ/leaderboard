import SpeedrunTable, { Speedrun } from "@/components/Table";

export default function Home() {
  const users: Speedrun[] = [
    { rank: 1, name: 'Kleo', time: 63, problem: 'Two Sum', date: 1651600541000 },
  ];

  return (
    <>
      <div className="w-full h-14 bg-neutral-900"></div>

      <div className="mt-5 mx-[35rem]">
        <div className="w-full">
          <SpeedrunTable data={users} />
        </div>
      </div>
    </>
  );
}
