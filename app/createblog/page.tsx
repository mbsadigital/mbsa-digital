import { redirect } from "next/navigation";

export default function CreateBlogRedirect() {
  redirect("/blog/create");
}
