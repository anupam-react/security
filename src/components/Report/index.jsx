import React from 'react'
import { useNavigate } from 'react-router-dom'

const Report = () => {
    const navigate = useNavigate('')
  return (
    <div>
        <div className='flex items-center justify-between gap-4'>
        <p className="font-bold text-[40px] pb-4">Report</p>
            <div className='flex gap-4'>
                <button className='border border-1 h-fit  border-[#F02946] text-[#F02946] text-[24px] rounded-[20px] p-1 px-3 font-bold'>View</button>
                <button className='border border-1 h-fit border-[#F02946] text-[#F02946] text-[24px] rounded-[20px] p-1 px-3 font-bold'>Edit</button>
            </div>
        </div>
        
        <div className='grid grid-cols-2 gap-4'>
            <div onClick={()=> navigate('/report/download')} className='flex gap-6 items-center border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                <p className='text-[32px] font-bold'>Profile Update Report</p>
                <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]'/>
            </div>
            <div onClick={()=> navigate('/report/download')} className='flex gap-6 items-center border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                <p className='text-[32px] font-bold'>Leave Approval Report</p>
                <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]'/>
            </div>
            <div onClick={()=> navigate('/report/download')} className='flex gap-6 items-center border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                <p className='text-[32px] font-bold'>Add Employee Report</p>
                <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]'/>
            </div>
            <div onClick={()=> navigate('/report/download')} className='flex gap-6 items-center border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                <p className='text-[32px] font-bold'>Daily Deployment Report</p>
                <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]'/>
            </div>
            <div onClick={()=> navigate('/report/download')} className='flex gap-6 items-center border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                <p className='text-[32px] font-bold'>Monthly Deployment Report</p>
                <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]'/>
            </div>
            <div className='flex gap-6 items-center border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                <p className='text-[32px] font-bold'>Manual Attendance Report</p>
                <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]'/>
            </div>
        
            <div onClick={()=> navigate('/report/download')} className='flex gap-6 items-center border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                <p className='text-[32px] font-bold'>Muster Roll Report</p>
                <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]'/>
            </div>
            <div onClick={()=> navigate('/report/download')} className='flex gap-6 items-center border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                <p className='text-[32px] font-bold'>Employee Report</p>
                <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]'/>
            </div>
        </div>
        </div>
  )
}

export default Report