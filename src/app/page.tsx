import { cookies, draftMode } from "next/headers";
import Image from "next/image";

async function dog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random", {
    next: { revalidate: 10 },
  });
  const data = await response.json();
  return data;
}
export default async function Home() {
  const dogData = await dog();
  console.log(dogData);

  return (
    <>
      <section className="w-full h-screen px-11  py-12">
        <img src={dogData?.message} />
      </section>
    </>
  );
}
