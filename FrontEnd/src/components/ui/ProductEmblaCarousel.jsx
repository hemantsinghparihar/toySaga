import React, { useCallback } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import '../../embla.css';
import { PrevButton,
     NextButton,
    usePrevNextButtons } from './EmblaCarouselArrowButtons';

function ProductEmblaCarousel(props) {
  const { Images, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className="embla3">
      <div className="embla__viewport3" ref={emblaRef}>
        <div className="embla__container3">
          {Images.map((image, index) => (
            <div className="embla__slide3" key={index}>
              <img src={`http://13.201.30.241${image}`} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
}

export default ProductEmblaCarousel;




// import React from 'react'
// import Autoplay from 'embla-carousel-autoplay'
// import useEmblaCarousel from 'embla-carousel-react'
// import '../../embla.css'

// function ProductEmblaCarousel(props) {
//     const Images=props.Images
//     const { slides, options } = props
//     const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  
//     return (
//       <section className="embla3">
//         <div className="embla__viewport3" ref={emblaRef}>
//           <div className="embla__container3">
//             {slides.map((index) => (
//               <div className="embla__slide3" key={index}>
//                 {Images.map(one=>{
//                     return(
//                         <img src={`http://13.201.30.241${one}`} alt="" />
//                     )
                   
//                 })}
                
//                 {/* <div className="embla__slide__number3">{index + 1}</div> */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
  
// }

// export default ProductEmblaCarousel
