import { registry } from "@mohantalachutla/mfe-utils";
import actions from "./actions";
import { produces } from "./constants";

const _consumes = {
  MFE_STARTER_HOST_READY: ({ name }) => {
    actions.dispatchAcknowledge({ name });
  },
  MFE_STARTER_HOST_DONE: ({ name }) => {
    console.info(`HOST::${name} - 3 WAY HANDSHAKE DONE`);
  },
};

registry.registerAll({
  ..._consumes,
});
