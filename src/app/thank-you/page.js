import Link from "next/link";
import sucess from "../../../public/assets/images/AnimationSuccess.gif";

import Image from "next/image";

export default function page() {
  return (
    <main className="flex flex-col gap-5 justify-center items-center w-full h-screen bg-white px-5">
      <div>
        <Image src={sucess} width={100} height={100} alt="successGif" />
      </div>
      <h1 className="text-black text-3xl font-semibold">Thank You</h1>
      <div className="text-center">
        <p className="text-black text-sm">
          Thank you for contacting us! We&apos;re received your request.
        </p>
        <p className="text-black text-sm">
          We&apos;ll get back to you in the next 24 hours.
        </p>
      </div>
      <Link href="/">
        <button className="text-sm text-white bg-green-600 px-5 py-3 rounded-md hover:bg-green-700 transition-all mt-5">
          Back to home page
        </button>
      </Link>
    </main>
  );
}
