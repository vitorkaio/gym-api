export default {
	async create_data({ create_data: date }) {
		console.log(date)
		return date.toLocaleString()
	}
	// async perfis(user) {
	// 	// implementar (Assunto novo!)
	// },
	// async name() {
	// 	return 'www'
	// }
	/* async token({ token }) {
		return token === undefined ? 'Off' : token
	} */
}
