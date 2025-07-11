import { DataSetTable } from '@/components/DataSetTable';
import { BackLink } from '@/components/ui/BackLink';


export default function DataSetsPage() {
  return (
    <>
      <BackLink href="/" title="Back" />
      <div style={{ textAlign: 'center' }}>
        <h1 className="govuk-heading-xl govuk-!-margin-top-9">Datasets</h1>
      </div>

      <DataSetTable />
    </>
  );
}
