"use client";

import { login, outlookLogin } from "@/Redux/apiCall";
import Loading from "@/components/loading";
import UserMenu from "@/components/userMenu";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  // console.log(user);

  const handleLogin = () => {
    login(dispatch);
  };

  const handleOutlookLogin = () => {
    outlookLogin(dispatch);
  };

  return (
    <div>
      <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-tight w-fit md:mx-auto p-4">
        Calendar <br /> using Google
      </h1>
      {user.error && alert("There is an error on server side, Try again!!")}

      {!user.currentUser ? (
        <div className="h-[calc(100vh-182px)] flex flex-col items-center justify-center gap-4">
          <button
            className="py-2 px-6 border rounded-lg hover:shadow-md hover:shadow-slate-400/40"
            onClick={handleLogin}
          >
            Use google calendar
          </button>
          <button
            className="py-2 px-6 border rounded-lg hover:shadow-md hover:shadow-slate-400/40"
            onClick={handleOutlookLogin}
          >
            Use outlook calendar
          </button>
        </div>
      ) : (
        <UserMenu />
      )}
    </div>
  );
}
