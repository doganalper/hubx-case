import { useState } from 'react';
import { TabNavigation } from './components/TabNavigation';
import { TabContent } from './components/TabContent';
import { TabImageContainer } from './components/TabImageContainer';
import { AnimatePresence, motion } from 'framer-motion';
import { TabKey } from './types/TabKey';
import { useImageLoader } from './hooks/useImageLoader';
import { useTabs } from './hooks/useTabs';


export function App() {
  const [activeTab, setActiveTab] = useState(TabKey.DocumentScanner);
  const { areImagesLoaded } = useImageLoader();
  const tabs = useTabs(activeTab);

  if (!areImagesLoaded) {
    return <div>Images Loading...</div>;
  }

  return (
    <main>
      <AnimatePresence mode='wait'>
        <motion.div
          key={activeTab}
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='tab-container'
        >
          <div className='app-container'>
            <TabContent activeTab={activeTab} />
            <TabImageContainer
              activeTab={activeTab}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <TabNavigation tabs={tabs} onTabClick={setActiveTab} />
    </main>
  );
}
