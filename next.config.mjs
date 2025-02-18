/* eslint-disable import/no-anonymous-default-export */
/** @type {import('next').NextConfig} */

export default {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/home",
          permanent: true,
        },
      ];
    },
  };
  
