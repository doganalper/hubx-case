import { TabKey } from '../types/TabKey';
import { TabFeature } from './TabFeature';
import { tabContent } from '../config/tabContent';

interface TabContentProps {
  activeTab: TabKey;
}

export const TabContent = ({ activeTab }: TabContentProps) => {
  const content = tabContent[activeTab];
  
  return (
    <TabFeature
      subtitle={content.subtitle}
      title={content.title}
      bodyText={content.bodyText}
    />
  );
};

