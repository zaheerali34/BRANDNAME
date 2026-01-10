import React from 'react'

function Services() {
  return (
     <div className="relative h-[300px] md:h-[350px] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('./Service/one.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-[#0a1a2f]/70">
            <h1 className="text-white text-[3rem] max-sm:text-[2rem] max-sm:px-[5rem] pt-[10rem] px-[10rem]">
              Services
            </h1>
            <p className='text-white font-semibold text-[1rem] px-[10rem]'>Signum Global provides best-in-class research and customized advice for an exclusive set of institutions, ultimately helping clients navigate a world of ever-growing political and macro uncertainty. Signum defines policy broadly as legislation, regulation, elections, trade, security, tech, energy, climate, geopolitics and macroeconomic policy.</p>
          </div>
        </div>
      </div>
  )
}

export default Services