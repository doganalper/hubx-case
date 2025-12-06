import { TabKey } from '../types/TabKey';
import { ADVANCED_FILTERS_ANIMATION, BASE_PHONE_ANIMATION, BATCH_SCANNING_ANIMATION, EXPORT_SHARE_ANIMATION, SIGN_STAMP_ANIMATION } from '../lib/animations';
import type { Animation } from '../types/Animation';

export const tabAnimations: Record<TabKey, Animation[]> = {
  [TabKey.DocumentScanner]: [BASE_PHONE_ANIMATION],
  [TabKey.SignStamp]: SIGN_STAMP_ANIMATION,
  [TabKey.BatchScanning]: BATCH_SCANNING_ANIMATION,
  [TabKey.AdvancedFilters]: ADVANCED_FILTERS_ANIMATION,
  [TabKey.ExportShare]: EXPORT_SHARE_ANIMATION,
};

