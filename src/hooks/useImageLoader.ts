import { useEffect, useState } from 'react';
import { tabImages } from '../config/tabImages';
import { loadImage } from '../lib/loadImage';

export const useImageLoader = () => {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = Object.values(tabImages).map((image) => Promise.all(image.map(loadImage)));
    Promise.all(imagePromises).then(() =>
      setAreImagesLoaded(true)
    );
  }, []);

  return { areImagesLoaded };
};

