import { registry } from "@mohantalachutla/mfe-utils";
import { consumes, produces } from "./constants";

const dispatchAcknowledge = (data) => {
  registry.dispatch(produces.HOST_MFE_STARTER_ACKNOWLEDGE, data, {
    event: consumes.MFE_STARTER_HOST_DONE,
  });
};

export default {
  dispatchAcknowledge,
};
