import { xyz } from "../xyzUtils";

function updateDirective(el, binding) {
  const xyzAttr = xyz(el.xyzStatic?.split(" "), binding.value);
  el.setAttribute("xyz", xyzAttr);
}

export default {
  bforeMounted(el, binding) {
    el.xyzStatic = el.getAttribute("xyz");
    updateDirective(el, binding);
  },
  updated(el, binding) {
    updateDirective(el, binding);
  },
};
