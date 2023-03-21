import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../../types/product.type";

export const Product: React.FC<IProduct> = (props: IProduct): JSX.Element => {
  return (
    // <section className=" shadow-lg rounded-xl">
    //   {/* image */}
    //   <Image
    //     src={props.image}
    //     alt="banner1"
    //     className="mx-auto py-2 px-2"
    //     width={250}
    //     height={0}
    //   />
    //   <div className="px-4">
    //     {/* content */}
    //     <h2 className="text-center text-2xl text-gray-600">
    //       <Link href={`/menu/${1}`}>{props.name}</Link>
    //     </h2>
    //     <p className="text-[12px] text-justify leading-[14px]  text-gray-500 ">
    //       {props.short_description}
    //     </p>
    //     {/* footer section */}
    //     <div className="my-4 text-gray-500 flex items-center justify-between gap-4">
    //       <span className="text-primary material-symbols-outlined">
    //         favorite
    //       </span>
    //       <span className="text-[16px]">{props.price}Tk</span>
    //       <span className=" text-blue-500 material-symbols-outlined">
    //         shopping_cart
    //       </span>
    //     </div>
    //   </div>
    // </section>

    <section className=" shadow-lg rounded-xl">
      {/* image */}
      <Image
        src={props.image}
        alt="banner1"
        className="mx-auto py-2 px-2"
        width={250}
        height={0}
      />
      <div className="px-4">
        {/* content */}
        <h2 className="text-center text-xl text-gray-600 flex justify-between">
          <Link href={`/menu/${1}`}>{props.name}</Link>
          <span className="text-[16px]">{props.price}Tk</span>
        </h2>
        <p className="text-[12px] text-justify leading-[14px]  text-gray-500 ">
          {props.short_description}
        </p>
        {/* footer section */}
        {/* <div className="my-4 text-gray-500 flex items-center justify-between gap-4">
          <span className="text-primary material-symbols-outlined">
            favorite
          </span>
          <span className="text-[16px]">{props.price}Tk</span>
          <span className=" text-blue-500 material-symbols-outlined">
            shopping_cart
          </span>
        </div> */}

        <div className=" my-3 p-[3px] text-gray-600 rounded-md text-center border border-primary hover:bg-primary hover:text-white hover:duration-700">
          Add to cart
        </div>
      </div>
    </section>
  );
};
