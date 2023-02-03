import { ReactNode } from "react"

type ContainerType = { 
  children?: ReactNode
  }

const Container = ({ children }: ContainerType) => {
  return (
    <div className={`overflow-auto-xxx h-full overscroll-x-contain`}>
      {children}
    </div>
  )
}

export default Container