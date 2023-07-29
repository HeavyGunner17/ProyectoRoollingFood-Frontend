import React from 'react'

const Pag404 = () => {
  return (


<div className="flex flex-col h-screen bg-white">
  <img
    src="https://media.istockphoto.com/id/637216704/es/foto/preparaci%C3%B3n-de-hamburguesas-con-queso.jpg?s=2048x2048&w=is&k=20&c=FcX3NLgRmmVCtC7iRhlnQ5vHYGZfIHkx-AhPurHWsts="
    alt=""
    className="object-cover w-full h-64"
  />

  <div className="flex items-center justify-center flex-1">
    <div className="max-w-xl px-4 py-8 mx-auto text-center">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        We can't find that page.
      </h1>

      <p className="mt-4 text-gray-500">
        Try searching again, or return home to start from the beginning.
      </p>

      <a
        href="#"
        className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </a>
    </div>
  </div>
</div>
  )}
export default Pag404;