import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import HighlightText1 from '../HomePage/HighlightText1'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
         <HighlightText text={"Breaking Barriers, Not Budgets"} />: Our Platform is Redefining Education{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            Affordability
        </span>
        , Bringing High Quality
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F09819] text-transparent bg-clip-text font-bold">
            {" "}
            Learning
            {" "}
        </span> 
          to Every Student.
    </div>
  )
}

export default Quote