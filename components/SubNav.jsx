import React from 'react'

const SubNav = () => {
  return (
    <div className='flex flex-wrap gap-5 mt-8 text-[#3E424A] border-b-2 border-[#C9CFDD99] pb-3'>
        <div className='text-[#0141CF] font-bold cursor-pointer'>Overview</div>
        <div className='cursor-pointer'>Fundamentals</div>
        <div className='cursor-pointer'>News Insights</div>
        <div className='cursor-pointer'>Sentiments</div>
        <div className='cursor-pointer'>Team</div>
        <div className='cursor-pointer'>Technicals</div>
        <div className='cursor-pointer'>Tokenomics</div>
    </div>
  )
}

export default SubNav