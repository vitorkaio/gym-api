export default {
	async create_at({ create_at: date }) {
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
