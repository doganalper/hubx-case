import { tabImages } from "src/config/tabImages";
import type { TabKey } from "src/types/TabKey";

export const loadImage = (imageUrl: string) =>
    new Promise((resolve) => {
        const loadImg = new Image();
        loadImg.src = imageUrl;
        loadImg.onload = () => resolve(imageUrl);
        loadImg.onerror = () => resolve(imageUrl);
    });

const imageModules = import.meta.glob('../images/*.png', { eager: true, as: 'url' });

const getImageUrl = (filename: string): string => {
  const entry = Object.entries(imageModules).find(([path]) => 
    path.endsWith(filename)
  );
  return entry ? entry[1] : '';
};

export const getTabImageUrl = (tabKey: TabKey, imageIndex: number): string => {
  const imageFilename = tabImages[tabKey][imageIndex];
  return getImageUrl(imageFilename);
};
