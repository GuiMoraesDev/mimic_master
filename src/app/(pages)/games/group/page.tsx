import { SelectableCard } from "@/components/molecules/SelectableCard";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export const metadata = {
  title: "Group game",
};
export default function Page() {
  const categoriesArray = [
    { name: "Objetos", numberOfWords: 10 },
    { name: "Ação", numberOfWords: 10 },
    { name: "Esportes", numberOfWords: 10 },
    { name: "Pacote do editor", numberOfWords: 10 },
    { name: "Infantil", numberOfWords: 10 },
    { name: "Biologia", numberOfWords: 10 },
    { name: "C.E.P.", numberOfWords: 10 },
    { name: "Cinema", numberOfWords: 10 },
    { name: "Famosos", numberOfWords: 10 },
    { name: "Hard", numberOfWords: 10 },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <h1 className="text-2xl">Timer game</h1>

      <CategoriesWrapper>
        {categoriesArray.map(({ name, numberOfWords }) => (
          <SelectableCard key={name}>
            <strong>{name}</strong>
            <p>{numberOfWords} palavras</p>
          </SelectableCard>
        ))}
      </CategoriesWrapper>
    </main>
  );
}

const CategoriesWrapper = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    {...props}
    className={twMerge("grid grid-cols-2 items-center gap-2", className)}
  />
);
