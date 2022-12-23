
import Lightbox from 'react-image-lightbox';
import { useState } from 'react';

export default function ModelGallery(props){
    const [photoIndex,setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [images,setImages] = useState(props.images)
    return(<>
                {images.map((x,index)=>
                   <img src={x.image} className="cursor" onClick={() => {
                        setPhotoIndex(index)
                        setIsOpen(true)
                    }} />
                )}
            
            {isOpen && <>
            <Lightbox
                mainSrc={images[photoIndex].image}
                nextSrc={images[((photoIndex + 1) % images.length) || 0 ].image}
                prevSrc={images[((photoIndex + images.length - 1) % images.length) || 0].image}
                onCloseRequest={() => setIsOpen( false) }
                onImageLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                  }}
                onMovePrevRequest={() =>
                    setPhotoIndex(((photoIndex - 1) % images.length)||0)
                }
                onMoveNextRequest={() =>
                    setPhotoIndex(((photoIndex + 1) % images.length)||0)
                }
            /></>}
    </>)
}