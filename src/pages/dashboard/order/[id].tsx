import { BreadCrumbs } from "@/components/breadCrumbs";
import { OrderForm } from "@/components/form/order.form";
import { LoadingTable } from "@/components/loadingTable";
import Sidebar from "@/components/sidebar";
import { orderShow } from "@/network/order.network";
import { ICart } from "@/types/cart.type";
import { IOrder } from "@/types/order.type";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const OrderShow: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<IOrder | null>();
  const [cart, setCart] = useState<ICart[] | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false)

  console.log("cart", cart);
  
  /* fetchData */
  const fetchData = useCallback(async () => {
    try {
      const response = await orderShow(id);
      console.log(response.data.data.Cart);
      
      if (response && response.status == 200) {
        setData(response.data.data.Order);
        setCart(response.data.data.Cart)
        setIsLoading(true)
      }
    } catch (error: any) {
      console.log(error);
    }
  }, [id]);

  /* useEffect */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <BreadCrumbs title1="Dashboard" title2="Order create"></BreadCrumbs>
      <section className="container grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[600px] bg-gray-50 p-6">
        {/* sidebar */}
        <div className=" col-span-1">
          <Sidebar></Sidebar>
        </div>

        {/* content */}
        <div className="md:col-span-4">
          {/* order information */}
          <section className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            {/* personal info */}
            <div className="col-span-1">
              <h2 className="text-2xl text-gray-500">Info</h2>
              <p className="flex items-center gap-2 my-3">
                <span className="material-symbols-outlined">signature</span>
                <span>{data?.name}</span>
              </p>

              <p className="flex items-center gap-2 my-3">
                <span className="material-symbols-outlined">mail</span>
                <span>{data?.email}</span>
              </p>

              <p className="flex items-center gap-2 my-3">
                <span className="material-symbols-outlined">call</span>
                <span>{data?.phone}</span>
              </p>

              <p className="flex items-center gap-2 my-3">
                <span className="material-symbols-outlined">pin_drop</span>
                <span>{data?.location}</span>
              </p>
            </div>

            {/* payment info */}
            <div className="col-span-1">
              <h2 className="text-2xl text-gray-500">Payment info</h2>

              <p className="flex items-center gap-2 my-3">
              <span className="material-symbols-outlined">sim_card_download</span>
                <span>{data?.payment_name}</span>
              </p>

              <p className="flex items-center gap-2 my-3">
                <span className="material-symbols-outlined">call</span>
                <span>{data?.payment_number}</span>
              </p>

              <p className="flex items-center gap-2 my-3">
              <span className="material-symbols-outlined">credit_card</span>
                <span>{data?.payment_txid}</span>
              </p>
            </div>

            {/* note */}
            <div className="col-span-1">
              <h2 className="text-2xl text-gray-500">Note</h2>

              <p className="flex items-center gap-2 my-3">
              <span className="material-symbols-outlined">description</span>
                <span>{data?.note}</span>
              </p>

            </div>
          </section>

          {/* cart information */}
          {isLoading ? <><div className="flex items-center justify-between mt-7 mb-2">
                    <span className=" text-gray-600 text-2xl">Cart list</span>
                    
                </div>
                <div className="shadow-lg overflow-x-auto">
                   
                    <table className="w-full">
                        <thead className="text-left bg-gray-300">
                            <tr className=" border border-solid">
                                <th className="text-md px-6 py-4">Product</th>
                                <th className="text-md px-6 py-4">Quantity</th>
                                <th className="text-md px-6 py-4">Price</th>
                                <th className="text-md px-6 py-4">Sub Total </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                    cart?.map((item, i) => {
                                        return <tr key={i}>
                                            <td className="text-md px-6 py-4 flex items-center gap-2">

                                                <img src={item?.product[0].image} alt="" className="h-16 w-16" />
                                                <Link href={`/menu/${item.product[0]._id}`}>{item?.product[0].name}</Link>
                                            </td>
                                            <td className="text-md px-6 py-4">

                                                <div className="flex gap-[1px] px-4">
                                                    <span  className=" cursor-pointer border border-gray-400  w-6 material-symbols-outlined">
                                                        remove
                                                    </span>
                                                    <span className="border border-gray-400 w-6 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <span className=" cursor-pointer border border-gray-400  w-6 material-symbols-outlined">
                                                        add
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="text-md px-6 py-4">{item.product[0]?.price} Tk</td>
                                            <td className="text-md px-6 py-4">{item.product[0]?.price * item.quantity} Tk</td>
                                        </tr>
                                    }) 
                            }
                        </tbody>
                    </table>
                    
                </div></> : <>
                            <LoadingTable></LoadingTable>
                </>}
        </div>
      </section>
    </>
  );
};
export default OrderShow;
