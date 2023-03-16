import Image from "next/image";
import { Title } from "@/components/title";
import { PrimaryButton } from "@/components/button";
import { BreadCrumbs } from "@/components/breadCrumbs";




const Contact: React.FC = (): JSX.Element => {
  return (
    <>
      <BreadCrumbs title1="Contact"></BreadCrumbs>

      {/* content */}
      <section className="container my-5">
        <Title name="Get in Touch"></Title>
        <p className="text-center text-xl text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys <br /> standard dummy
          text ever since the 1500s,
        </p>

        {/* contact info with form */}
        <section className="mt-24 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* info */}
            <div className="px-10 my-10 md:w-[450px] mx-auto">
              <div className="bg-primary text-white px-4 shadow-2xl rounded-md p-10">
                <h2 className="text-4xl text-white">
                  Have a project in mind ?
                </h2>
                <p className="text-justify my-6 mb-40">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s,
                </p>

                {/* contact info */}
                <div>
                  {/* mail */}
                  <p className="flex items-center gap-3">
                    <span className="material-symbols-outlined">mail</span>
                    <span>bokhtiar.swe@gmail.com</span>
                  </p>
                  {/* call */}
                  <p className="flex items-center gap-3">
                    <span className="material-symbols-outlined">call</span>
                    <span>+1 5589 55488 55</span>
                  </p>
                  {/* location */}
                  <p className="flex items-center gap-3">
                    <span className="material-symbols-outlined">location_on</span>
                    <span>ashlia, saver, dhaka</span>
                  </p>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="px-10 my-10">
                <form action="">
                    <div className="">
                        <label htmlFor="" className="text-gray-500">Name</label>
                        <input type="text" className=" py-3 border border-gray-400 rounded-md w-full px-4" placeholder="Name" name="" id="" />
                    </div>

                    <div className="">
                        <label htmlFor="" className="text-gray-500">E-mail</label>
                        <input type="text" className=" py-3 border border-gray-400 rounded-md w-full px-4" placeholder="E-mail" name="" id="" />
                    </div>

                    <div className="">
                        <label htmlFor="" className="text-gray-500">Subject</label>
                        <input type="text" className=" py-3 border border-gray-400 rounded-md w-full px-4" placeholder="subject" name="" id="" />
                    </div>

                    <div className="">
                        <label htmlFor="" className="text-gray-500">Message</label>
                        <textarea name="" className="py-10 border border-gray-400 rounded-md w-full px-4" placeholder="Message"></textarea>
                    </div>

                    <PrimaryButton name="Submit"></PrimaryButton>
                </form>
            </div>
          </div>
        </section>
      </section>

        {/* about */}
      <section data-aos="zoom-in-right" data-aos-duration="3000" className="container grid grid-cols-1 md:grid-cols-2 my-24">
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
    </>
  );
};
export default Contact;
