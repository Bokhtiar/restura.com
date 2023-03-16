import { Sidebar } from "@/components/sidebar";
import { BreadCrumbs } from "@/components/breadCrumbs";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <BreadCrumbs title1="Dashboard"></BreadCrumbs>

      <section className="container grid grid-cols-1 md:grid-cols-5 gap-4 md:h-[600px]">
        {/* sidebar */}
        <div className=" col-span-1">
          <Sidebar></Sidebar>
        </div>

        {/* content */}
        <div className="col-span-4">content</div>
      </section>
    </>
  );
};
export default Home;
