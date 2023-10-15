const CyberPage = () => {
  return (
    <div className="grid gap-7 mt-10">
      <div className="w-full !h-[600px]">
        <img src="/assets/cyber.jpg" alt="" className="w-full h-full" />
      </div>
      <div>
        <div className="text-3xl italic pb-1">What is the deep web?</div>
        <p>
          The deep web, also known as the hidden web or invisible web, refers to
          the vast portion of the internet that is not indexed by traditional
          search engines like Google or Bing. It encompasses web pages and
          databases that are not readily accessible through standard web
          browsers or search engine queries. The deep web is distinct from the
          surface web (publicly accessible web content) and the dark web (a
          small, intentionally hidden part of the internet associated with
          anonymity and illegal activities).
        </p>
        <ol className="space-y-2 pt-2">
          <li>
            <span className="font-extrabold text-cyan-500">
              Lack of Indexing
            </span>
            : Deep web content is not indexed by search engines, which means it
            doesn't show up in search results. This is because the content is
            typically behind login screens, uses dynamic databases, or is
            intentionally protected from public access.
          </li>
          <li>
            <span className="font-bold text-cyan-500">Access Control</span>:
            Access to deep web content often requires user authentication, such
            as a login username and password, or access permissions. This is
            common on websites with sensitive or private information, like
            online banking, email services, or subscription-based content.
          </li>
          <li>
            <span className="font-bold text-cyan-500">
              Databases and Dynamic Content
            </span>
            : Much of the deep web consists of dynamically generated content,
            like search results, product listings on e-commerce sites, and
            content stored in databases. This type of content is not accessible
            via direct URLs but requires specific queries or interactions.
          </li>
          <li>
            <span className="font-bold text-cyan-500">
              Intranets and Private Networks
            </span>
            : Intranets used by businesses, universities, and organizations
            often contain deep web content. These networks are not accessible to
            the public, and their content is hidden from search engines.
          </li>
          <li>
            <span className="font-bold text-cyan-500">Size and Diversity</span>:
            The deep web is estimated to be significantly larger than the
            surface web. It contains an enormous amount of data, much of which
            is mundane, unremarkable, or intended for specific audiences.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default CyberPage;
