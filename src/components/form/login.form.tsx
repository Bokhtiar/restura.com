import { PrimaryButton } from "../button"
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "@/types/login.type";
import { login } from "@/network/auth.network";
import { setToken } from "@/utils/helper";
import { useRouter } from "next/router";
import Link from "next/link";

export const LoginForm : React.FC = ():JSX.Element => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<ILogin>();

      const formSubmitHandler: SubmitHandler<ILogin> = async (data: ILogin) => {
        console.log(data);
        try {
          const response = await login(data);
          console.log(response);
          
          if (response && response.status === 200) {
            await setToken(response.data?.token);
            router.push("/dashboard");
          }
        } catch (error: any) {
          console.log(error);
        }
      };

    return <>
     <section className="flex h-screen bg-gray-50">
      <div className=" my-auto w-96 shadow-lg bg-white mx-auto px-4 rounded-lg py-6">
        <img
          src="./images/client1.jpg"
          className="h-16 w-16 rounded-full border border-gray-900 p-1 mx-auto"
          alt=""
        />
        {/* end logo */}

        <form className="" onSubmit={handleSubmit(formSubmitHandler)}>
          {/* email */}
          <div className=" my-3">
            <label htmlFor="" className="text-gray-500">
              Email
            </label>
            <input
              {...register("email", { required: "This field is required" })}
              type="email"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
              id=""
              placeholder="email address"
            />
          </div>

          {/* password */}
          <div className=" my-3">
            <label className="text-gray-500" htmlFor="">
              Password
            </label>
            <input
              {...register("password", { required: "This field is required" })}
              type="password"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
            />
          </div>

          {/* button */}
          <div className="text-center flex items-center gap-3">
            <PrimaryButton name="Login"></PrimaryButton>
            <Link href='/register' className="text-gray-500 ">create new account</Link>
          </div>
        </form>
      </div>
    </section>
    </>
}
