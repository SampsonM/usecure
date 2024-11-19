import { FC, ReactNode } from "react"

type NullWrapperProps = {
  children: ReactNode;
  isVisible: boolean;
}

export const NullWrapper: FC<NullWrapperProps> = ({ isVisible, children }) => {
  return (
    isVisible ? children : null
  )
}