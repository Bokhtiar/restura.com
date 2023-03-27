import Sidebar from "@/components/sidebar";
import { BreadCrumbs } from "@/components/breadCrumbs";
import { Card } from "@/components/card";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { IProfile } from "@/types/profile.type";
import { me } from "@/network/auth.network";

const Home: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IProfile | null>();

  /* fetchData */
  const fetchData = useCallback(async () => {
    try {
      const response = await me();
      if (response && response.status === 200) {
        setData(response.data.data);
      }
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  /* useEffect */
  useEffect(()=> {
    fetchData()
  },[fetchData])

  return (
    <>
      <BreadCrumbs title1="Dashboard"></BreadCrumbs>

      <section className="container grid grid-cols-1 md:grid-cols-5 md:gap-4 md:h-[600px] bg-gray-50 p-6 ">
        {/* sidebar */}
        <div className="col-span-1 mb-6">
          <Sidebar></Sidebar>
        </div>

        {/* content */}
        <div className="md: col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card name="Cart" item={32} icon="shopping_cart"></Card>
            <Card name="Wishlist" item={22} icon="favorite"></Card>
            <Card name="Order" item={52} icon="list_alt"></Card>
          </div>

          {/* profle information */}
          <section className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
            <div className="col-span-1 my-10">
              <Image
                src="/images/profile.png"
                alt="Picture of the author"
                className="mx-auto"
                width={250}
                height={50}
              />
            </div>
            <div className=" col-span-2 my-auto">
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
          </section>
        </div>
      </section>
    </>
  );
};
export default Home;
