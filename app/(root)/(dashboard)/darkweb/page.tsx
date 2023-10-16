"use client";

import { darkweb, deepweb, surfaceweb } from "@/constants";
import { Divider } from "@nextui-org/react";

const DarkWebPage = () => {
  return (
    <div className="grid mt-8 gap-5">
      <div className="w-full md:h-[600px] h-[200px]">
        <img src="/assets/darkweb.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="space-y-3">
        <div>
          <div className="text-4xl font-extrabold underline italic pb-1 text-red-500">
            What is the surface web?
          </div>
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
            {surfaceweb.map((item) => (
              <li key={item.title}>
                <span className="font-extrabold text-red-500">
                  {item.title}
                </span>
                : {item.content}
              </li>
            ))}
          </ol>
        </div>
        <Divider className="my-2" />
        <div>
          <div className="text-4xl font-extrabold underline italic pb-1 text-green-500">
            What is the dark web?
          </div>
          <p>
            The dark web is a secretive and hidden part of the internet that is
            not indexed by traditional search engines like Google or Bing. It is
            intentionally concealed and can only be accessed using specialized
            software, configurations, and networks, with the most common method
            being the Tor network. The dark web is distinct from the surface web
            (publicly accessible web content) and the deep web (web pages and
            databases not indexed by search engines but not intentionally
            hidden).
          </p>
          <ol className="space-y-2 pt-2">
            {darkweb.map((item) => (
              <li key={item.title}>
                <span className="font-extrabold text-green-500">
                  {item.title}
                </span>
                : {item.content}
              </li>
            ))}
          </ol>
        </div>
        <Divider className="my-2" />
        <div>
          <div className="text-4xl font-extrabold underline italic pb-1 text-blue-500">
            What is the deep web?
          </div>
          <p>
            The deep web, also known as the hidden web or invisible web, refers
            to the vast portion of the internet that is not indexed by
            traditional search engines like Google or Bing. It encompasses web
            pages and databases that are not readily accessible through standard
            web browsers or search engine queries. The deep web is distinct from
            the surface web (publicly accessible web content) and the dark web
            (a small, intentionally hidden part of the internet associated with
            anonymity and illegal activities).
          </p>
          <ol className="space-y-2 pt-2">
            {deepweb.map((item) => (
              <li key={item.title}>
                <span className="font-extrabold text-blue-500">
                  {item.title}
                </span>
                : {item.content}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DarkWebPage;
