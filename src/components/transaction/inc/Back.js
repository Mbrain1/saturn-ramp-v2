import React from 'react'
import { IoIosArrowBack } from "react-icons/io";

const Back = ({ back }) => {
	return (
		<button 
			onClick={() => back()} 
			className="text-gray-700 font-medium flex items-center text-base">
				<IoIosArrowBack size={20} className="opacity-50" />
				<span>Back</span>
        </button>
	)
}

export default Back