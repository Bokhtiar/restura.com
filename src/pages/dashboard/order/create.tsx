import { BreadCrumbs } from "@/components/breadCrumbs"
import { OrderForm } from "@/components/form/order.form"
import Sidebar from "@/components/sidebar"

const orderCreate :React.FC = () :JSX.Element => {
    return <>
    <BreadCrumbs title1="Dashboard" title2="Order create"></BreadCrumbs>
        <section className="container grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[600px] bg-gray-50 p-6">
            {/* sidebar */}
            <div className=" col-span-1">
                <Sidebar></Sidebar>
            </div>

            {/* content */}
            <div className="md:col-span-4">
                <OrderForm></OrderForm>
            </div>
        </section>
    </>
       
}
export default orderCreate