import { describe, expect, it } from "vitest";
import { findProject, publishedProjects, publishedRecognitions, publishedStudioProjects, recognitions } from "../lib/content";

describe("publication filtering", () => {
  it("keeps drafts and unsupported claims out of public records", () => {
    expect(publishedRecognitions).toHaveLength(4);
    expect(publishedRecognitions.some((item) => item.slug === "sid-isp-network-engineering-training")).toBe(true);
    expect(JSON.stringify(publishedRecognitions).toLowerCase()).not.toContain("seventh");
    expect(recognitions.find((item) => item.slug === "sid-isp-network-engineering-training")?.evidence).toHaveLength(1);
  });
  it("only resolves published project slugs", () => {
    expect(publishedProjects.length).toBeGreaterThan(0);
    expect(findProject("securecipher")?.title).toBe("SecureCipher");
    expect(findProject("unknown")).toBeUndefined();
  });
  it("only exposes verified studio records", () => {
    expect(publishedStudioProjects).toHaveLength(2);
    expect(publishedStudioProjects.every((item) => item.verification === "verified")).toBe(true);
  });
});
