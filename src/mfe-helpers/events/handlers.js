import { registry } from '@mohantalachutla/mfe-utils';
import actions from './actions';

const _consumes = {
  MFE_PRODUCT_HOST_READY: ({ name }) => {
    actions.dispatchAcknowledge({ name });
  },
  // MFE_PRODUCT_HOST_DONE: ({ name }) => {
  //   console.info(`HOST::${name} - 3 WAY HANDSHAKE DONE`);
  // },
};

registry.registerAll({
  ..._consumes,
});
