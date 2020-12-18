import { h } from "vue";
import { getXyzTransitionData, mergeData } from "../xyzUtils";

const XyzTransition = (props, {slots, attrs}) => {

}

export default {
  name: "XyzTransition",
  functional: true,
  props: {
    appear: {
      type: Boolean,
    },
    duration: {
      type: [Number, String, Object],
    },
  },
  setup(props, {slots, attrs}){
    const data = getXyzTransitionData({
      ...context.data,
      attrs: {
        ...attrs,
        ...context.props,
      },
    });

    context.children.forEach((child) => {
      child.data = mergeData(
        {
          attrs: {
            xyz: data.attrs.xyz,
          },
          directives: data.directives,
          staticStyle: data.staticStyle,
          style: data.style,
        },
        child.data
      );
    });

    return () => h("transition", data, context.children);
  },
};
