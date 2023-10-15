import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const unslug = (str: string, splitAt: string) => {
  return str.replace(splitAt, " ");
};

type TDate = {
  date: string;
  time: string;
};

export const format_date = (date: Date): TDate => {
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const day = new Date(date).getDate();

  const hours = new Date(date).getHours();
  const minutes = new Date(date).getMinutes();

  return {
    date: `${month}/${day}/${year}`,
    time: `${hours}:${minutes}`,
  };
};
