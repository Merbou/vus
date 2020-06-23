export default (items, callback, val) => {
	if (!val || val === '') return items

	return items.filter(v => {
        return (
            callback(v)
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .indexOf(
                val
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
				) > -1
		)
	})
}