import { Callout } from '~/ui/callout';
import { Link } from '~/ui/link';

export function About() {
  return (
    <Callout>
      <p>
        Founding Engineer at{' '}
        <Link href="https://gathercontent.com">GatherContent</Link> (acq 22).{' '}
        <span className="md:block">
          Previously Frontend Lead at{' '}
          <Link href="https://wearejh.com/">JH</Link> &{' '}
          <Link href="https://un.titled.com">Un.titled</Link>.
        </span>
      </p>
    </Callout>
  );
}
