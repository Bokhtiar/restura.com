export const Footer: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="bg-black py-28">
        <section className="container grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* address */}
          <div className="">
            <p className="flex items-center gap-2">
              <span className="text-primary material-symbols-outlined">
                location_on
              </span>
              <span className="text-white font-bold text-xl font-nunito">
                Address
              </span>
            </p>
            <p className="px-8 text-justify text-gray-500">
              A108 Adam Street <br />
              New York, NY 535022 - US
            </p>
          </div>

          {/* Reservations */}
          <div className="">
            <p className="flex items-center gap-2">
              <span className="text-primary material-symbols-outlined">
                Call
              </span>
              <span className="text-white font-bold text-xl font-nunito">
                Reservations
              </span>
            </p>
            <p className="px-8  text-gray-500">
              <span className=" font-semibold">Phone:</span>{" "}
              <span>+1 5589 55488 55</span> <br />
              <span className=" font-semibold">Email:</span>{" "}
              <span>info@example.com</span>
            </p>
          </div>

          {/* opening */}
          <div className="">
            <p className="flex items-center gap-2">
              <span className="text-primary material-symbols-outlined">
                update
              </span>
              <span className="text-white font-bold text-xl font-nunito">
                Opening Time
              </span>
            </p>
            <p className="px-8 text-justify text-gray-500">
              <span className="font-semibold">Mon-Sat:</span>11AM - 23PM <br />
              <span className=" font-semibold">Sunday:</span>Closed
            </p>
          </div>

          {/* address */}
          <div className="">
            <p className="flex items-center gap-2">
              <span className="text-primary material-symbols-outlined">
                update
              </span>
              <span className="text-white font-bold text-xl font-nunito">
                Opening Time
              </span>
            </p>
            <p className="px-8 text-justify text-gray-500">
              <span className="font-semibold">Mon-Sat:</span>11AM - 23PM <br />
              <span className=" font-semibold">Sunday:</span>Closed
            </p>
          </div>
          <span className=" md:col-span-4  col-span-2">
            <hr className="" />
          </span>
        </section>

        {/* copywright */}
        <div className="text-center pt-4">
          <span className="text-white">
            © Copyright Yummy. All Rights Reserved
          </span>
          <br />
          <span className="text-white">Designed by BootstrapMade</span>
          <div className="flex items-center gap-2 text-white justify-center">
            <span className="material-symbols-outlined">account_circle</span>
            <span className="material-symbols-outlined">account_circle</span>
            <span className="material-symbols-outlined">account_circle</span>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
        </div>
      </section>
    </>
  );
};
