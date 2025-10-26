import type { NextConfig } from 'next';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'app/components'),
      '@lib': path.resolve(__dirname, 'app/lib'),
      '@styles': path.resolve(__dirname, 'app/styles'),
    };
    return config;
  },
};

export default nextConfig;
