import React from 'react'

const Card = ({crypto}) => {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-2xl border-gray-300 border bg-white min-w-96">
        <div className='flex items-center gap-2'>
        <img src={crypto.small} alt="" className='rounded-full' />
        <p className='font-normal text-lg'>{crypto.symbol}</p>
        <p className={`rounded p-1 text-sm ${parseFloat(crypto.data.price_change_percentage_24h.usd) < 0 ? 'bg-red-100 text-red-400' : 'bg-green-100 text-green-400'}`}>
  {parseFloat(crypto.data.price_change_percentage_24h.usd).toFixed(2)}%
</p>
        </div>
       <h1 className='text-xl font-medium'>{crypto.data.price}</h1>
       <img src={crypto.data.sparkline} alt="" />
    </div>
  )
}

export default Card