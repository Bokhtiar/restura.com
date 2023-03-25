import Link from "next/link"
import Sidebar from "@/components/sidebar"
import { BreadCrumbs } from "@/components/breadCrumbs"
import {authRoute} from "@/hook/authRoute"

const Wishlist: React.FC = (): JSX.Element => {
    return <>
        <BreadCrumbs title1="Dashboard" title2="Order" />
        <section className="container grid grid-cols-1 md:grid-cols-5 md:gap-4 md:h-[600px] bg-gray-50 p-6">
            {/* sidebar */}
            <div className="col-span-1 py-2">
                <Sidebar />
            </div>

            {/* content */}
            <div className="md:col-span-4">
                <div className="shadow-lg overflow-x-auto">
                    <table className="w-full">
                        <thead className="text-left bg-gray-300">
                            <tr className=" border border-solid">
                                <th className="text-md px-6 py-4">index</th>
                                <th className="text-md px-6 py-4">index</th>
                                <th className="text-md px-6 py-4">index</th>
                                <th className="text-md px-6 py-4">index</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-md px-6 py-4">dddd</td>
                                <td className="text-md px-6 py-4">dddd</td>
                                <td className="text-md px-6 py-4">dddd</td>
                                <td className="text-md px-6 py-4">dddd</td>
                            </tr>

                            <tr>
                                <td className="text-md px-6 py-4">dddd</td>
                                <td className="text-md px-6 py-4">dddd</td>
                                <td className="text-md px-6 py-4">dddd</td>
                                <td className="text-md px-6 py-4">dddd</td>
                            </tr>

                            <tr>
                                <td className="text-md px-6 py-4">dddasdfasd asdd</td>
                                <td className="text-md px-6 py-4">dddasdfa sdasdfas dasdfasfdd</td>
                                <td className="text-md px-6 py-4">dd asdf asdfa sdasfadsfasdfsdfdd</td>
                                <td className="text-md px-6 py-4">dddd</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
}
export default authRoute(Wishlist)