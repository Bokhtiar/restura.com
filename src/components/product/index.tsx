import Image from "next/image";
import { IProduct } from "../../types/product.type";

export const Product: React.FC<IProduct> = (props: IProduct): JSX.Element => {
  return (
    <section className=" shadow-lg rounded-xl">
      {/* image */}
      <Image
        src="/images/banner1.png"
        alt="banner1"
        className="mx-auto"
        width={250}
        height={0}
      />
      <div className="px-4">
        {/* content */}
        <h2 className="text-center text-2xl text-gray-600">{props.name}</h2>
        <p className="text-[12px] leading-[14px] text-center text-gray-500 md:my-4">
          {props.short_description}
        </p>
        {/* footer section */}
        <div className="my-4 px-4 text-gray-500 flex items-center justify-between ">
          <span className="text-primary material-symbols-outlined">
            favorite
          </span>
          <span className="text-[16px]">{props.price} Tk</span>
          <span className=" text-blue-500 material-symbols-outlined">
            shopping_cart
          </span>
        </div>
      </div>
    </section>
  );
};
