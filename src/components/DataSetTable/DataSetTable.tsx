'use client';

import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

import { useDataSets } from '@/hooks/useDatasets';
import { Loader } from '@/components/ui/Loader';
import { ErrorMessage } from '@/components/ui/ErrorMessage';

export function DataSetTable() {
  const { dataSets, loading, error } = useDataSets();

  if (loading) {
    return <Loader text="Loading datasets..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: '70%' }}>Dataset</TableHead>
            <TableHead style={{ width: '7%' }}>State</TableHead>
            <TableHead style={{ width: '23%' }}>Next release</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataSets.map((dataSet) => (
            <TableRow key={dataSet.id}>
              <TableCell>
                <Link
                  href={`/datasets/${dataSet.id}`}
                  className="govuk-link govuk-body-m"
                >
                  {dataSet.title}
                </Link>
              </TableCell>
              <TableCell>{dataSet.state}</TableCell>
              <TableCell>
                <span className="text-sm">
                  {dataSet.next_release || 'To be announced'}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {dataSets.length === 0 && (
        <ErrorMessage message="No datasets found..." title="No Results" />
      )}
    </>
  );
}
