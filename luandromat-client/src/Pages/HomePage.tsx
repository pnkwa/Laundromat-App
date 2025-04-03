import React from 'react'
import homeImage from 'assets/svg/home.svg'

const Home: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-primary">
          Welcome to <span className="text-blue-500">CucuWash</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A simple and convenient laundry system via LINE Bot.
        </p>

        <button
          onClick={onStart}
          className="mt-6 bg-blue-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-600 transition"
        >
          Get Started
        </button>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0">
        <img
          src={homeImage}
          alt="CucuWash Home"
          className="w-full max-w-md md:max-w-lg mx-auto"
        />
      </div>
    </div>
  )
}

export default Home
