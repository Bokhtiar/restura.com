import { ICard } from "../../types/card.type";

export const Card: React.FC<ICard> = (props: ICard): JSX.Element => {
  return (
    <section className="flex items-center gap-2 py-5 px-5 rounded-md border text-gray-600 border-primary hover:bg-primary hover:text-white">
      <span className="material-symbols-outlined">{props.icon}</span>
      <div className="">
        <span className="font-bold text-2xl">{props.item}</span>
        <span className="text-base text-gray-500">{props.name}</span>
      </div>
    </section>
  );
};
