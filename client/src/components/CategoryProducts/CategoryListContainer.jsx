import React, { useState } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CategoryCard } from './CategoryCard'

export const CategoryListContainer = ({
	categoriesList,
	setFilter,
	filter,
}) => {
	const [idCard, setIdCard] = useState(0)

	const filterCategory = id => {
		if (id === idCard) {
			setIdCard(0)
			setFilter({ ...filter, category: '' })
		} else {
			setIdCard(id)
			setFilter({ ...filter, category: id })
		}
	}

	return (
		<div className='flex w-full gap-4 my-4 px-4'>
			<Swiper
				className='w-full py-2 px-2'
				modules={[Navigation, Scrollbar, A11y]}
				breakpoints={{
					350: {
						slidesPerView: 2,
						spaceBetween: 5
					},

					520: {
						slidesPerView: 3,
					},

					768: {
						slidesPerView: 4,
					},

					1000: {
						slidesPerView: 5,
					},
				}}

				// onSwiper={swiper => console.log(swiper)}
			>
				{categoriesList.map((category, i) => {
					return (
						<SwiperSlide key={i}>
							<CategoryCard
								key={category.id}
								id={category.id}
								title={category.title}
								price={category.price}
								stock={category.stock}
								setFilter={setFilter}
								filter={{ ...filter }}
								filterCategory={filterCategory}
								type={idCard === category.id ? 1 : 0}
							/>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</div>
	)
}
