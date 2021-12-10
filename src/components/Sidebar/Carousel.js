//* Styled
import { Slider } from './styled';
//* Components
import ChevronLeft from '../../svg/ChevronLeft';
import ChevronRight from '../../svg/ChevronRight';
import SliderData from './SliderData';

//* React
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWallpaper } from '../../redux/actions/wallpaper';
//* Redux

const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const length = SliderData.length;

    const dispatch = useDispatch();
    const handleImage = (image) => {
        dispatch(setWallpaper(image));
        localStorage.setItem('wallpaper', JSON.stringify(image));
    };

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(SliderData) || SliderData.length <= 0) {
        return null;
    }
    return (
        <Slider>
            <span className='left-arrow' onClick={prevSlide}>
                <ChevronLeft />
            </span>
            <span className='right-arrow' onClick={nextSlide}>
                <ChevronRight />
            </span>
            {SliderData.map((slide, index) => {
                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {/* https://stackoverflow.com/questions/54317153/reactstrap-display-local-image-on-carousel */}
                        {index === current && (
                            <img
                                src={`../../images/${slide.image}`}
                                alt='travel'
                                className='image'
                                onClick={() => handleImage(slide.image)}
                            />
                        )}
                    </div>
                );
            })}
        </Slider>
    );
};

export default Carousel;
