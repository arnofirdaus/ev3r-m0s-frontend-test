export const currencyFormat = (num: number) => {
	return 'Rp' + `${num}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}