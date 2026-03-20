/* eslint-disable import/no-anonymous-default-export */
/** @type {import('next').NextConfig} */

export default {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/works",
          permanent: true,
        },
        {
          source: "/home",
          destination: "/works",
          permanent: true,
        },
      ];
    },
  };
  
