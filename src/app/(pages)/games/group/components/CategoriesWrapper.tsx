"use client";

import { SelectableCard } from "@/components/molecules/SelectableCard";
import { useState } from "react";

type CategoriesWrapperProps = {
  categoriesArray: { id: string; name: string; numberOfWords: number }[];
};
export const CategoriesWrapper = ({
  categoriesArray,
}: CategoriesWrapperProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleSelect = (value: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(value)) {
        return prev.filter((v) => v !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const totalWordsFromSelected = categoriesArray
    .filter(({ id }) => selectedCategories.includes(id))
    .reduce((acc, { numberOfWords }) => acc + numberOfWords, 0);

  return (
    <section className="flex flex-col gap-4 items-center justify-between">
      <div className="grid grid-cols-2 items-center gap-2">
        {categoriesArray.map(({ id, name, numberOfWords }) => (
          <SelectableCard key={name} value={id} onSelectChange={handleSelect}>
            <strong>{name}</strong>
            <p>{numberOfWords} palavras</p>
          </SelectableCard>
        ))}
      </div>

      {selectedCategories.length > 0 ? (
        <button
          type="button"
          className="px-4 py-3 border rounded-md hover:scale-105 transition"
        >
          Jogar com {totalWordsFromSelected} palavras
        </button>
      ) : null}
    </section>
  );
};
