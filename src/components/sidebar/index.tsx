import Link from "next/link";

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <>
      <ul className=" shadow-md">
        {/* dashboard */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm">
          <Link href="/">Dashboard</Link>
        </li>

        {/* cart */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm">
          <Link href="/">Cart</Link>
        </li>

        {/* wishlist */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm">
          <Link href="/">Wishlist</Link>
        </li>

        {/* order */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm">
          <Link href="/">Order</Link>
        </li>

        {/* Cart */}
        <li className=" border border-gray-200 py-3 px-3 rounded-sm">
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </>
  );
};
