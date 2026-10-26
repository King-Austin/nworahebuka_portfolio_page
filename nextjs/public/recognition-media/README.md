# Recognition media

Keep public evidence grouped by recognition slug. Retain an untouched original and add an optimized WebP display copy.

Expected paths:

- `ieee-ias-engineering-student-chapter-design-contest-2025/certificate-original.png`
- `ieee-ias-engineering-student-chapter-design-contest-2025/certificate.webp`
- `ieeextreme-19-team-reign/certificate-original.png`
- `ieeextreme-19-team-reign/certificate.webp`
- `sid-circum-robotics-training/certificate-original.png`
- `sid-circum-robotics-training/certificate.webp`

Current originals are stored in the four slug directories above, including `sid-isp-network-engineering-training/certificate-original.png`.

For a new certificate:

1. Add the original image to `nextjs/certs/`.
2. Create a semantic recognition record in `lib/content.ts`.
3. Copy the untouched file to `public/recognition-media/<recognition-slug>/certificate-original.<ext>` and reference it from the record's `evidence` field.
