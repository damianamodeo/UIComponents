import { ReactNode } from "react"

type ContainerType = { 
  children?: ReactNode
  }

const Container = ({ children }: ContainerType) => {
  return (
    <div className={`overflow-auto h-full`}>
      {children}
    </div>
  )
}

export default Container