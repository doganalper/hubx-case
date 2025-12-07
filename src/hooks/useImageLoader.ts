import { useEffect, useState } from 'react';
import { TabKey } from '../types/TabKey';
import { tabImages } from '../config/tabImages';
import { loadImage } from '../lib/loadImage';
import { getTabImageUrl } from 'src/lib/loadImage';

export const useImageLoader = () => {
  const [areImagesLoaded, setAreImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = Object.entries(tabImages).flatMap(([tabKey, imageFilenames]) =>
      imageFilenames.map((_, index) => {
        const imageUrl = getTabImageUrl(tabKey as TabKey, index);
        return loadImage(imageUrl);
      })
    );
    void Promise.all(imagePromises).then(() =>
      setAreImagesLoaded(true)
    );
  }, []);

  return { areImagesLoaded };
};

