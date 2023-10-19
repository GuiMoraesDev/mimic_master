import { Card, CardProps } from "@/components/atoms/Card";
import { twMerge } from "tailwind-merge";

type SelectableCardProps = CardProps & {
  value: string;
  onSelectChange?: (value: string) => void;
};
export const SelectableCard = ({
  value,
  onSelectChange,
  ...props
}: SelectableCardProps) => {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        className="absolute opacity-0 peer"
        onChange={(e) => onSelectChange?.(e.target.value)}
      />
      <Card
        {...props}
        className={twMerge(
          "peer-checked:text-black peer-checked:bg-green-500 peer-checked:border-green-800 peer-checked:scale-95",
          "peer-checked:ring-2 peer-checked:ring-green-500 peer-checked:ring-opacity-50",
          "peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-opacity-50",
          "peer-checked:hover:scale-95 peer-checked:hover:bg-green-400"
        )}
      />
    </label>
  );
};
