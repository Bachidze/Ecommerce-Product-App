import  { useState } from 'react';

const Product = () => {
    const ImgArr = [
        '/assets/Rectangle (10).svg',
        '/assets/Rectangle Copy 2 (1).svg',
        '/assets/Rectangle Copy 3.svg',
        '/assets/Rectangle Copy 4 (1).svg'
    ];

    const leftImage = '/assets/Path 2 (4).svg'
    const rightImage = '/public/assets/Path 2 (5).svg'

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === ImgArr.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClickPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? ImgArr.length - 1 : prevIndex - 1));
    };

    return (
        <div className="w-full h-full">
            <div className="relative w-full h-96 overflow-hidden flex justify-center">
                <img src={ImgArr[currentIndex]} className="w-[375px] -z-10 h-auto" alt={`Image ${currentIndex}`} />
            </div>
            <div className="flex justify-center mt-4 gap-[250px]">
                <button onClick={handleClickPrev} className="w-[50px] h-[50px] bg-white rounded-full relative bottom-[235px] flex justify-center items-center"><img src={leftImage} alt="leftArrow" /></button>
                <button onClick={handleClickNext} className="w-[50px] h-[50px] bg-white rounded-full relative bottom-[235px] flex justify-center items-center"><img src={rightImage} alt="rightArrow"/></button>
            </div>
        </div>
    );
};

export default Product;
