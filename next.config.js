const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');

const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
    ? require('next/constants')
    : require('next-server/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    const withCSS = require('@zeit/next-css');
    const withSCSS = require('@zeit/next-sass');

    return withCSS(
      withSCSS({
        webpack(config, options) {
          config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000
              }
            }
          });
          return config;
        },
        env: {
          CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
          CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
        }
      })
    );
  }

  const withCSS = require('@zeit/next-css');
  const withSCSS = require('@zeit/next-sass');

  return withCSS(
    withSCSS({
      webpack(config, options) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        });
        return config;
      },
      env: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    })
  );
};
