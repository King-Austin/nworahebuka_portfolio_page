import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Nworah Ebuka Augustus — Backend Engineer", short_name: "Nworah Ebuka", description: "Backend engineer open to developer roles, building secure APIs and dependable product infrastructure with Python, Django and Node.js.", start_url: "/", display: "standalone", background_color: "#f4f1e9", theme_color: "#ef5d36", icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }] };
}
