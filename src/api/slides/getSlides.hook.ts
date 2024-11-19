import { getSlides } from "./getSlides";
import { useQuery } from "@tanstack/react-query";

const GET_SLIDES = 'get_slides';

export const useGetSlides = () => useQuery({ queryKey: [GET_SLIDES], queryFn: getSlides });
