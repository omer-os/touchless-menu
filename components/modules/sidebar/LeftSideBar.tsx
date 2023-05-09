import IconButton from "@/components/elements/iconbutton/IconButton";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

export default function LeftSideBar() {
  return (
    <div className="border-r h-screen p-4 sm:flex flex-col items-center sticky hidden top-0 left-0">
      <div className="logo w-10 h-10 rounded">
        <img
          src="/images/logo.png"
          className="w-full h-full object-center object-contain"
          alt=""
        />
      </div>

      <div className="flex mt-10 flex-col gap-3">
        <Link href="/">
          <IconButton intent={"semiGhost"}>
            <HiOutlineSquares2X2 size={24} />
          </IconButton>
        </Link>
        <IconButton intent={"ghost"}>
          <FiPhone className="text-zinc-500" size={24} />
        </IconButton>
      </div>
    </div>
  );
}
