import { BreadCrumbs } from "@/components/breadCrumbs";
import { PrimaryButton } from "@/components/button";
import { Title } from "@/components/title";

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
            <div className="px-10 my-10 w-[450px] mx-auto">
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
    </>
  );
};
export default Contact;
