import { IBreadCrumbs } from "../../types/breadCrumb.type";

export const BreadCrumbs: React.FC<IBreadCrumbs> = (
  props: IBreadCrumbs
): JSX.Element => {
  return (
    <>
      <section className="container flex items-center ">
        <span className=" py-2 material-symbols-outlined">home</span>
        <span className="material-symbols-outlined">chevron_right</span>
        <span className={`${props.title2 ? 'text-gray-400' : 'text-primary'}`} >{props.title1}</span>
        {props.title2 ? <> <span className="material-symbols-outlined">chevron_right</span> <span className="text-primary" >{props.title2}</span>   </> : ""}
      </section>
    </>
  );
};
