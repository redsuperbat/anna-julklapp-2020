import XyzTransition from "./components/XyzTransition";
import XyzTransitionGroup from "./components/XyzTransitionGroup";

import XyzContext from "./directives";

// Create module definition for Vue.use()
const VueAnimXyz = {
  install(Vue) {
    Vue.component("XyzTransition", XyzTransition);
    Vue.component("XyzTransitionGroup", XyzTransitionGroup);

    Vue.directive("xyz", XyzContext);
  },
};

export default VueAnimXyz;
