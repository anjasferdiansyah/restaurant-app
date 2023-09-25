import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex justify-center items-center">
      {/* Box */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[80%] md:w-[50%]">
        {/* Image Container */}
        <div className="h-1/3 overflow-hidden relative w-full md:w-1/2  md:h-full">
          <Image src={`/loginBg.png`} alt="" fill className="object-cover" />
        </div>
        {/* Form */}
        <div className="h-2/3 w-full p-8 gap-4 justify-center flex flex-col md:h-full md:w-1/2">
          <h1 className="font-bold uppercase">Welcome</h1>
          <p>Sign in to your account</p>
          <button className="flex gap-4 p-4 ring-1 ring-amber-100 rounded-md w-full">
            <Image src={"/google.png"} alt="" width={20} height={20} />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-amber-100 rounded-md w-full">
            <Image src={"/facebook.png"} alt="" width={20} height={20} />
            <span>Sign in with Facebook</span>
          </button>
          <p>
            Have a problem?{" "}
            <Link href="/" className="underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
