import Calendar from "@/components/calendar";
import UserMenu from "@/components/userMenu";

export default function Home() {
  return (
    <div>
      <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-tight w-fit md:mx-auto p-4">
        Calendar <br /> using Google
      </h1>

      {/* <div className="h-[calc(100vh-182px)] flex items-center justify-center">
        <button className="py-2 px-6 border rounded-lg hover:shadow-md hover:shadow-slate-400/40">
          Use google calendar
        </button>
      </div> */}

      <UserMenu />
    </div>
  );
}
