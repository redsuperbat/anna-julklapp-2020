import { getXyzTransitionData, mergeData } from '../xyzUtils'

export default {
	name: 'XyzTransitionGroup',
	functional: true,
	props: {
		appear: {
			type: Boolean,
		},
		duration: {
			type: [Number, String, Object],
		},
		tag: {
			type: String,
			default: 'div',
		},
	},
	setup( props,{children, attrs}) {
		const data = getXyzTransitionData({
			...context.data,
			attrs: {
				...attrs,
				...props,
			},
		})

		context.children.forEach((child, index) => {
			child.data = mergeData(
				{
					staticStyle: {
						'--xyz-index': index,
						'--xyz-index-rev': context.children.length - index - 1,
					},
				},
				child.data
			)
		})

		return () =>  h('transition-group', data, context.children)
	},
}