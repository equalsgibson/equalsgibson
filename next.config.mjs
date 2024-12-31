// ts:check

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: "dist",
    cleanDistDir: true,
    transpilePackages: ['@lordicon/react', 'lottie-react']
};

export default nextConfig;
