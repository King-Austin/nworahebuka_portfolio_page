import { describe, expect, it } from "vitest";
import { buildOutreachMailto } from "../lib/contact";
import { site } from "../lib/site";

describe("outreach and identity", () => {
  it("prepares a direct, encoded email draft", () => {
    const href = buildOutreachMailto({ name: "Ada Lovelace", email: "ada@example.com", message: "I would like to discuss a dependable platform." });
    expect(href).toMatch(/^mailto:nworahebuka\.a@gmail\.com\?/);
    expect(decodeURIComponent(href)).toContain("Engineering opportunity or enquiry from Ada Lovelace");
    expect(decodeURIComponent(href)).toContain("Reply to: ada@example.com");
  });

  it("publishes substantiated identity variants", () => {
    expect(site.email).toBe("nworahebuka.a@gmail.com");
    expect(site.alternateNames).toContain("Nworah Ebuka");
    expect(site.alternateNames).toContain("King Austin");
  });
});
