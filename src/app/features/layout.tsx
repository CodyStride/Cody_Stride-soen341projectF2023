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

  return <AppLayout children={children} user={user} />;
}
