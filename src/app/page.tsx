import Link from 'next/link';

export default function Home() {
  return (
    <div className="govuk-width-container">
      <main
        className="govuk-main-wrapper"
        id="main-content"
        role="main"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 'calc(100vh - 300px)', // Adjust this value based on header/footer height
        }}
      >
        <div className="govuk-grid-row" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <h1 className="govuk-heading-xl govuk-!-margin-bottom-6">
              <span className="govuk-nowrap">Office for National Statistics</span>
            </h1>
            <p className="govuk-body govuk-!-margin-bottom-8">
              Explore ONS datasets
            </p>

            <div
              className="govuk-!-margin-bottom-6"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Link
                href="/datasets"
                role="button"
                draggable="false"
                className="govuk-button govuk-button--start"
                data-module="govuk-button"
              >
                Start now
                <svg
                  className="govuk-button__start-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.5"
                  height="19"
                  viewBox="0 0 33 40"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
