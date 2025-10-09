// next.config.ts
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
      output: 'standalone' as 'standalone',
};

export default withNextIntl(nextConfig);