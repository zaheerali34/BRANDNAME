import React from 'react'

function Leadership() {
  return (
     <div className="relative h-[300px] md:h-[260px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('./People/one.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-[#0a1a2f]/70">
            <h1 className="text-white text-[3rem] max-sm:text-[2rem] max-sm:px-[5rem] pt-[10rem] px-[10rem]">
              Leadership Team
            </h1>
          </div>
        </div>
      </div>
  )
}

export default Leadership