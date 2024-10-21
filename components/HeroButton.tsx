'use client'

import CustomButton from './CustomButton'

const HeroButton = () => {
	const handleScroll = () => {}

	return (
		<div>
			<CustomButton
				title={'Explore Cars'}
				containerStyles='bg-primary-blue text-white rounded-full mt-10'
				handleClick={handleScroll}
			/>
		</div>
	)
}

export default HeroButton
