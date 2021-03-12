import React, { useEffect, useRef, useState } from 'react';

const ImageToggleOnScroll = ({ 
    primaryImg, secondaryImg
}) => {
      
    const imageRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    const isInView = () => {
        const rect = imageRef.current.getBoundingClientRect();
        return rect.top = 0 && rect.bottom <= window.innerHeight;
    };

    const [inView, setInView] = useState(false);

    useEffect(()=>{
        setIsLoading(false);
        setInView(isInView());
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll",scrollHandler);
        };
    },[]);

    const scrollHandler = () => {
        setInView(isInView());
    };


    return(
        <img 
        src={
          //  isLoading ? ""
            inView ? secondaryImg : primaryImg
        } 
        alt="" 
        ref={imageRef}
        width="200"
        height="200"
        />
    )
};

export default ImageToggleOnScroll;