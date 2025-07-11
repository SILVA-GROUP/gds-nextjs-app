'use client';

import Link from 'next/link';
import { DataSetDetailProps } from './types';
import { BackLink } from '@/components/ui/BackLink';
import { useDataSet } from '@/hooks/useDataset';
import { Loader } from '@/components/ui/Loader';
import { ErrorMessage } from '@/components/ui/ErrorMessage';

export function DataSetDetail({ dataSetId }: DataSetDetailProps) {
  const { dataSet, loading, error } = useDataSet(dataSetId);

  if (loading) {
    return <Loader text="Loading dataset details..." />;
  }

  if (error) {
    return (
      <>
        <BackLink href="/datasets" title="Back" />
        <ErrorMessage message={error} />
      </>
    );
  }

  if (!dataSet) {
    return (
      <>
        <BackLink href="/datasets" title="Back" />
        <ErrorMessage message="Dataset not found." title="Not Found" />
      </>
    );
  }

  return (
    <>
      <BackLink href="/datasets" title="Back" />

      <h1 className="govuk-heading-xl govuk-!-margin-top-6 govuk-!-margin-bottom-4">
        {dataSet.title}
      </h1>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <dl className="govuk-summary-list">
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Description</dt>
              <dd className="govuk-summary-list__value">
                {dataSet.description}
              </dd>
            </div>

            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Methodologies</dt>
              <dd className="govuk-summary-list__value">
                {dataSet.methodologies && dataSet.methodologies.length > 0 ? (
                  <Link
                    href={dataSet.methodologies[0].href}
                    className="govuk-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dataSet.methodologies[0].title}
                  </Link>
                ) : (
                  'No methodologies available'
                )}
              </dd>
            </div>

            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Contacts</dt>
              <dd className="govuk-summary-list__value">
                {dataSet.contacts && dataSet.contacts.length > 0 ? (
                  <dl className="govuk-summary-list">
                    <div className="govuk-summary-list__row">
                      <dt className="govuk-summary-list__key govuk-!-width-one-third">
                        Name
                      </dt>
                      <dd className="govuk-summary-list__value">
                        {dataSet.contacts[0].name}
                      </dd>
                    </div>
                    <div className="govuk-summary-list__row ">
                      <dt className="govuk-summary-list__key govuk-!-width-one-third">
                        Email
                      </dt>
                      <dd className="govuk-summary-list__value">
                        <Link
                          href={`mailto:${dataSet.contacts[0].email}`}
                          className="govuk-link"
                        >
                          {dataSet.contacts[0].email}
                        </Link>
                      </dd>
                    </div>
                    <div className="govuk-summary-list__row govuk-summary-list__row--no-border">
                      <dt className="govuk-summary-list__key govuk-!-width-one-third">
                        Telephone
                      </dt>
                      <dd className="govuk-summary-list__value">
                        {dataSet.contacts[0].telephone}
                      </dd>
                    </div>
                  </dl>
                ) : (
                  <p>No contact information available</p>
                )}
              </dd>
            </div>

            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Release frequency</dt>
              <dd className="govuk-summary-list__value">
                {dataSet.release_frequency}
              </dd>
            </div>

            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Next release</dt>
              <dd className="govuk-summary-list__value">
                {dataSet.next_release || 'TBD'}
              </dd>
            </div>

            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">State</dt>
              <dd className="govuk-summary-list__value">{dataSet.state}</dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
}
