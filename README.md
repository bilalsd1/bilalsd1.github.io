# Syed Bilal Ali — professional profile application

Single-page application (vanilla JS, no build step, no dependencies). Open `index.html` through any static server:

    python -m http.server 8765      # then open http://127.0.0.1:8765/

## Data (single source of truth)
| File | Content |
|---|---|
| `data/profile.js` | identity, education, CV versions, skill chains |
| `data/experience.js` | career records (responsibilities are tagged; tags drive mode highlighting and CV versions) |
| `data/projects.js` | project records |
| `data/certificates.js` | credentials, with `type` (course completion, learning path, official, expired) |
| `data/tech.js` | technology database: category, evidence level, capabilities, relations |

Relations (technology -> roles, projects, certificates) are computed from the text of the records, so updating a record updates every view, the search index, the technology explorer and all CV versions.

## Modes
`HVAC / Engineering` and `Advanced IT / Software` share the same data. The mode changes navigation order, highlighted responsibilities, featured projects and the default CV version.

## Rules
- Nothing is added without a supporting document. Unproven items are not displayed. "AI" is not claimed anywhere because no document supports it.
- Never publish CNIC, passport, home address, phone or date of birth. The CV workspace generates a clean CV.
- Owner-only files (`review.html`, `data/review-data.js`, `backend/`) are git-ignored and never published.

## Adding projects (PMI records, CV entries, technical documents)
1. Add one object to `data/projects.js`. Copy an existing record; the header comment of that file describes every field.
2. Keep the three layers separate: `sources[]` holds the **original wording** (verbatim), the other fields hold the cleaned, public wording.
3. `careerPosition` (your job title at the time) and `projectRole` (your role on the project: Project Manager, Supervisor...) are different facts. Fill only what the source documents.
4. PMI phase hours go in `pm: { initiating, planning, executing, monitoring, closing }` (hours of documented activity, not duration).
5. **Never** put contact emails, phone numbers or addresses in a project record. Contact details found in PMI forms stay in your private files.
6. Run `node tools/check-projects.js`. It validates the taxonomy and fields, blocks private contact data and lists possible duplicates. It never merges or deletes anything: confirm a duplicate yourself, keep one primary record and add the other as a second `sources[]` entry.

Example (illustrative values only):

    { id: "example-network", status: "delivered", verification: "verified", title: "…", start: "2016", end: "2016",
      company: "Organisation name", location: "City, Country", careerPosition: "IT Manager", projectRole: "Project Manager",
      type: "Network Deployment", cat: "Networking", industry: ["Hospitality"], oneLine: "…",
      objective: ["…"], deliverables: ["…"], pm: { initiating: 24, planning: 48, executing: 56, monitoring: 24, closing: 12 },
      outcome: ["…"], tech: ["…"], skills: ["…"], experience: ["aqmar"], certifications: [],
      sources: [{ type: "PMI record", ref: "…", original: "verbatim source text" }] }

The registry, filters (including organization, project role, location and source), statistics, timeline view, organization and technology profiles, related-project links and the CV all update from this one file.

## PMI project records
The 49 PMI project records were imported with `tools/private/` (git-ignored; reads your PMI application PDF from your own computer):
`parse_pmi.py` (extracts only title, organization name, city, country, role, dates, hours and description; never contacts) -> `build_pmi.py` + `overrides.py` (hand-normalised public wording; original text preserved in each record's `sources[].original`) -> `merge_projects.js`.
Re-running it regenerates those records, so make hand edits to wording in `overrides.py` or in `data/projects.js`, not both.
