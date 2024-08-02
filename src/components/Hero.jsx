import { useState, useRef } from 'react'
import Carousel from 'react-elastic-carousel'

function Hero() {
  const [images] = useState([
    {
      id: 1,
      image: '/chicken-coup.jpg'
    },
    {
      id: 0,
      image: '/swine.jpg'
    },
    {
      id: 2,
      image: '/chickens.jpg'
    },
    {
      id: 3,
      image: '/cows.jpg'
    },
    {
      id: 4,
      image: '/dog.jpeg',
    },
    {
      id: 5,
      image: '/goat.jpeg',
    },
    {
      id: 6,
      image: '/cats.jpeg'
    },
  ])
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(images.length)
  let resetTimeout

  return (
    <div className="hero">
      <Carousel
        ref={carouselRef}
        enableAutoPlay={true}
        autoPlaySpeed={7000}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          if (index + 1 === totalPages) {
             resetTimeout = setTimeout(() => {
                carouselRef.current.goTo(0)
            }, 1500) // same time
          }
        }}
      >
        {images.map(item => (
          <div key={item.id} className="slideshow">
            <img src={item.image} alt="Analytics with care" />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Hero;