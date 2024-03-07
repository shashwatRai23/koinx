import React from 'react'

const PerfComp = ({map,value}) => {
  return (
    <div className="flex justify-between border-b-2 border-gray py-2"><span className="text-[#768396]">{map}</span><span>{value}</span></div>
  )
}

export default PerfComp