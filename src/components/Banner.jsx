import React from 'react'


function Banner() {
  return (
    <div className="h-[30vh] md:h-[80vh] bg-cover bg-center flex items-end" style={{backgroundImage:`url(https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfiJRL93pxt2bMIjjCacI70txer19X8qIo8meKi44J6pAes5-3NDYG8-lwlJWCWWQJ4zpPMUucejmv8_UocMYWB0UOF1dI_1ky4m.jpg?r=057)`}}>
        <div className='text-white text-2xl text-center w-full bg-red-900/60 p-4'>London Has Fallen</div>
    </div>
  )
}

export default Banner