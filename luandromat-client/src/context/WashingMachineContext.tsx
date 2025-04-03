import { createContext, useContext, useState, useMemo } from 'react'

interface WashingMachineContextProps {
  coins: number
  setCoins: React.Dispatch<React.SetStateAction<number>>
  isCounting: boolean
  setIsCounting: React.Dispatch<React.SetStateAction<boolean>>
  targetDate: Date | null
  setTargetDate: React.Dispatch<React.SetStateAction<Date | null>>
}

const WashingMachineContext = createContext<
  WashingMachineContextProps | undefined
>(undefined)

export const WashingMachineProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [coins, setCoins] = useState(100)
  const [isCounting, setIsCounting] = useState(false)
  const [targetDate, setTargetDate] = useState<Date | null>(null)

  return (
    <WashingMachineContext.Provider
      value={{
        coins,
        setCoins,
        isCounting,
        setIsCounting,
        targetDate,
        setTargetDate,
      }}
    >
      {children}
    </WashingMachineContext.Provider>
  )
}

export const useWashingMachine = () => {
  const context = useContext(WashingMachineContext)
  if (!context)
    throw new Error(
      'useWashingMachine must be used within a WashingMachineProvider'
    )
  return context
}
