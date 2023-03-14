import { PrimaryButton } from "@/components/button";
import Image from "next/image";


const Home: React.FC = (): JSX.Element => {
  return <>
    <section className="bg-gray-50">
      <div className="container flex items-center justify-between">
        {/* content */}
        <div>
          {/* heading content */}
          <p className="leading-10">
            <span className="text-5xl font-bold text-blue-400">Make  Healthy Life</span><br />
            <span className="text-5xl font-bold">With Fitbitesmeal</span>
          </p>
          {/* body content */}
          <p className="leading-[0px] my-8">
            <span className="text-3xl text-gray-800 ">Delicious meal the way you want,</span> <br />
            <span className="text-3xl text-gray-800">When you want</span>
          </p>
          {/* button */}
          <PrimaryButton name="Order now" />
        </div>

        {/* image */}
        <Image
          src="/./images/banner1.png"
          alt="banner1"
          width={550}
          height={0}
        />
      </div>
    </section>
  </>
};

export default Home;
