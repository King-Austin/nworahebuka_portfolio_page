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
    expect(publishedProjects).toHaveLength(8);
    expect(publishedProjects.filter((item) => item.featured)).toHaveLength(6);
    expect(publishedProjects.every((item) => item.contribution && item.impact)).toBe(true);
    expect(publishedProjects.some((item) => item.slug === "phishing-defense-saas")).toBe(false);
    expect(publishedProjects.some((item) => item.slug === "nworahsoft-ecommerce")).toBe(false);
    expect(findProject("securecipher")?.title).toBe("SecureCipher");
    expect(findProject("unknown")).toBeUndefined();
  });
  it("backs major case studies with local evidence and custom architecture diagrams", () => {
    for (const slug of ["rmis", "smart-classroom-attendance", "voltrix-smart-energy-meter"]) {
      const project = findProject(slug);
      expect(project?.architecture).toBeTruthy();
      expect(project?.gallery?.length).toBeGreaterThanOrEqual(2);
      expect(project?.gallery?.every((asset) => asset.src.startsWith("/projects/"))).toBe(true);
    }
  });
  it("only exposes verified studio records", () => {
    expect(publishedStudioProjects).toHaveLength(2);
    expect(publishedStudioProjects.every((item) => item.verification === "verified")).toBe(true);
  });
});
