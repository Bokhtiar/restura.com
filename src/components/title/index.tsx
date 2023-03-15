import { ITitle } from "../../types/title.type";

export const Title: React.FC<ITitle> = (props: ITitle): JSX.Element => {
  return (
    <>
      <h2 className="text-center text-6xl font-bold font-nunito text-primary">{props.name}</h2>
      {/* <h2 className="text-center text-4xl font-bold font-nunito text-red-200  -mt-8 ">{props.name}</h2> */}
    </>
  );
};
