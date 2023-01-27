type LinkType = { 
  children?: any
  }

export const Link = ({ children }: LinkType) => {
  return (
    <a className={`text-primary-500 dark:text-primary-400`}>
      Link
    </a>
  )
}