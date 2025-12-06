import { motion } from 'framer-motion';
import { TabKey } from '../types/TabKey';
import { tabImages } from '../config/tabImages';
import { getTabImageUrl } from '../lib/loadImage';
import { tabAnimations } from '../config/tabAnimations';

const parentTransitionDuration = 0.5;

interface TabImageContainerProps {
  activeTab: TabKey;
}

export const TabImageContainer = ({ 
  activeTab, 
}: TabImageContainerProps) => {
  return (
    <div className="image-container">
      {tabImages[activeTab].map((image, index) => {
        const imageAnimation = tabAnimations[activeTab][index];
        const imageUrl = getTabImageUrl(activeTab, index);
        return (
          <motion.img
            key={`${activeTab}-${index}-${image}`}
            src={imageUrl}
            alt={`Image for (${activeTab}) tab`}
            initial={imageAnimation?.from || {}}
            animate={imageAnimation?.to || {}}
            exit={{ opacity: 0 }}
            transition={
              {
                ...imageAnimation?.transition,
                delay: imageAnimation?.transition?.delay ?? parentTransitionDuration,
              }
            }
          />
        );
      })}
    </div>
  );
};

