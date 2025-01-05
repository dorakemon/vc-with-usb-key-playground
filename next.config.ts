import type { NextConfig } from "next";

const SUB_DIRECTORY = "/vc-with-usb-key-playground";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? SUB_DIRECTORY : "",
};

export default nextConfig;
