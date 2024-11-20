import { create } from 'zustand'
import { Course } from '../api/slides/getSlides.type';

interface CourseState {
  courseSlideData: Course;
  setCourseSlideData: (slideData: Course) => void;
  score: number;
  incrementScore: () => void;
}

export const useCourseStore = create<CourseState>((set) => ({
  courseSlideData: {
    title: '',
    slides: []
  },
  setCourseSlideData: (courseSlideData) => set({ courseSlideData }),
  score: 0,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
}));
