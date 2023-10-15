const DarkWebPage = () => {
  return (
    <div className="grid mt-8 gap-5">
      <div className="w-full !h-[600px]">
        <img src="/assets/darkweb.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="space-y-2">
        <div>
          <div className="text-3xl italic pb-1">What is the surface web?</div>
          <p>
            The surface web, also known as the visible web or the clear web,
            refers to the portion of the World Wide Web that is indexed by
            search engines and readily accessible to the general public. It
            includes websites and web pages that are openly available and can be
            accessed through standard web browsers. This is the part of the
            internet that most people are familiar with and use on a daily
            basis.
          </p>
          <ol className="space-y-2 pt-2">
            <li>
              <span className="font-extrabold text-cyan-500">
                Publicly Accessible
              </span>
              : Surface web content is accessible without any special access
              permissions, authentication, or specific software. You can find
              surface web content through search engines like Google, Bing, or
              Yahoo.
            </li>
            <li>
              <span className="font-bold text-cyan-500">
                Indexed by Search Engines
              </span>
              : Search engines constantly crawl and index websites and web pages
              on the surface web. This indexing makes it easy for users to find
              information on a wide range of topics.
            </li>
            <li>
              <span className="font-bold text-cyan-500">Common Websites</span>:
              The surface web includes common websites such as news sites,
              e-commerce platforms, blogs, social media, educational resources,
              government websites, and much more.
            </li>
            <li>
              <span className="font-bold text-cyan-500">
                Standard Internet Addresses (URLs)
              </span>
              : Surface web websites have standard URLs, which typically start
              with "http://" or "https://" and are easy to remember.
            </li>
            <li>
              <span className="font-bold text-cyan-500">
                Legitimate and Legal Conten
              </span>
              : The content on the surface web is generally legal and complies
              with laws and regulations. It is not associated with illicit or
              hidden activities.
            </li>
            <li>
              <span className="font-bold text-cyan-500">Relatively Safe</span>:
              Browsing the surface web is relatively safe from a cybersecurity
              perspective. However, users should still exercise caution and
              follow best practices for online safety and security.
            </li>
          </ol>
        </div>
      </div>
      <div>
        <div className="text-3xl italic pb-1">What is the dark web?</div>
        <p>
          The dark web is a secretive and hidden part of the internet that is
          not indexed by traditional search engines like Google or Bing. It is
          intentionally concealed and can only be accessed using specialized
          software, configurations, and networks, with the most common method
          being the Tor network. The dark web is distinct from the surface web
          (publicly accessible web content) and the deep web (web pages and
          databases not indexed by search engines but not intentionally hidden).
        </p>
        <ol className="space-y-2 pt-2">
          <li>
            <span className="font-extrabold text-cyan-500">Anonymity</span>:
            Users on the dark web often access it through the Tor network, which
            routes internet traffic through a series of volunteer-operated
            servers, making it difficult to trace the origin of the connection.
            This anonymity attracts users seeking to maintain privacy.
          </li>
          <li>
            <span className="font-bold text-cyan-500">Hidden Websites</span>:
            Dark web websites typically have ".onion" domains instead of
            traditional domain extensions like ".com" or ".org." These sites are
            intentionally hidden and can only be accessed with the Tor browser.
          </li>
          <li>
            <span className="font-bold text-cyan-500">Illicit Activities</span>:
            The dark web is known for hosting various illegal and underground
            activities, including illegal marketplaces for drugs, firearms,
            stolen data, counterfeit money, hacking services, and more.
          </li>
          <li>
            <span className="font-bold text-cyan-500">
              Whistleblowing and Privacy Advocacy
            </span>
            : Some parts of the dark web are used for whistleblowing, enabling
            individuals to share sensitive information or communicate securely,
            as well as for privacy advocacy and circumventing censorship.
          </li>
          <li>
            <span className="font-bold text-cyan-500">Legal Content</span>:
            While the dark web has a reputation for illegal activities, it also
            contains legitimate and legal content. For example, individuals and
            organizations may use the dark web to communicate privately or to
            access information in environments where internet censorship is
            enforced.
          </li>
          <li>
            <span className="font-bold text-cyan-500">Security Concerns</span>:
            Accessing the dark web can be risky, as it is a haven for
            cybercriminals. Users may encounter scams, malware, and other
            security threats, so it is essential to take precautions when
            exploring this part of the internet.
          </li>
        </ol>
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

export default DarkWebPage;
