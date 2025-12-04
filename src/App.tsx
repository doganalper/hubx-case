import { TabFeature } from './components/TabFeature';

export function App() {
  return (
    <main>
      {/* <TabFeature subtitle="Document Scanner" title="Scan with Ease" bodyText="Scan any document instantly with your mobile device by just a few steps. Save as PDF, JPG, ZIP, TXT and Word format." /> */}
      {/* <TabFeature subtitle='Sign & Stamp' title='One-Tap Focus' bodyText='Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap!'  /> */}
      {/* <TabFeature subtitle='Batch Scanning' title='Multiple Page Scan' bodyText='Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document.' /> */}
      <TabFeature subtitle='Advanced Filters' title='Unique Filters' bodyText='Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters.' />
      {/* <TabFeature subtitle='Export & Share' title='All-Round Conversion' bodyText='Export your scans as PDF,JPG,ZIP,TXT and Word.' /> */}
    </main>
  );
}
