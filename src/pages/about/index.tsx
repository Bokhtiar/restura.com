import Image from "next/image";
import { BreadCrumbs } from "@/components/breadCrumbs"
import { PrimaryButton } from "@/components/button";
import { Title } from "@/components/title";
import { ChooseCard } from "@/components/chooseCard";

const About : React.FC = ():JSX.Element => {
    return <>
        <BreadCrumbs title1="About"></BreadCrumbs>
        <section className="container">
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

      {/* why chose our resturent */}
      <section className="container my-24">
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
        </section>
    </>
}

export default About