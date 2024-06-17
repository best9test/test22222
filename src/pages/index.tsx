import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-white">
        각자 이름 클릭해서 그 페이지 간단하게든 꾸며서 push 해주면 됩니다!
      </h1>
      <div className="grid grid-cols-5 gap-4 mt-8">
        <Link href="/EveryYawm">
          <div className="cursor-pointer border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:text-blue-700">
            EveryYawm
          </div>
        </Link>
        <Link href="/ParkJingyeong">
          <div className="cursor-pointer border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:text-blue-700">
            ParkJingyeong
          </div>
        </Link>
        <Link href="/Ohchaeyeon">
          <div className="cursor-pointer border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:text-blue-700">
            Ohchaeyeon
          </div>
        </Link>
        <Link href="/Edhcoding">
          <div className="cursor-pointer border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:text-blue-700">
            Edhcoding
          </div>
        </Link>
        <Link href="/Rangbyeolang">
          <div className="cursor-pointer border border-gray-300 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:text-blue-700">
            Rangbyeolang
          </div>
        </Link>
      </div>
    </div>
  );
}
