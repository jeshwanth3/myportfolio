
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    // For optimal performance, ensure remotePatterns are correctly configured.
    // If specific hostnames are known and limited, list them.
    // Using unoptimized: true can be a fallback if optimization services are an issue,
    // but it's generally better to configure remotePatterns.
    // unoptimized: true, // Consider this if optimization is problematic and CDN is not used.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pragati.ac.in',
        port: '',
        pathname: '/**',
      },
      // Add any other image hostnames used in the application
    ],
  },
};

module.exports = nextConfig;
