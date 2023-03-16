import { BreadCrumbs } from "@/components/breadCrumbs"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"

const Cart : React.FC = ():JSX.Element => {
    return <>
        <BreadCrumbs title1="Dashboard" title2="Cart" />
        <section className="container grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[600px] bg-gray-50 p-6">
            {/* sidebar */}
            <div className=" col-span-1">
                <Sidebar />
            </div>
            {/* content */}
            <div className="col-span-4">
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    2999
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    1999
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    99
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>
                            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Google Pixel Phone
                                </th>
                                <td className="px-6 py-4">
                                    Gray
                                </td>
                                <td className="px-6 py-4">
                                    Phone
                                </td>
                                <td className="px-6 py-4">
                                    799
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple Watch 5
                                </th>
                                <td className="px-6 py-4">
                                    Red
                                </td>
                                <td className="px-6 py-4">
                                    Wearables
                                </td>
                                <td className="px-6 py-4">
                                    999
                                </td>
                                <td className="px-6 py-4">
                                    <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </section>
    </>
}
export default Cart