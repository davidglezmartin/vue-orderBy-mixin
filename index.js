export default {
	methods: {
		orderBy(obj, column, type) {
			let orderBy = type.toUpperCase()
			if (['ASC','DESC'].indexOf(orderBy) == -1) {
				console.error($type, 'Not valid, please use ASC or DESC')
				return
			}
			this['order' + orderBy](obj, column)
		},
		orderASC(obj, column) {
			obj.sort((a,b) => {return (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0)})
		},
		orderDESC(obj, column) {
			obj.sort((a,b) => {return (a[column] > b[column]) ? -1 : ((b[column] > a[column]) ? 1 : 0)})
		}
	}
}