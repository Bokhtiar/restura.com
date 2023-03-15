import Image from "next/image";
import { PrimaryButton } from "@/components/button";
import { Header } from "@/layouts/header";
import { Title } from "@/components/title";
import { Product } from "@/components/product";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Header></Header>
      {/* banner section */}
      <section className="bg-gray-50">
        <div className="container grid grid-cols-1 md:grid-cols-2 items-center justify-between">
          {/* content */}
          <div>
            {/* heading content */}
            <p className="leading-10 pt-5">
              <span className="md:text-5xl text-4xl font-bold text-blue-400">
                Make Healthy Life
              </span>
              <br />
              <span className="md:text-5xl text-4xl font-bold">
                With Fitbitesmeal
              </span>
            </p>
            {/* body content */}
            <p className="leading-[0px] my-8">
              <span className="md:text-3xl text-2xl text-gray-800 ">
                Delicious meal the way you want,
              </span>
              <br />
              <span className="md:text-3xl text-2xl text-gray-800">
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
      <section className="container grid grid-cols-1 md:grid-cols-2 my-24">
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

      {/* our menu */}
      <section className="bg-gray-50">
        <div className="container py-7">
          {/* title */}
          <Title name="Our menus"></Title>
          {/* content */}
          <p className="text-center text-xl text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys <br /> standard dummy text ever since the 1500s, </p>
          {/* menus */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-16">
            <Product name="pizza" price={20} short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" image="/images/banner1.png"></Product>
            <Product name="pizza" price={20} short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" image="/images/banner1.png"></Product>
            <Product name="pizza" price={20} short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" image="/images/banner1.png"></Product>
            <Product name="pizza" price={20} short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" image="/images/banner1.png"></Product>
            <Product name="pizza" price={20} short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" image="/images/banner1.png"></Product>
            <Product name="pizza" price={20} short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" image="/images/banner1.png"></Product>
            <Product name="pizza" price={20} short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" image="/images/banner1.png"></Product>
            <Product name="pizza" price={20} short_description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" image="/images/banner1.png"></Product>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
