module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.geojson$/,
      use: ["json-loader"],
    });
    return config;
  },
};
