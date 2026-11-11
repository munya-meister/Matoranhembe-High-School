# Matoranhembe High School

School website with a PostgreSQL-backed enrollment API and a protected staff/admin dashboard.

## Setup
1. Install Node.js 20+ and PostgreSQL.
2. Clone this repository and run `npm install`.
3. Copy `.env.example` to `.env`. Set `DATABASE_URL` and a randomly generated `SESSION_SECRET` of at least 32 characters. Never commit `.env`.
4. Run `npm run db:init` to create tables.
5. Create the initial admin using `npm run admin:create -- admin@school.example "School Administrator" "choose-a-unique-strong-password"` (replace example values).
6. Run `npm start`. Open http://localhost:3000 for the public site and http://localhost:3000/admin for administration.
7. Upload the school-approved enhanced images to `assets/school-uniform-enhanced.jpg` and `assets/school-community-service-enhanced.jpg`.

## How to use
- **Parents:** Visit Admissions, enter guardian and student details, then submit. Save the returned application reference. This requires a working database/server.
- **Staff/admin:** Sign in at /admin. Review applications and update status. Admins can add students, staff and milestones.
- **Staff profiles and milestones:** Newly added records are private by default. Publishing requires an approved review workflow (not yet included). Student names require documented consent.
- **Messaging:** The backend provides authenticated conversation and message endpoints; dashboard shows conversations assigned to the logged-in user. Account provisioning and parent-facing messaging UI remain to be built.
- **Payments:** Disabled until merchant credentials and verified server-side webhook handling are configured. Never collect payment details in this prototype.

## Important limitations
This is an early development version, **not yet approved for real student data**. Before production, add guardian/staff onboarding and identity verification, CSRF tokens, robust authorization and audit review, secure backups, retention/deletion policies, monitoring, consent workflows, deployment hardening and end-to-end tests. Confirm local data-protection obligations with school management. Do not upload actual student records until those controls are in place.

The backend requires PostgreSQL credentials. It does not require payment credentials yet. Static-only hosting such as GitHub Pages cannot run the backend; use a Node-compatible host with PostgreSQL.
