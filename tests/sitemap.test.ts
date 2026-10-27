import { describe, expect, it } from "vitest";
import sitemap from "../app/sitemap";

describe("sitemap", () => {
  const urls = sitemap().map((item) => item.url);
  it("uses canonical www URLs", () => expect(urls.every((url) => url.startsWith("https://www.nworahebuka.com.ng"))).toBe(true));
  it("includes the verified studio archive and newly verified credentials", () => { expect(urls.some((url) => url.endsWith("/studio"))).toBe(true); expect(urls.some((url) => url.endsWith("/studio/rmis"))).toBe(true); expect(urls.some((url) => url.includes("sid-isp-network-engineering-training"))).toBe(true); });
  it("includes published work and recognition", () => { expect(urls.some((url) => url.endsWith("/work/securecipher"))).toBe(true); expect(urls.some((url) => url.includes("ieee-ias-engineering"))).toBe(true); });
  it("includes writing and published articles", () => { expect(urls.some((url) => url.endsWith("/blog"))).toBe(true); expect(urls.some((url) => url.includes("security-is-an-architecture-decision"))).toBe(true); });
});
