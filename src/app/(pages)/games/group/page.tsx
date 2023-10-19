import { randomUUID as uuid } from "crypto";
import { CategoriesWrapper } from "./components/CategoriesWrapper";

export const metadata = {
  title: "Group game",
};
export default function Page() {
  const categoriesArray = [
    { id: uuid(), name: "Objetos", numberOfWords: 10 },
    { id: uuid(), name: "Ação", numberOfWords: 20 },
    { id: uuid(), name: "Esportes", numberOfWords: 14 },
    { id: uuid(), name: "Pacote do editor", numberOfWords: 8 },
    { id: uuid(), name: "Infantil", numberOfWords: 29 },
    { id: uuid(), name: "Biologia", numberOfWords: 16 },
    { id: uuid(), name: "C.E.P.", numberOfWords: 30 },
    { id: uuid(), name: "Cinema", numberOfWords: 17 },
    { id: uuid(), name: "Famosos", numberOfWords: 22 },
    { id: uuid(), name: "Hard", numberOfWords: 18 },
  ];

  return (
    <main className="flex flex-col items-center justify-center gap-12">
      <h1 className="text-2xl">Timer game</h1>

      <CategoriesWrapper categoriesArray={categoriesArray} />
    </main>
  );
}
