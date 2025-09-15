import React, { createContext, useContext, useState } from 'react'

const DarkContext = createContext()

export const useDarkContext = () => useContext(DarkContext)

function DarkModeContext({ children }) {

  const [mode, setMode] = useState(false)

  const value = {
    mode,
    setMode
  }
  return (
    <DarkContext.Provider value={value}>
      {children}
    </DarkContext.Provider>
  )
}

export default DarkModeContext