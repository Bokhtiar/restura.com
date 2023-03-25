import { BreadCrumbs } from "@/components/breadCrumbs"
import { Sidebar } from "@/components/sidebar"
import { Toastify } from "@/components/toastify"
import { cartDecrement, cartIncrement, cartList } from "@/network/cart.network"
import { ICart } from "@/types/cart.type"
import { useCallback, useEffect, useState } from "react"

const Cart: React.FC = (): JSX.Element => {

    const [cart, setCart] = useState<ICart[] | []>([])

    /* fetchData */
    const fetchData = useCallback(async () => {
        try {
            const response = await cartList()
            if (response && response.status === 200) {
                console.log(response.data.data);
                setCart(response.data.data)
            }
        } catch (error: any) {
            console.log(error);
        }
    }, [])

    /* decrement */
    const decrement = async(id:any) => {
        try {
            const response = await cartDecrement(id)
            if(response && response.status === 201){
                fetchData()
                Toastify.Success(response.data.message);
            }
        } catch (error:any) {
            console.log(error);
        }
    }

    /* increment */
    const increment = async(id:any) => {
        try {
            const response = await cartIncrement(id)
            if(response && response.status === 201){
                fetchData()
                Toastify.Success(response.data.message);
            }
        } catch (error:any) {
            console.log(error);
        }
    }

    /* useEffect */
    useEffect(() => {
        fetchData()
    }, [fetchData])

    return <>
        <BreadCrumbs title1="Dashboard" title2="Cart" />
        <section className="container grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[600px] bg-gray-50 p-6">
            {/* sidebar */}
            <div className=" col-span-1">
                <Sidebar />
            </div>
            {/* content */}
            <div className="md:col-span-4">
                <div className="shadow-lg overflow-x-auto">
                    <table className="w-full">
                        <thead className="text-left bg-gray-300">
                            <tr className=" border border-solid">
                                <th className="text-md px-6 py-4">Product</th>
                                <th className="text-md px-6 py-4">Quantity</th>
                                <th className="text-md px-6 py-4">Price</th>
                                <th className="text-md px-6 py-4">Sub Total </th>
                                <th className="text-md px-6 py-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, i) => {
                                    return <tr key={i}>
                                        <td className="text-md px-6 py-4 flex items-center gap-2">

                                            <img src={item.product[0]?.image} alt="" className="h-16 w-16" />
                                            <span>{item.product[0]?.name}</span>
                                        </td>
                                        <td className="text-md px-6 py-4">

                                            <div className="flex gap-[1px] px-4">
                                                <span onClick={()=>decrement(item._id)} className=" cursor-pointer border border-gray-400  w-6 material-symbols-outlined">
                                                    remove
                                                </span>
                                                <span className="border border-gray-400 w-6 text-center">
                                                    {item.quantity}
                                                </span>
                                                <span onClick={()=> increment(item._id)} className=" cursor-pointer border border-gray-400  w-6 material-symbols-outlined">
                                                    add
                                                </span>
                                            </div>
                                        </td>
                                        <td className="text-md px-6 py-4">{item.product[0]?.price} Tk</td>
                                        <td className="text-md px-6 py-4">{item.product[0]?.price * item.quantity} Tk</td>
                                        <td className="text-md px-6 py-4"><span className="text-red-500 material-symbols-outlined">delete</span></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </section>
    </>
}
export default Cart