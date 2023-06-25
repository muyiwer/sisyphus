import { Klines } from "./apiResponse";

export class State {
  email?: string;
  profileSrc?: string;
  activeTime?: {
    oneHr?: boolean;
    twoHr?: boolean;
    fourHr?: boolean;
    oneDay?: boolean;
    oneWeek?: boolean;
    oneMonth?: boolean;
    oneYear?: boolean;
  };
  tab?: Tab;
  apiResponse?: Klines
}
export class Tab {
  trade?: boolean;
  chart?: boolean;
  orderBook?: boolean;
}
