import gatewayConfig from "#/gateway.config.json";
import { mfeStarter } from "mfes";
const { others, gateway } = gatewayConfig.events;
const { mfe, host } = mfeStarter.events;

export const consumes = {
  ...(gateway || {}),
  ...(mfe || {}),
};

export const produces = {
  ...(others || {}),
  ...(host || {}),
};
