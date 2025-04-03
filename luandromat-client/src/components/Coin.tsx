import classNames from 'classnames'
import coinCash from 'assets/svg/coin-cash.svg'
import { ModalButton } from 'base/Modal'

interface CoinProps {
  coinAmount: number
  setCoinAmount: React.Dispatch<React.SetStateAction<number>>
  className?: string
}

const Coin: React.FC<CoinProps> = ({
  coinAmount,
  setCoinAmount,
  className,
}) => {
  const addCoins = () => setCoinAmount((prev) => prev + 10)
  const removeCoins = () => setCoinAmount((prev) => Math.max(0, prev - 10))

  return (
    <div
      className={classNames(
        'flex items-center my-2 justify-center md:justify-center ',
        className
      )}
    >
      <img
        src={coinCash}
        alt="Coin Cash"
        className="w-16 h-16 md:w-24 md:h-24 pr-4"
      />

      <ModalButton
        modalHeader="Your Coins"
        modalContentChildren={
          <div className="flex gap-4 mt-4 justify-center items-center border-2 rounded-lg p-2">
            <button
              className="bg-yellow-500 w-[50px] px-4 py-2 text-white rounded-lg text-sm md:text-base"
              onClick={removeCoins}
            >
              -10
            </button>
            <p className="text-xl font-semibold text-center">
              {coinAmount} coins
            </p>
            <button
              className="bg-yellow-500 w-[50px] px-4 py-2 text-white rounded-lg text-sm md:text-base"
              onClick={addCoins}
            >
              +10
            </button>
          </div>
        }
        HeaderClassName="text-center"
        buttonLeft="Cancel"
        buttonRight="Save"
        ButtonName={`Coin ${coinAmount}`}
        ButtonClassName="max-h-32 w-full md:w-64 border-2 border-yellow-500 bg-white/30 
        backdrop-blur-md text-wrap text-yellow-500 text-xl md:text-2xl"
        buttonLeftClassname="bg-red-500 text-white"
        buttonRightClassname="bg-blue-500 text-white"
      />
    </div>
  )
}

export default Coin
