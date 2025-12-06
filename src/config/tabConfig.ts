import { TabKey } from '../types/TabKey';
import { DocumentScannerIcon } from '../components/icons/DocumentScannerIcon';
import { SignStampIcon } from '../components/icons/SignStampIcon';
import { BatchScanningIcon } from '../components/icons/BatchScanningIcon';
import { AdvancedFiltersIcon } from '../components/icons/AdvancedFiltersIcon';
import { ExportShareIcon } from '../components/icons/ExportShareIcon';

export interface TabConfig {
  id: TabKey;
  label: string;
  icon: React.ElementType;
}

export const tabConfigs: TabConfig[] = [
  {
    id: TabKey.DocumentScanner,
    label: 'Document Scanner',
    icon: DocumentScannerIcon,
  },
  {
    id: TabKey.SignStamp,
    label: 'Sign & Stamp',
    icon: SignStampIcon,
  },
  {
    id: TabKey.BatchScanning,
    label: 'Batch Scanning',
    icon: BatchScanningIcon,
  },
  {
    id: TabKey.AdvancedFilters,
    label: 'Advanced Filters',
    icon: AdvancedFiltersIcon,
  },
  {
    id: TabKey.ExportShare,
    label: 'Export & Share',
    icon: ExportShareIcon,
  },
];

