/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/vendor-data', // The endpoint you will use in your app
        destination: 'http://is1:8000/sap/opu/odata/sap/ZVENDOR_DETAILS_SRV_01/VENDOR_DETAILSET?$filter=IndKey%20eq%20%27ZISU%27', // The actual endpoint on the SAP server
      },
    ];
  },
};

module.exports = nextConfig;
