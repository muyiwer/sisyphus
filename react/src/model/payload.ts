import { State } from "./state";

export class Payload {
  key: keyof State;
  value: any;
  constructor(key: keyof State, value: any) {
    this.key = key;
    this.value = value;
  }
}
