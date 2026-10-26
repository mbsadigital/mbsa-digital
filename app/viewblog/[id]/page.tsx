import { redirect } from "next/navigation";

export default async function ViewBlogDetailRedirect({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  redirect(`/blog/${id}`);
}
