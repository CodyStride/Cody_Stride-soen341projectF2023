import { AppLayout } from "@/components/AppLayout";
import db from "@/lib/dbServer";
import { cookies } from "next/headers";

export default async function FeaturePage({
  children,
}: {
  children: JSX.Element;
}) {
  const cookieStore = cookies();
  const user = await db.getUser(cookieStore);

  // Get user initials
  var userInit: string | undefined;
  if (user) {
    const words: string[] = user.name.split(" ");

    // Get the first letter of each word and concatenate them
    words[0].charAt(0).toUpperCase();
    words[words.length - 1].charAt(0).toUpperCase();
    userInit = words
      .map((word: string) => word.charAt(0).toUpperCase())
      .join("");
  }

  return <AppLayout children={children} userInit={userInit} user={user} />;
}
