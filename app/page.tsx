import CustomFilter from '@/components/CustomFilter'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'

export default function HomePage() {
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
					<div className='home__fillter-container'>
						<CustomFilter  />
						<CustomFilter  />
					</div>
				</div>
			</div>
		</main>
	)
}
