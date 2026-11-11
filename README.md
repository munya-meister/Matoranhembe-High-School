# Matoranhembe High School Website

Responsive public-facing school website prototype using the school's maroon and white palette. Built as plain HTML/CSS/JavaScript so it can deploy on GitHub Pages, Vercel or Netlify without build tooling.

## Run locally
1. Clone the repository.
2. Open index.html in a browser, or run `python3 -m http.server 8000` and visit http://localhost:8000.
3. Add school-approved photos at `assets/school-uniform-enhanced.jpg` and `assets/school-community-service-enhanced.jpg` (download the enhanced images from the ChatGPT conversation). The layout has fallbacks until images are uploaded.

## Current features
- Responsive landing page, academics, about, staff and milestones sections.
- Enrollment form UI with browser validation. **Preview only; no data is submitted or stored.**
- School fee payment placeholder. **No payment gateway is connected.**
- Parent/staff portal feature descriptions. **Messaging, login and database are not yet implemented.**

## Production implementation plan
- Set up secure backend with authenticated admin, staff and guardian accounts and role-based permissions.
- Create database tables for students, guardians, guardian-student links, staff, enrollment applications, classes, milestones, messages, payment records and audit logs.
- Add server-side validation, private access policies, data retention controls and backups.
- Only display student awards/photos after consent and school verification.
- Integrate a legitimate payment processor after school merchant credentials are available. Verify transactions using server-side webhooks; never mark payments paid from client-side input.
- Add moderated, authenticated guardian/staff messaging with proper privacy boundaries.

Do not enter real student records into this static prototype. Never commit passwords, private keys or student records to this public repository.
