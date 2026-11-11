# Matoranhembe High School

School website with a PostgreSQL-backed enrollment API and a protected staff/admin dashboard.

## Setup
1. Install Node.js 20+ and PostgreSQL.
2. Clone this repository and run `npm install`.
3. Copy `.env.example` to `.env`. Set `DATABASE_URL` and a randomly generated `SESSION_SECRET` of at least 32 characters. Never commit `.env`.
4. Run `npm run db:init` to create tables.
5. Create the initial admin using `npm run admin:create -- admin@school.example "School Administrator" "choose-a-unique-strong-password"` (replace example values).
6. Run `npm start`. Open http://localhost:3000 for the public site and http://localhost:3000/admin for administration.
7. Add school-approved images to `public/images/`: `home.jpg` for the homepage hero and `about.jpg` for the About section. Commit and push the files to GitHub; Render will deploy them. See `public/images/README.md` for more image names and guidance.

## How to use
- **Parents:** Visit Admissions, enter guardian and student details, then submit. Save the returned application reference. This requires a working database/server.
- **Staff/admin:** Sign in at /admin. Review applications and update status. Admins can add students, staff and milestones.
- **Staff profiles and milestones:** Newly added records are private by default. Publishing requires an approved review workflow (not yet included). Student names require documented consent.
- **Messaging:** The backend provides authenticated conversation and message endpoints; dashboard shows conversations assigned to the logged-in user. Account provisioning and parent-facing messaging UI remain to be built.
- **Payments:** Disabled until merchant credentials and verified server-side webhook handling are configured. Never collect payment details in this prototype.

## Important limitations
This is an early development version, **not yet approved for real student data**. Before production, add guardian/staff onboarding and identity verification, CSRF tokens, robust authorization and audit review, secure backups, retention/deletion policies, monitoring, consent workflows, deployment hardening and end-to-end tests. Confirm local data-protection obligations with school management. Do not upload actual student records until those controls are in place.

The backend requires PostgreSQL credentials. It does not require payment credentials yet. Static-only hosting such as GitHub Pages cannot run the backend; use a Node-compatible host with PostgreSQL.

## Shared free Render PostgreSQL (isolated schema)
The school must **not** use ADEARN's public schema or tables. In the Render database dashboard, copy the existing database's internal connection URL into the school's web service environment as DATABASE_URL (never commit or share it). Set SESSION_SECRET to a strong unique secret. Run `npm run db:init:isolated` once using the same DATABASE_URL; this creates `matoranhembe_school` schema and its tables without modifying ADEARN tables. The school backend and admin creation script use `search_path=matoranhembe_school,pg_catalog` to isolate their SQL. This is **logical separation only**, not a separate database user or security boundary; a dedicated database with restricted credentials is needed before production. Keep the public demo server active until the migration and authentication have been tested. The shared free instance expires December 6, 2026.
