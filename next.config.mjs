// ts:check

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: false,
    distDir: "out",
    cleanDistDir: true,
    transpilePackages: ['@lottiefiles/lottie-player'],
    sassOptions: {
        implementation: "sass-embedded",
        api: 'modern',
        silenceDeprecations: ['legacy-js-api'],
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.lottie/,
            type: "asset/source",
        });

        return config;
    },

};

export default nextConfig;
