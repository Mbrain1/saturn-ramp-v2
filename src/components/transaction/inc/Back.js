import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const Back = ({ back }) => {
	return (
		<button 
			onClick={() => back()} className="flex items-center text-base">
			<IoIosArrowBack size={20} /><span>Back</span>
        </button>
	)
}

export default Back