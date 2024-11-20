import { useEffect } from "react";
import { useCourseStore } from "../../store/course.store";
import { getSlides } from "./getSlides";
import { useQuery } from "@tanstack/react-query";

const GET_SLIDES = 'get_slides';

// Returns store data unless query data updates
export const useGetSlideData = () => {
  const { courseSlideData, setCourseSlideData } = useCourseStore();
  const queryData = useQuery({ queryKey: [GET_SLIDES], queryFn: getSlides })

  useEffect(() => {
    if (queryData.data && courseSlideData?.title !== queryData.data.title) {
      setCourseSlideData(queryData.data)
    }
  }, [courseSlideData?.title, queryData.data, setCourseSlideData]);

  return {
    courseSlideData,
    ...queryData
  }
};
