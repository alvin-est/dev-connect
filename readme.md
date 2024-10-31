Revised Acceptance Criteria

1. Developer Profile Creation
Core Feature: Focus on allowing junior developers to create a profile with key fields (name, skills, interests, location, portfolio links). Omit secondary details like profile pictures and availability status for simplicity.
Feature Requirement: Fields must be searchable to facilitate job matching.

2. Business Profile Creation
Core Feature: Enable business accounts to create profiles with essentials (company name, description, and industry).
Optional Enhancement: Add a logo field if time permits.

3. Job Posting for Businesses
Core Feature: Allow business users to post job opportunities with essential details: job title, skills required, and project description.
Simplified Detail: Focus on short-term, skill-specific listings, without elaborate project tracking.

4. Resume download for logged in Businesses
Core Feature: Allow businesses to download a resume of a developer they are interested in as long as they are logged in.
Feature Simplification: Skip additional layers like CV uploads or detailed proposals to keep the application process streamlined.

5. Basic Job Matching Feature
Core Feature: Implement a simple matching feature where developers and businesses can filter profiles or jobs by skill keywords.
Initial Scope: Use basic keyword matching without complex algorithms. For example, users can search for jobs or developers with specific skill tags.

6. Messaging Between Developers and Businesses
Core Feature: Provide a basic in-app messaging feature to enable communication.
Simplified Approach: Allow single-thread messaging per match, keeping it simple for both UI and data handling.

7. Authentication with JWT
Core Requirement: Use JWT to secure user profiles and job postings, ensuring users can only interact with their own content and data.
Simplified Implementation: Ensure only basic role-based access (developer vs. business) for viewing and posting content.

8. Responsive Design
Requirement: Build a polished, mobile-friendly UI for accessibility on all devices. This is critical for the application’s usability and will likely use simple CSS or a CSS-in-JS library like styled-components.