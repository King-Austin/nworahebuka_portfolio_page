import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { resumeData, resumeVersions } from "../lib/resume";

describe("résumé versions", () => {
  it("publishes one recommended primary version and one ATS version", () => {
    expect(resumeVersions).toHaveLength(2);
    expect(resumeVersions.filter((version) => version.recommended)).toHaveLength(1);
    expect(resumeVersions.map((version) => version.id)).toEqual(["primary", "ats"]);
  });

  it("keeps every download backed by a generated PDF", () => {
    for (const version of resumeVersions) {
      const file = path.join(process.cwd(), "public", version.downloadUrl);
      expect(fs.existsSync(file)).toBe(true);
      expect(fs.readFileSync(file).subarray(0, 4).toString()).toBe("%PDF");
    }
  });

  it("provides ordered ATS content from the typed source", () => {
    expect(resumeData.summary.length).toBeGreaterThan(100);
    expect(resumeData.skills.length).toBeGreaterThan(0);
    expect(resumeData.roles.length).toBeGreaterThan(0);
    expect(resumeData.education.degree).toContain("Electronic and Computer Engineering");
  });
});
