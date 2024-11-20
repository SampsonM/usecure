import { FC, ReactNode } from "react"

type NullWrapperProps = {
  children: ReactNode;
  isVisible: boolean;
}

/**
 * Basic wrapper to avoid using if else ternary to decide on rendering
 * Personal preference but I think this reads nicer
 */
export const NullWrapper: FC<NullWrapperProps> = ({ isVisible, children }) => {
  return (
    isVisible ? children : null
  )
}