import React from 'react';

import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
    return(
       <div>
           {
               [1,2,3,4,5,6,7,8].map((imgId)=>{
                  return( 
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