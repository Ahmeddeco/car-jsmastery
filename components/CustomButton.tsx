/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({
	title,
	btnType,
	containerStyles,
	handleClick,
	isDisabled,
	rightIcon,
	textStyles,
}: CustomButtonProps) => {
	return (
		<button
			className={`custom-btn ${containerStyles}`}
			onClick={handleClick}
			disabled={false}
			type={btnType || 'button'}
		>
			<span className={`flex-1`}>{title}</span>
		</button>
	)
}

export default CustomButton
