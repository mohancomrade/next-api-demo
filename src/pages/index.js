// import Image from 'next/image'
import { Inter } from "next/font/google";

import Link from "next/link";
// import Example from "./Example";

const inter = Inter({ subsets: ["latin"] });

export default function index(props) {
  return (
    <div>
      <div className="flex container m-auto justify-between mt-10 font-bold text-4xl">
        <div className="">
          <Link href="/Blog">Blog</Link>
        </div>
        <div className="space-x-10">
          <Link href="/Home">Home</Link>
          <Link href="/Home">CreatePost</Link>
        </div>
      </div>

      {/* <Example/> */}
    </div>
  );
}
