module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ['@svgr/webpack']
			}
		]
	}
}
