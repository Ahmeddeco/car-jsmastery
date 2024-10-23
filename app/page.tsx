'use client'

import CarCard from '@/components/CarCard'
import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import ShowMore from '@/components/ShowMore'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'
import { useEffect, useState } from 'react'

export default function HomePage() {
	const [allCars, setAllCars] = useState([])
	const [loading, setLoading] = useState(false)

	// search states
	const [manufacturer, setManufacturer] = useState('')
	const [model, setModel] = useState('')
	// filter states
	const [fuel, setFuel] = useState('')
	const [year, setYear] = useState(2022)

	// pagination states
	const [limit, setLimit] = useState(10)

	const result = async () => {
		const allCars = await fetchCars({
			manufacturer: manufacturer || '',
			year: year || 2022,
			fuel: fuel || '',
			limit: limit || 10,
			model: model || '',
		})
		setAllCars(result)
	}

	useEffect(() => {
		getCars()
	}, [fuel, year, limit, manufacturer, model])

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

	return (
		<main className='overflow-hidden'>
			<Hero />
			<div className='my-12 padding-x padding-y max-width ' id='discover'>
				<div className='home__text-container'>
					<h1 className='text-4xl font-extrabold capitalize'>car catalogue</h1>
					<p className='capitalize'>explore the car you might like</p>
				</div>
				<div className='home__filters'>
					<SearchBar />
					<div className='home__filter-container'>
						<CustomFilter title='fuel' options={fuels} />
						<CustomFilter title='year' options={yearsOfProduction} />
					</div>
				</div>
				{!isDataEmpty ? (
					<section className=''>
						<div className='home__cars-wrapper'>
							{allCars?.map((car, i) => {
								return <CarCard car={car} key={i} />
							})}
						</div>
						<ShowMore
							pageNumber={(searchParams.limit || 10) / 10}
							isNext={(searchParams.limit || 10) > allCars.length}
						/>
					</section>
				) : (
					<div className='home__error-container'>
						<h2 className='text-black text-xl font-bold'>Oops, no results</h2>
						<p className=''>{allCars?.message}</p>
					</div>
				)}
			</div>
		</main>
	)
}
