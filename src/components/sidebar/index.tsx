
import { getToken, removeToken } from "@/utils/helper";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Toastify } from "../toastify";


const Sidebar: React.FC = (): JSX.Element => {
  const router = useRouter();
  const logout = async () => {
    await removeToken()
    router.push("/");
    Toastify.Info("Logout successfully done")
  }

  useEffect(() => {
    const token: any = localStorage.getItem("token");
    if (!token) {
      router.replace("/login");
    }
  })
  return (
    <>
      <ul className=" shadow-md ">
        {/* dashboard */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm hover:bg-primary hover:text-white">
          <Link href="/dashboard">Dashboard</Link>
        </li>

        {/* cart */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm hover:bg-primary hover:text-white">
          <Link href="/dashboard/cart">Cart</Link>
        </li>

        {/* order */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm hover:bg-primary hover:text-white">
          <Link href="/dashboard/order">Order</Link>
        </li>

        {/* Cart */}
        <li onClick={() => logout()} className="cursor-pointer border border-gray-200 py-3 px-3 rounded-sm hover:bg-primary hover:text-white">
          <span  >Logout</span>
        </li>
      </ul>
    </>
  );
};

export default Sidebar