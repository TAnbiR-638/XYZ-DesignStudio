type Props = {
  items: string[];
  className?: string;
  itemClassName?: string;
  separator?: string;
};

export default function Marquee({ items, className = "", itemClassName = "", separator = "✦" }: Props) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden} className="flex shrink-0 items-center">
      {items.map((t) => (
        <li key={t} className={`flex items-center whitespace-nowrap ${itemClassName}`}>
          <span>{t}</span>
          <span aria-hidden className="mx-8 text-[0.5em] text-bronze md:mx-12">{separator}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`group flex overflow-hidden ${className}`}>
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
