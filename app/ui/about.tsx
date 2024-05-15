import { Callout } from '~/ui/callout';
import { Link } from '~/ui/link';

export function About() {
  return (
    <Callout>
      <p>
        Founding Engineer at{' '}
        <Link href="https://gathercontent.com" className="font-semibold">
          GatherContent
        </Link>{' '}
        (acq 22).{' '}
        <span className="md:block">
          Previously Frontend Lead{' '}
          <span className="block sm:inline">
            at{' '}
            <Link href="https://wearejh.com/" className="font-semibold">
              JH
            </Link>{' '}
            &{' '}
            <Link href="https://un.titled.com" className="font-semibold">
              Un.titled
            </Link>
            .
          </span>
        </span>
      </p>
    </Callout>
  );
}
