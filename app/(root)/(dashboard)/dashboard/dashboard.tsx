"use client";

import { getAll } from "@/lib/actions/category.action";
import { Link, Spinner } from "@nextui-org/react";
import { FileText } from "lucide-react";
import { useQuery } from "react-query";

export const DashboardComponent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getAll(),
  });

  return (
    <div className="mt-4">
      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <>
          {data &&
            data?.map((item) => (
              <div
                className="border-l-5 border-l-white space-y-1 mb-4 last:mb-0 text-white bg-slate-700/40 px-6 py-3"
                key={item.id}
              >
                <Link
                  href={`/category/${item.name.replace(" ", "-")}`}
                  underline="hover"
                  className="text-3xl text-white font-bold"
                >
                  {item.name}
                </Link>
                <div className="text-default-500 text-small italic">
                  {item.description}
                </div>
                <div className="flex items-center text-sm justify-between gap-1 w-fit">
                  <FileText className="w-4 h-4" />
                  {item.posts.length}
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
