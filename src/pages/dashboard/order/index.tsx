import { BreadCrumbs } from "@/components/breadCrumbs";
import Sidebar from "@/components/sidebar";
import { orderList } from "@/network/order.network";
import { IOrder } from "@/types/order.type";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Order: React.FC = (): JSX.Element => {

    const [data, setData] = useState<IOrder[] | []>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    /* fetchData */
    const fetchData = useCallback(async () => {
        try {
            const response = await orderList()
            console.log(response.data.data);
            
            if (response && response.status === 200) {
                setData(response.data.data)
                setIsLoading(true)
            }
        } catch (error: any) {
            console.log(error);
        }
    }, [data])

    useEffect(() => {
        fetchData();
    }, [])

    return <>
        <BreadCrumbs title1="Dashboard" title2="Order"></BreadCrumbs>
        <section className="container grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[600px] bg-gray-50 p-6">
            {/* sidebar */}
            <div className=" col-span-1">
                <Sidebar></Sidebar>
            </div>

            {/* content */}
            <div className="md:col-span-4">
                <div className="shadow-lg overflow-x-auto">
                    <table className="w-full">
                        <thead className="text-left bg-gray-300">
                            <tr className=" border border-solid">
                                <th className="text-md px-6 py-4">Name</th>
                                <th className="text-md px-6 py-4">Email</th>
                                <th className="text-md px-6 py-4">Phone</th>
                                <th className="text-md px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading ? 
                            
                                data.map((item, i) => {
                                    return <tr>
                                    <td className="text-md px-6 py-4">{item.name}</td>
                                    <td className="text-md px-6 py-4">{item.email}</td>
                                    <td className="text-md px-6 py-4">{item.phone}</td>
                                    <td className="text-md px-6 py-4"><span className=" cursor-pointer text-red-500 material-symbols-outlined">delete</span></td>
                                </tr>
                                })
                                    : <tr className="  my-3">
                                        <td className="animate-pulse h-2 py-6 w-8 bg-slate-200"></td>
                                        <td className=" animate-pulse h-2 py-6 w-8 bg-slate-200"></td>
                                        <td className="animate-pulse h-2 py-6 w-8 bg-slate-200"></td>
                                        <td className=" animate-pulse h-2 py-6 w-8 bg-slate-200"></td>
                                       
                                    </tr>

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </>
}
export default Order