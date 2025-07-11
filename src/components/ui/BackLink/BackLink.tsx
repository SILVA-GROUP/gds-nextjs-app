import { BackLinkProps } from './types';
import Link from 'next/link';

function BackLink({ href, title }: BackLinkProps) {
  return (
    <Link href={href} className="govuk-link govuk-back-link">
      {title}
    </Link>
  );
}

export default BackLink;
