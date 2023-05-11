"use client";

import { getRestaurantBySubdomain } from "@/lib/GetData";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

export default function MainNavBar() {
  const { restaurantId } = useParams();
  const Restaurant = getRestaurantBySubdomain(restaurantId);

  return (
    <div className="sticky top-0 left-0 p-4 text-xl font-bold border-b">
      <Link href={`/${Restaurant?.subdomain}`}>{Restaurant?.name}</Link>
    </div>
  );
}
