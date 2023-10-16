import { darkweb } from "@/constants";

const CyberPage = () => {
  return (
    <div className="grid gap-7 mt-10">
      <div className="w-full md:h-[600px] h-[200px]">
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
          {darkweb.map((item) => (
            <li key={item.title}>
              <span className="font-bold text-green-500">{item.title}</span>:{" "}
              {item.content}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CyberPage;
