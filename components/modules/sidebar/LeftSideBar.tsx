import IconButton from "@/components/elements/iconbutton/IconButton";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function LeftSideBar() {
  return (
    <div className="sticky top-0 left-0 flex-col items-center hidden h-screen p-4 border-r sm:flex">
      <div className="w-10 h-10 rounded logo">
        <img
          src="/images/logo.png"
          className="object-contain object-center w-full h-full"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-3 mt-10">
        <Link href="/">
          <IconButton intent={"semiGhost"}>
            <HiOutlineSquares2X2 size={24} />
          </IconButton>
        </Link>
        <IconButton intent={"ghost"}>
          <FiPhone className="text-zinc-500" size={24} />
        </IconButton>

        <IconButton className="lg:hidden" intent={"ghost"}>
          <HiOutlineShoppingCart className="text-zinc-500" size={24} />
        </IconButton>
      </div>
    </div>
  );
}
