import { redirect } from "next/navigation";

export default function ZonesPage() {
  redirect("/map?mode=routes");
}
