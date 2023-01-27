type NumberPadType = { 
  children?: any
  }

const NumberPad = ({ children }: NumberPadType) => {

  const numbers = [1,2,3,4,5,6,7,8,9,0]
  return (
    <div className={``}>
      NumberPad
      { children }
      
      
    </div>
  )
}

export default NumberPad