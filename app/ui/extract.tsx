import { Date } from '~/ui/date';
import { Link } from '~/ui/link';

interface Props {
  href: string;
  title: string;
  date: string;
  intro: string;
}

export function Extract(props: Props) {
  return (
    <article>
      <div className="flex flex-wrap-reverse">
        <Link href={props.href} className="w-full">
          <h3 className="text-inherit m-0 lg:m-0">{props.title}</h3>
        </Link>
        <Date>{props.date}</Date>
      </div>
      <p className="text-slate-500 mt-2">{props.intro}</p>
    </article>
  );
}
