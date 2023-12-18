import { IMinimalId, ISubscription } from "@user-credits/core";

export interface ISubscriptionStats<K extends IMinimalId>
  extends ISubscription<K> {
  remaining: number;
}
