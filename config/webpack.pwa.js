/* eslint-disable import/no-extraneous-dependencies */
const Merge = require('webpack-merge');
const ProdConfig = require('./webpack.prod.js');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = Merge(ProdConfig, {
  plugins: [
    new WebpackPwaManifest({
      name: 'Generator Bristol',
      short_name: 'Generator',
      description: '30,611 sq ft of outstanding, contemporary office space. Powering up in 2019',
      orientation: 'portrait',
      display: 'standalone',
      start_url: '/',
      theme_color: '#FF4438',
      background_color: '#ffffff',
      icons: [
        {
          src: path.resolve('icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
});
