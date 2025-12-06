import { useMemo } from 'react';
import { TabKey } from '../types/TabKey';
import { tabConfigs } from '../config/tabConfig';

export interface Tab {
  id: TabKey;
  label: string;
  icon: React.ElementType;
  isActive: boolean;
}

export const useTabs = (activeTab: TabKey): Tab[] => {
  return useMemo(() => 
    tabConfigs.map((config) => ({
      ...config,
      isActive: activeTab === config.id,
    })),
    [activeTab]
  );
};

