import React, { useEffect, useState } from 'react';

import ImageToggleOnScroll from '../src/ImageToggleOnScroll';





const ImageChangeOnScroll = () => {

    const [currentImageId, setCurrentImageId] = useState(0);
    const [mouseEventCnt, setMouseEventCnt] = useState(0);

    useEffect(() => {
        window.document.title = `imgId: ${currentImageId}`;
        console.log(`useEffect: setting title to ${currentImageId}`);
    },[currentImageId]);



    return (
        <div>
            <span>mouseEventCnt: ${mouseEventCnt}</span>
            {
                [1, 2, 3, 4, 5, 6, 7, 8].map((imgId) => {
                    return (
                        <div key={imgId}>
                            <ImageToggleOnScroll
                                primaryImg={`/static/imagem${imgId}.jpg`}
                                secondaryImg={`/static/imagem${imgId}.jpg`}
                                alt=""
                            />
                        </div>
                    );
                })
            }
        </div>
    );
};


export default ImageChangeOnScroll;