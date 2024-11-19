import { Slide } from "./getSlides.type";

export const getSlides = async (): Promise<Slide> => {
  const response = await fetch('/src/api/mock-data/mock-slide-data.json');
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};
