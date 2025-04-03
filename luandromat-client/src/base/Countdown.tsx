import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { dateFormats } from 'config/dateFormat'

interface CountdownProps {
  className?: string
  targetDate: Date
  formatType?: keyof typeof dateFormats
}

export const Countdown: React.FC<CountdownProps> = ({
  className,
  targetDate,
  formatType = 'dayMonthYearDateTime',
}) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  function calculateTimeLeft(target: Date) {
    const now = new Date()
    const difference = target.getTime() - now.getTime()

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return (
    <div className={className}>
      <div className="flex gap-5 text-lg font-mono justify-center">
        <div>
          <span className="countdown text-4xl">{timeLeft.hours}</span> hrs
        </div>
        <div>
          <span className="countdown text-4xl">{timeLeft.minutes}</span> min
        </div>
        <div>
          <span className="countdown text-4xl">{timeLeft.seconds}</span> sec
        </div>
      </div>
      <div className="text-sm text-gray-500 flex justify-center">
        Ends on:{' '}
        {format(targetDate, dateFormats[formatType] || 'dd/MM/yyyy HH:mm')}
      </div>
    </div>
  )
}

export default Countdown
