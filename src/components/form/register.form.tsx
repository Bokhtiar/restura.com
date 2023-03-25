import { PrimaryButton } from "../button"
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { IRegister } from "@/types/register.type";
import { Toastify } from "../toastify";
import { registration } from "../../network/auth.network"
import Link from "next/link";

export const RegisterForm: React.FC = (): JSX.Element => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegister>();

    const formSubmitHandler: SubmitHandler<IRegister> = async (data: IRegister) => {
        console.log(data);
        try {
            const response = await registration(data)
            console.log(response);
            if (response && response.status === 201) {
                router.push("/login");
                Toastify.Success(response.data.message)
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
                    {/* name */}
                    <div className=" my-3">
                        <label htmlFor="" className="text-gray-500">
                            Name
                        </label>
                        <input
                            {...register("name", { required: "This field is required" })}
                            type="text"
                            className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                            id=""
                            placeholder="Full name"
                        />
                    </div>

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


                    {/* phone */}
                    <div className=" my-3">
                        <label htmlFor="" className="text-gray-500">
                            Phone
                        </label>
                        <input
                            {...register("phone", { required: "This field is required" })}
                            type="number"
                            className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                            id=""
                            placeholder="Phone number"
                        />
                    </div>


                    {/* Location */}
                    <div className=" my-3">
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


                    {/* role */}
                    <div className=" my-3">
                        <input
                            {...register("role")}
                            type="text"

                            hidden
                            defaultValue={'user'}
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
                        <PrimaryButton name="Registrtion"></PrimaryButton>
                        <Link href='/login' className="text-gray-500 ">Login</Link>
                    </div>
                </form>
            </div>
        </section>
    </>
}
