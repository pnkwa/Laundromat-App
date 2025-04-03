import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import Lottie from 'lottie-react'
import washingAnimation from 'assets/washing-animation.json'
import { useWashingMachine } from 'context/WashingMachineContext'
import Button from 'base/Button'
import Countdown from 'base/Countdown'
import Coin from './Coin'
import Wave from 'react-wavify'

const socket = io(import.meta.env.VITE_SOCKET_URL)

const WashingMachineTabContent: React.FC = () => {
  const { isCounting, setIsCounting, coins, setCoins } = useWashingMachine()
  const [timeLeft, setTimeLeft] = useState(0)
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    socket.on('updateTime', ({ timeLeft }) => {
      setTimeLeft(timeLeft)
      setIsCounting(timeLeft > 0)

      if (timeLeft > 0) lottieRef.current?.play()
      else lottieRef.current?.goToAndStop(0, true)
    })

    return () => {
      socket.off('updateTime')
    }
  }, [])

  const startWashing = () => {
    if (coins >= 20) {
      setCoins((prev) => prev - 20)
      socket.emit('startWashing', 2 * 60)
    } else {
      alert('Not enough coins!')
    }
  }

  return (
    <div className="relative min-h-[740px] h-screen flex flex-col justify-center px-4 md:px-6">
      <div className="flex z-10 relative flex-col md:flex-row items-center justify-center flex-1">
        <div className="flex items-center justify-center w-full md:w-1/2">
          <Lottie
            animationData={washingAnimation}
            lottieRef={lottieRef}
            autoplay={false}
            className="max-w-[220px] sm:max-w-xs md:max-w-md"
          />
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mt-6 md:mt-0">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold 
          text-blue-500 text-center mb-4 md:mb-6 w-full max-w-[280px] sm:max-w-md"
          >
            CucuWash
          </h1>

          {isCounting ? (
            <Countdown
              targetDate={new Date(Date.now() + timeLeft * 1000)}
              formatType={'isoTime'}
              className="bg-white w-full max-w-[280px] sm:max-w-md h-32 flex flex-col 
              justify-center rounded-md text-center p-4"
            />
          ) : (
            <div
              className="bg-white w-full max-w-[280px] sm:max-w-md h-32 flex flex-col 
            justify-center items-center rounded-md p-4 text-center"
            >
              <p className="text-md sm:text-lg font-semibold">
                Click{' '}
                <span className="text-white bg-primary px-2 rounded-md">
                  START
                </span>{' '}
                to Laundry
              </p>
              <p className="text-gray-600 mt-2">
                💰 Use{' '}
                <span className="text-yellow-500 font-bold">20 Coins</span>
              </p>
              <p className="text-gray-600">
                ⏳ Takes{' '}
                <span className="text-blue-500 font-bold">2 minutes</span>
              </p>
            </div>
          )}

          <Coin
            coinAmount={coins}
            setCoinAmount={setCoins}
            className="w-full max-w-[280px] sm:max-w-md"
          />

          <Button
            className={`btn my-2 px-8 max-w-[280px] sm:max-w-md w-full 
              text-xl border-2 text-white ${
                isCounting ? 'bg-red-500' : 'bg-primary'
              }`}
            text={isCounting ? 'Washing...' : 'START'}
            onClick={startWashing}
            disabled={isCounting}
          />
        </div>
      </div>

      {isCounting && (
        <Wave
          fill="#ADC4CE"
          paused={!isCounting}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '48%',
          }}
          options={{
            height: 20,
            amplitude: 20,
            speed: 1,
            points: 3,
          }}
        />
      )}
    </div>
  )
}

export default WashingMachineTabContent
