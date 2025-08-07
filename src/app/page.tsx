import SpeedrunTable, { Speedrun } from "@/components/Table";
import { timeAgo } from "@/lib/utils";

interface NewsPreview {
  title: string;
  description: string;
  author: string;
  date: number;
}

function NewsPost({ post }: { post: NewsPreview }) {
  return (
    <div className="border-t-[1px] pt-2 pb-3 border-neutral-500">
      <h2 className="text-xl">{post.title}</h2>
      <p className="line-clamp-3 ml-1 text-[#bbb]">{post.description}</p>
      <div className="mt-3 flex">
        <div className="rounded-full bg-white size-6"></div>
        <div className="ml-2 flex justify-between w-full">
          <p>{post.author}</p>
          <p className="text-shadow-2xs text-neutral-400">
            {timeAgo(post.date)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const users: Speedrun[] = [
    {
      rank: 1,
      name: "Kleo",
      time: 63,
      problem: "Two Sum",
      date: 1651600541000,
    },
  ];

  return (
    <>
      <div className="w-full h-14 bg-neutral-900"></div>

      <div className="mt-5 mx-10 xl:mx-[35rem] flex gap-5">
        <div className="w-full">
          <SpeedrunTable data={users} />
        </div>
        <div className="w-[35rem]">
          <div className="w-full bg-[#121212] h-full rounded-lg p-5">
            <h1 className="font-bold">LATEST NEWS</h1>
            <div className="flex flex-col w-full pt-3">
              <NewsPost
                post={{
                  title: "Testing",
                  description: "Idk",
                  author: "kleo",
                  date: 1751600541000,
                }}
              />
              <NewsPost
                post={{
                  title: "Testing",
                  description: "Idk",
                  author: "kleo",
                  date: 1751600541000,
                }}
              />
              <NewsPost
                post={{
                  title: "Testing",
                  description: "Idk",
                  author: "kleo",
                  date: 1751600541000,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
