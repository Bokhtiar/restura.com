import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { Title } from "@/components/title";
import { IProduct } from "@/types/product.type";
import { PrimaryButton } from "@/components/button";
import { ChooseCard } from "@/components/chooseCard";
import { useCallback, useEffect, useState } from "react";
import { menuCategory, Menus } from "@/network/menu.network";
import { LoadingProduct, Product } from "@/components/product";


const Home: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProduct[] | []>([]);

  /* fetchDataProduct */
  const fetchDataProduct = useCallback(async () => {
    try {
      const response = await Menus()
      if (response && response.status === 200) {
        setProduct(response.data?.data)
        setIsLoading(true)
      }
    } catch (error: any) {
      console.log(error);
    }
  }, [])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    fetchDataProduct()
  }, [fetchDataProduct]);

  return (
    <>
      {/* banner section */}
      <section className="bg-gray-50">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center justify-between">
          {/* content */}
          <div>
            {/* heading content */}
            <p className="leading-10 pt-10 md:pt-0">
              <span className="md:text-6xl xxl:text-7xl text-4xl font-bold text-blue-400">
                Make Healthy Life
              </span>
              <br />
              <span className="md:text-6xl xxl:text-7xl text-4xl font-bold">
                With Fitbitesmeal
              </span>
            </p>
            {/* body content */}
            <p className="leading-[0px] md:my-16 my-8">
              <span className="md:text-3xl xl:text-4xl text-2xl text-gray-800 ">
                Delicious meal the way you want,
              </span>
              <br />
              <span className="md:text-3xl text-2xl xl:text-4xl text-gray-800">
                When you want
              </span>
            </p>
            {/* button */}
            <PrimaryButton name="Order now" />
          </div>

          {/* image */}
          <Image
            src="/images/banner1.png"
            alt="banner1"
            className="lg:w-[800px]"
            width={550}
            height={0}
          />
        </div>
      </section>

      {/* about us */}
      <section
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="container grid grid-cols-1 md:grid-cols-2 my-24"
      >
        {/* about image */}
        <Image
          src="/images/banner1.png"
          alt="banner1"
          className="lg:w-[600px] order-last md:order-first"
          width={550}
          height={0}
        />
        {/* about content */}
        <div>
          {/* about heading content*/}
          <h2 className="text-4xl text-center md:text-left md:text-6xl text-gray-700 font-bold">
            <span className="pr-2">Healthy</span>
            <span className=" bg-primary text-xl rounded-full text-primary">
              O
            </span>
            <span className="px-2">Delicies</span>
            <span className=" bg-primary text-xl rounded-full text-primary">
              O
            </span>
            <br /> <span className="pr-2">Simple</span>
            <span className=" bg-primary text-xl rounded-full text-primary">
              O
            </span>
          </h2>

          {/* about content  */}
          <p className="my-16 text-gray-600 text-xl md:w-[550px] text-center md:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          {/* happy client */}
          <section className="my-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:w-[550px]">
            {/* member */}
            <div className="leading-9 border md:border-none border-gray-400 px-4 py-2 rounded-md">
              <h2 className="text-5xl font-bold text-primary">3k+</h2>
              <span className="text-xl text-gray-700">Member active</span>
            </div>

            <div className="leading-9 border md:border-none border-gray-400 px-4 py-2 rounded-md">
              <h2 className="text-5xl font-bold text-primary">8k+</h2>
              <span className="text-xl text-gray-700">Happy client</span>
            </div>

            <div className="leading-9 border md:border-none border-gray-400 px-4 py-2 rounded-md">
              <h2 className="text-5xl font-bold text-primary">20k+</h2>
              <span className="text-xl text-gray-700">Award winning</span>
            </div>
          </section>

          {/* button */}
          <PrimaryButton name="Read more"></PrimaryButton>
        </div>
      </section>

      {/* why chose our resturent */}
      <section
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="container my-24"
      >
        <Title name="Why Choose Our Restaurant"></Title>
        <p className="text-center text-xl text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys <br /> standard dummy
          text ever since the 1500s,
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-28">
          <ChooseCard></ChooseCard>
          <ChooseCard></ChooseCard>
          <ChooseCard></ChooseCard>
        </div>
      </section>

      {/* our menu */}
      <section
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="bg-gray-50"
      >
        <div className="container py-20">
          {/* title */}
          <Title name="Our menus"></Title>
          {/* content */}
          <p className="text-center text-xl text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys <br /> standard dummy
            text ever since the 1500s,
          </p>
          {/* menus */}
          <div className="flex items-center justify-between mt-48 mb-4">
            <p
              className="p-1 text-gray-500 border border-primary rounded-t-sm px-6 cursor-pointer hover:bg-primary hover:text-white">
              Defult items
            </p>
            <div className="flex gap-2 items-center">
              <span className="border border-primary text-gray-500 rounded-sm material-symbols-outlined">
                list
              </span>
              <span className=" border border-primary text-gray-500 rounded-sm material-symbols-outlined">
                view_cozy
              </span>
            </div>
          </div>

          {/* product */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {
              isLoading ? <>
                {
                  product.map((p, i) => {
                    return <Product key={i} {...p} ></Product>
                  })
                }
              </> : <>
                <LoadingProduct></LoadingProduct>
                <LoadingProduct></LoadingProduct>
                <LoadingProduct></LoadingProduct>
                <LoadingProduct></LoadingProduct>
                <LoadingProduct></LoadingProduct>
                <LoadingProduct></LoadingProduct>
                <LoadingProduct></LoadingProduct>
              </>
            }

          </div>
        </div>
      </section>

      {/* table book */}
      <section
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="container my-24"
      >
        <Title name="Book a table"></Title>
        <p className="text-center text-xl text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys <br /> standard dummy
          text ever since the 1500s,
        </p>

        <div className="my-16 shadow-lg rounded-md">
          <form action="" className="md:p-24 py-7 px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* name */}
              <div className=" col-span-1">
                <label htmlFor="" className="text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  className=" border border-gray-400 rounded-md py-3 outline-0 w-full hover:border-primary px-3"
                  placeholder="name"
                  name=""
                  id=""
                />
              </div>

              {/* email */}
              <div>
                <label htmlFor="" className="text-gray-600">
                  E-mail
                </label>
                <input
                  type="email"
                  className=" border border-gray-400 rounded-md py-3 outline-0 w-full hover:border-primary px-3"
                  placeholder="e-mail"
                  name=""
                  id=""
                />
              </div>

              {/* phone */}
              <div>
                <label htmlFor="" className="text-gray-600">
                  Phone
                </label>
                <input
                  type="number"
                  className=" border border-gray-400 rounded-md py-3 outline-0 w-full hover:border-primary px-3"
                  placeholder="phone"
                  name=""
                  id=""
                />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="" className="text-gray-600">
                  Date
                </label>
                <input
                  type="date"
                  className=" border border-gray-400 rounded-md py-3 outline-0 w-full hover:border-primary px-3"
                  name=""
                  id=""
                />
              </div>

              {/* time */}
              <div>
                <label htmlFor="" className="text-gray-600">
                  Time
                </label>
                <input
                  type="time"
                  className=" border border-gray-400 rounded-md py-3 outline-0 w-full hover:border-primary px-3"
                  name=""
                  id=""
                />
              </div>

              {/* people */}
              <div>
                <label htmlFor="" className="text-gray-600">
                  People
                </label>
                <input
                  type="number"
                  className=" border border-gray-400 rounded-md py-3 outline-0 w-full hover:border-primary px-3"
                  placeholder="number of people"
                  name=""
                  id=""
                />
              </div>

              {/* Message */}
              <div className=" md:col-span-3">
                <label htmlFor="" className="text-gray-600">
                  Message
                </label>
                <textarea
                  name=""
                  className="border border-gray-400 rounded-md py-3 outline-0 w-full hover:border-primary px-3"
                  placeholder="Message"
                  id=""
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* galley */}
      <section
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="mt-24 bg-gray-50 py-20"
      >
        <Title name="Some photos from Our Restaurant"></Title>
        <p className="text-center text-xl text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys <br /> standard dummy
          text ever since the 1500s,
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-1 mt-48 mb-8">
          <Image
            src="/images/gallery-1.jpg"
            alt="banner1"
            className=""
            width={550}
            height={0}
          />

          <Image
            src="/images/gallery-2.jpg"
            alt="banner1"
            className=""
            width={550}
            height={0}
          />

          <Image
            src="/images/gallery-3.jpg"
            alt="banner1"
            className=""
            width={550}
            height={0}
          />

          <Image
            src="/images/gallery-4.jpg"
            alt="banner1"
            className=""
            width={550}
            height={0}
          />

          <Image
            src="/images/gallery-5.jpg"
            alt="banner1"
            className=""
            width={550}
            height={0}
          />

          <Image
            src="/images/gallery-6.jpg"
            alt="banner1"
            className=""
            width={550}
            height={0}
          />

          <Image
            src="/images/gallery-7.jpg"
            alt="banner1"
            className=""
            width={550}
            height={0}
          />

          <Image
            src="/images/gallery-8.jpg"
            alt="banner1"
            className=""
            width={550}
            height={0}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
