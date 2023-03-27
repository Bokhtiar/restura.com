import { orderCreate } from "@/network/order.network";
import { IOrder, IOrderCreate } from "@/types/order.type";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PrimaryButton } from "../button";
import { Toastify } from "../toastify";

export const OrderForm: React.FC = (): JSX.Element => {
  const router = useRouter()
  const [next, setNext] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrder>();

  const formSubmitHandler: SubmitHandler<IOrderCreate> = async (data: IOrderCreate) => {
    console.log(data);
    try {
      const response = await orderCreate(data)
      if (response && response.status === 200) {
        router.push("/dashboard");
        Toastify.Success(response.data.data)
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return <>
    <form action="" onSubmit={handleSubmit(formSubmitHandler)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {
          !next ? <>
            {/* name */}
            <div className="">
              <label htmlFor="" className="text-gray-500">
                Name
              </label>
              <input
                {...register("name", { required: "This field is required" })}
                type="text"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                id=""
                placeholder="full name"
              />
            </div>

            {/* email */}
            <div className="">
              <label htmlFor="" className="text-gray-500">
                Email
              </label>
              <input
                {...register("email", { required: "This field is required" })}
                type="email"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                id=""
                placeholder="Email"
              />
            </div>

            {/* phone */}
            <div className="">
              <label htmlFor="" className="text-gray-500">
                Phone
              </label>
              <input
                {...register("phone", { required: "This field is required" })}
                type="number"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                id=""
                placeholder="phone number"
              />
            </div>

            {/* location */}
            <div className="">
              <label htmlFor="" className="text-gray-500">
                Location
              </label>
              <input
                {...register("location", { required: "This field is required" })}
                type="text"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                id=""
                placeholder="Location"
              />
            </div>

            {/* note */}
            <div className=" md:col-span-2">
              <label htmlFor="" className="text-gray-500">
                Note
              </label>
              <textarea {...register('note')} id="" className="h-24 w-full  border border-gray-300 py-2 focus:outline-none rounded-lg px-4"></textarea>
            </div>

            {/* next page button */}
            <div className="md:col-span-2">
              <button className="float-right btn btn-outline bg-primary text-white flex items-center gap-1" onClick={() => setNext(!next)}>
                <span className="material-symbols-outlined">payments</span>
                <span>Payment</span>
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </> : <>

            {/* location */}
            <div className=" md:col-span-2">
              <label htmlFor="" className="text-gray-500">
                Payment name
              </label>
              <input
                {...register("payment_name", { required: "This field is required" })}
                type="text"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                id=""
                placeholder="payment name (bkash, rocket, nagud)"
              />
            </div>

            {/* payment number */}
            <div className=" col-span-2">
              <label htmlFor="" className="text-gray-500">
                Payment number
              </label>
              <input
                {...register("payment_number", { required: "This field is required" })}
                type="text"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                id=""
                placeholder="payment number (0193xxxxxxxxxxx)"
              />
            </div>

            {/* payment txid */}
            <div className=" col-span-2">
              <label htmlFor="" className="text-gray-500">
                Payment transection ID
              </label>
              <input
                {...register("payment_txid", { required: "This field is required" })}
                type="text"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                id=""
                placeholder="payment transection (a2sxxxxx)"
              />
            </div>

            <div className="col-span-2 flex justify-between items-center">

              <button className="float-left btn btn-outline bg-primary text-white flex items-center gap-1" onClick={() => setNext(!next)}>
                <span className="material-symbols-outlined">chevron_left</span>
                <span>Prev</span>

              </button>

              <PrimaryButton name="submit"></PrimaryButton>

            </div>
          </>
        }
      </div>
    </form>
  </>
}
