import { CategoryPosts } from "@/app/(root)/(dashboard)/category/[name]/posts";
import { getAuthSession } from "@/app/api/auth/[...nextauth]/route";
import { unslug } from "@/lib/utils";
import { redirect } from "next/navigation";

const CategoryNamePage = async ({
  params,
  searchParams,
}: {
  params: { name: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const name = unslug(params.name, "-");
  const session = await getAuthSession();
  if (!session?.user) redirect("/sign-in");
  if (!searchParams.page)
    redirect(`/category/${name.replace(" ", "-")}?page=1`);

  return (
    <>
      <CategoryPosts
        session={session}
        name={name}
        searchParams={searchParams}
      />
    </>
  );
};

export default CategoryNamePage;
