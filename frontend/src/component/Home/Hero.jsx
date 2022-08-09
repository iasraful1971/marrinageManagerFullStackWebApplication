import { Carousel } from '@mantine/carousel';
import "./Hero.css";
export function Hero() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
      loop
      align="start"
    >
      <Carousel.Slide>
        <div className='hero-bg-image-1'>

        </div>
      </Carousel.Slide>
      <Carousel.Slide>
      <div className='hero-bg-image-2'>

     </div>
      </Carousel.Slide>
      <Carousel.Slide>

      <div className='hero-bg-image-3'>

      </div>
      </Carousel.Slide>
      <Carousel.Slide>

      <div className='hero-bg-image-4'>

      </div>
      </Carousel.Slide>
      <Carousel.Slide>

      <div className='hero-bg-image-5'>

      </div>
      </Carousel.Slide>
      
    </Carousel>
  );
}