import Image from "next/image";
import Link from "next/link";
import { formatDate, readingTime, type BlogPost } from "@/data";

export default function BlogCard({ post, large = false }: { post: BlogPost; large?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={`group flex flex-col ${large ? "lg:flex-row lg:items-center lg:gap-12" : ""}`}>
      <div className={`relative overflow-hidden rounded-[1.5rem] bg-sand ${large ? "aspect-[16/10] lg:w-[58%] lg:shrink-0" : "aspect-[4/3]"}`}>
        <Image
          src={post.cover}
          alt=""
          fill
          sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-[1200ms] ease-soft group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-linen/90 px-3 py-1 text-[0.7rem] font-semibold text-ink">{post.category}</span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-medium tracking-wide text-mist">
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {readingTime(post)} min read
        </p>
        <h3 className={`mt-2 font-display font-medium text-balance transition-colors group-hover:text-bronze ${large ? "text-3xl md:text-5xl" : "text-2xl"}`}>
          {post.title}
        </h3>
        <p className={`mt-3 leading-relaxed text-stone ${large ? "max-w-lg" : "line-clamp-2 text-sm"}`}>{post.excerpt}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink">
          Read article <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
