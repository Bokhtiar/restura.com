import { BreadCrumbs } from "@/components/breadCrumbs";
import { OrderForm } from "@/components/form/order.form";
import Sidebar from "@/components/sidebar";
import { orderShow } from "@/network/order.network";
import { IOrder } from "@/types/order.type";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

const OrderShow: React.FC = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<IOrder | null>();

  /* fetchData */
  const fetchData = useCallback(async () => {
    try {
      const response = await orderShow(id);
      console.log(response.data.data.Order);
      
      console.log(response.data.data.order);
      
      if (response && response.status == 200) {
        setData(response.data.data.Order);
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
        </div>
      </section>
    </>
  );
};
export default OrderShow;
