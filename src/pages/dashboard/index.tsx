import Sidebar from "@/components/sidebar";
import { BreadCrumbs } from "@/components/breadCrumbs";
import { Card } from "@/components/card";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <BreadCrumbs title1="Dashboard"></BreadCrumbs>

      <section className="container grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[600px] bg-gray-50 p-6">
        {/* sidebar */}
        <div className=" col-span-1">
          <Sidebar></Sidebar>
        </div>

        {/* content */}
        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card name="Cart" item={32} icon="shopping_cart"></Card>
            <Card name="Wishlist" item={22} icon="favorite"></Card>
            <Card name="Order" item={52} icon="list_alt"></Card>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home

