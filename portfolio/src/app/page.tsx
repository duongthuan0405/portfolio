import Image from "next/image";
export const dynamic = "force-dynamic";

export default async function Home() {
  const data: [] = await fetch("http://localhost:8000/").then((res) =>
    res.json(),
  );
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {data.map((item: any) => (
        <div key={item.id}>
          <h2>
            {item.id} {item.name} {item.gpa}
          </h2>
        </div>
      ))}
    </div>
  );
}
