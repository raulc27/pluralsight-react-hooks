import React from 'react';

import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
    return(
        <div>
            <ImageToggleOnMouseOver 
             primaryImg="/static/imagem1.jpg" 
             secondaryImg="/static/imagem2.jpg"
             width="200px" alt="Imagem 1" />
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver 
            primaryImg="/static/imagem2.jpg" 
            secondaryImg="/static/imagem1.jpg"
            width="200px" alt="Imagem 2" />
            </div>
    );
};


export default ImageChangeOnMouseOver;