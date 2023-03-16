import Link from "next/link";

export const Sidebar: React.FC = (): JSX.Element => {
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

        {/* wishlist */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm hover:bg-primary hover:text-white">
          <Link href="/dashboard/wishlist">Wishlist</Link>
        </li>

        {/* order */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm hover:bg-primary hover:text-white">
          <Link href="/dashboard/order">Order</Link>
        </li>

        {/* Cart */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm hover:bg-primary hover:text-white">
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </>
  );
};
