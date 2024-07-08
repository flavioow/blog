module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.module.rules.push({
				test: /\.module\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]__[local]__[hash:base64:5]',
							},
						},
					},
					'postcss-loader',
				],
			})
		}
		return config
	},
}