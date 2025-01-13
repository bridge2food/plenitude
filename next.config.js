const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (cfg, { isServer }) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: 'frontmatter-markdown-loader',
      options: { mode: ['react-component'] },
    })
    // cfg.resolve.fallback = { fs: false }
    return cfg
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.linkedin.com',
      },
    ],
  },
}
