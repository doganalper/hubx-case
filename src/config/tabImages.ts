import { TabKey } from '../types/TabKey';

export const tabImages: Record<TabKey, string[]> = {
  [TabKey.DocumentScanner]: ['document-scanner-image.png'],
  [TabKey.SignStamp]: ['sign-stamp-image.png', 'sign-stamp-right-image.png', 'sign-stamp-left-image.png'],
  [TabKey.BatchScanning]: ['phone-empty-image.png', 'batch-scanning-image-1.png', 'batch-scanning-image-2.png', 'batch-scanning-image-3.png'],
  [TabKey.AdvancedFilters]: ['advanced-filters-image.png', 'advanced-filters-left-bar-image.png', 'advanced-filters-right-bar-image.png'],
  [TabKey.ExportShare]: ['export-share-image.png', 'export-share-image-1.png', 'export-share-image-2.png', 'export-share-image-3.png', 'export-share-image-4.png']
};

