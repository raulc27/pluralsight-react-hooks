import React, { useEffect, useRef, useState } from 'react';

const ImageToggleOnScroll = ({ 
    primaryImg, secondaryImg
}) => {
    const imageRef = useRef(null);

    const [inView, setInView] = useState(false);


    useEffect(()=>{
        window.addEventListener("scroll", scrollHandler); 
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        }
    },[])

    return(

            <img src={primaryImg}
            alt="" 
            ref={imageRef}
            />
      
    );
};

export default ImageToggleOnScroll;