import { registry } from "@mohantalachutla/mfe-utils";
import actions from "./actions";
import { produces } from "./constants";
import gatewayConfig from "#/gateway.config.json";

const _consumes = {
  MFE_STARTER_HOST_READY: ({ name }) => {
    actions.dispatchAcknowledge({ name });
  },
  MFE_STARTER_HOST_DONE: ({ name }) => {
    console.info(`HOST::${name} - 3 WAY HANDSHAKE DONE`);
  },
};

const _gateway = {
  [gatewayConfig.events.gateway.GATEWAY_OTHERS_ACKNOWLEDGE]: (data) => {
    console.log("Mfe Starter Acknowledged Host", name);
    registry.dispatch(produces.MFE_STARTER_HOST_DONE, data);
  },
};

registry.registerAll({
  ..._consumes,
  ..._gateway,
});
