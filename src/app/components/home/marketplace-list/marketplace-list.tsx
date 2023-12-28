import { MarketplaceList } from "@/app/components/marketplace-list";
import { pregenerateMarketplaceData } from "@/api/pregenerateMarketplaceData";

/** For static pregenerated data */
export async function StaticMarketplaceList() {
  let marketplaceData = await pregenerateMarketplaceData();

  return <MarketplaceList items={marketplaceData.items} />;
}
