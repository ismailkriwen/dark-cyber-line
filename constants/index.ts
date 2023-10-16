const textColors = {
  Admin: "text-danger",
  Member: "text-default-foreground",
};

const colors = {
  Admin: "danger",
  Member: "default",
};

export const deepweb = [
  {
    title: "Lack of Indexing",
    content:
      "Deep web content is not indexed by search engines, which means it doesn't show up in search results. This is because the content is typically behind login screens, uses dynamic databases, or is intentionally protected from public access.",
  },
  {
    title: "Access Control",
    content:
      "Access to deep web content often requires user authentication, such as a login username and password, or access permissions. This is common on websites with sensitive or private information, like online banking, email services, or subscription-based content.",
  },
  {
    title: "Databases and Dynamic Content",
    content:
      "Much of the deep web consists of dynamically generated content, like search results, product listings on e-commerce sites, and content stored in databases. This type of content is not accessible via direct URLs but requires specific queries or interactions.",
  },
  {
    title: "Intranets and Private Networks",
    content:
      "Intranets used by businesses, universities, and organizations often contain deep web content. These networks are not accessible to the public, and their content is hidden from search engines.",
  },
  {
    title: "Size and Diversity",
    content:
      "The deep web is estimated to be significantly larger than the surface web. It contains an enormous amount of data, much of which is mundane, unremarkable, or intended for specific audiences.",
  },
];

export const surfaceweb = [
  {
    title: "Publicly Accessible",
    content:
      "Surface web content is accessible without any special access permissions, authentication, or specific software. You can find surface web content through search engines like Google, Bing, or Yahoo.",
  },
  {
    title: "Indexed by Search Engines",
    content:
      "Search engines constantly crawl and index websites and web pages on the surface web. This indexing makes it easy for users to find information on a wide range of topics.",
  },
  {
    title: "Common Websites",
    content:
      "The surface web includes common websites such as news sites, e-commerce platforms, blogs, social media, educational resources, government websites, and much more.",
  },
  {
    title: "Standard Internet Addresses (URLs)",
    content:
      'Surface web websites have standard URLs, which typically start with "http://" or "https://" and are easy to remember.',
  },
  {
    title: "Legitimate and Legal Conten",
    content:
      "The content on the surface web is generally legal and complies with laws and regulations. It is not associated with illicit or hidden activities.",
  },
  {
    title: "Relatively Safe",
    content:
      "Browsing the surface web is relatively safe from a cybersecurity perspective. However, users should still exercise caution and follow best practices for online safety and security.",
  },
];

export const darkweb = [
  {
    title: "Anonymity",
    content:
      "Users on the dark web often access it through the Tor network, which routes internet traffic through a series of volunteer-operated servers, making it difficult to trace the origin of the connection. This anonymity attracts users seeking to maintain privacy.",
  },
  {
    title: "Hidden Websites",
    content:
      'Dark web websites typically have ".onion" domains instead of traditional domain extensions like ".com" or ".org." These sites are intentionally hidden and can only be accessed with the Tor browser.',
  },
  {
    title: "Illicit Activities",
    content:
      "The dark web is known for hosting various illegal and underground activities, including illegal marketplaces for drugs, firearms, stolen data, counterfeit money, hacking services, and more.",
  },
  {
    title: "Whistleblowing and Privacy Advocacy",
    content:
      "Some parts of the dark web are used for whistleblowing, enabling individuals to share sensitive information or communicate securely, as well as for privacy advocacy and circumventing censorship.",
  },
  {
    title: "Legal Content",
    content:
      "While the dark web has a reputation for illegal activities, it also contains legitimate and legal content. For example, individuals and organizations may use the dark web to communicate privately or to access information in environments where internet censorship is enforced.",
  },
  {
    title: "Security Concerns",
    content:
      "Accessing the dark web can be risky, as it is a haven for cybercriminals. Users may encounter scams, malware, and other security threats, so it is essential to take precautions when exploring this part of the internet.",
  },
];

export { textColors, colors };
