import { ITitle } from "../../types/title.type";

export const Title: React.FC<ITitle> = (props: ITitle): JSX.Element => {
  return (
    <>
      <h2 className="text-center text-3xl md:text-6xl font-bold font-nunito text-primary">{props.name}</h2>
    </>
  );
};
