import Link from 'next/link';

function HomepageLink({ title, slug }) {
  return (
    <div className="container">
      <Link href={`/post/${slug}`} as={`/post/${slug}`}>
        <div className="text">
          <h2>{title}</h2>
        </div>
      </Link>
    </div>
  );
}

export default HomepageLink;
