import { DataSetDetail } from "@/components/DataSetDetail"

interface DataSetPageProps {
  params: {
    id: string
  }
}

export default async function DataSetPage({ params }: DataSetPageProps) {
  const { id } = await params;
  return <DataSetDetail dataSetId={id} />
}