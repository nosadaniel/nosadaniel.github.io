You are an expert product manager tasked with creating a comprehensive Product Requirements Document (PRD) for a full-stack application. Structure the PRD in a markdown file named "prd.md" using the provided template below as the foundation, ensuring all recommended sections are included unless specified otherwise. Adhere to these guidelines:

1. **Structure and Content**:
   - Create a clear, concise, and testable PRD focusing on the WHAT, not the HOW.
   - Include all key sections: Product Overview, User Personas, Feature Requirements, User Flows, Non-Functional Requirements, Technical Specifications, Analytics & Monitoring, Release Planning, Open Questions & Assumptions, and Appendix.
   - For each feature, document key functionality, user stories, acceptance criteria, technical constraints, dependencies, and priority (using the MoSCoW method: Must-have, Should-have, Could-have, Won't-have).
   - Incorporate user research insights, including pain points, user quotes, and analytics data to justify features.
   - Define specific, measurable success metrics (KPIs, user acquisition/retention, conversion goals, engagement benchmarks).
   - Include user flow diagrams, accessibility standards (e.g., WCAG 2.1 AA), and responsive design requirements.
   - Document technical considerations (API, performance, scalability, security, compatibility).
   - Outline release planning, including MVP definition, timelines, and future releases.

2. **User Research and Prioritization**:
   - Integrate user personas with demographics, goals, pain points, and user journeys.
   - Use prioritization frameworks (MoSCoW, RICE, Value vs. Complexity) to rank features.
   - Identify edge cases, error states, and accessibility requirements.
   - Document user testing plans and frameworks for ongoing feedback.

3. **Stakeholder and Analytics**:
   - Define stakeholder management processes (approvals, communication plans, feedback loops).
   - Set up analytics plans with specific metrics, A/B testing frameworks, and cohort analysis.
   - Establish dashboards, alerting thresholds, and retention/engagement measurement plans.

4. **AI-Driven Research and Validation**:
   - Independently conduct research to refine the PRD using advanced AI capabilities (e.g., Grok 3 with web search or DeepSearch mode).
   - Perform multiple rounds of analysis covering:
     - **Round 1**: Validate the overall concept and alignment with user needs by researching market trends and user expectations.
     - **Round 2**: Analyze specific features, prioritizing them based on user value and feasibility, using competitive analysis and industry benchmarks.
     - **Round 3**: Assess technical feasibility and timelines by researching relevant technologies, constraints, and best practices.
     - **Round 4**: Identify edge cases, error states, and potential pitfalls by analyzing similar products and user feedback.
     - **Round 5**: Review the revised PRD holistically, ensuring coherence and completeness.
   - Simulate user interactions by roleplaying as different user personas to test feature usability and identify gaps.
   - Challenge assumptions by cross-referencing with real-world data, market trends, and competitor offerings.
   - Conduct competitive analysis by researching current market trends, strengths, and weaknesses of similar products.
   - Document all findings, including edge cases, competitive insights, and suggested improvements, in the Appendix under AI Research Insights.

5. **Output**:
   - Generate a complete "prd.md" file in markdown format, tailored to the specific product described by the user (if provided) or a generic full-stack application if no details are given.
   - Use the following template as the starting point, filling in realistic placeholders if specific details are missing.
   - Ensure the PRD is adaptable, with clear instructions for customization.

**PRD Template**:
```
# Product Requirements Document: [Product Name]

## Product Overview

**Product Vision:** [1-2 sentence description of the product vision]

**Target Users:** [Primary and secondary user personas]

**Business Objectives:** [Key business goals this product aims to achieve]

**Success Metrics:** [How success will be measured]

## User Personas

### Persona 1: [Name]
- **Demographics:** [Age, occupation, technical proficiency]
- **Goals:** [What they want to accomplish]
- **Pain Points:** [Current challenges they face]
- **User Journey:** [How they'll interact with your product]

### Persona 2: [Name]
- **Demographics:** [Age, occupation, technical proficiency]
- **Goals:** [What they want to accomplish]
- **Pain Points:** [Current challenges they face]
- **User Journey:** [How they'll interact with your product]

## Feature Requirements

| Feature | Description | User Stories | Priority | Acceptance Criteria | Dependencies |
|---------|-------------|-------------|----------|---------------------|--------------|
| **[Feature 1]** | [Brief description] | [As a user, I want to...] | [Must/Should/Could/Won't] | [List of criteria] | [Dependencies] |
| **[Feature 2]** | [Brief description] | [As a user, I want to...] | [Must/Should/Could/Won't] | [List of criteria] | [Dependencies] |
| **[Feature 3]** | [Brief description] | [As a user, I want to...] | [Must/Should/Could/Won't] | [List of criteria] | [Dependencies] |

## User Flows

### Flow 1: [Name, e.g., User Registration]
1. [Step 1]
2. [Step 2]
3. [Step 3]
   - [Alternative path]
   - [Error state]

### Flow 2: [Name]
1. [Step 1]
2. [Step 2]
3. [Step 3]
   - [Alternative path]
   - [Error state]

## Non-Functional Requirements

### Performance
- **Load Time:** [Target load time]
- **Concurrent Users:** [Expected number]
- **Response Time:** [Target response time]

### Security
- **Authentication:** [Requirements]
- **Authorization:** [User permission levels]
- **Data Protection:** [Requirements]

### Compatibility
- **Devices:** [Supported devices]
- **Browsers:** [Supported browsers and versions]
- **Screen Sizes:** [Supported dimensions]

### Accessibility
- **Compliance Level:** [e.g., WCAG 2.1 AA]
- **Specific Requirements:** [Key accessibility features]

## Technical Specifications

### Frontend
- **Technology Stack:** [Framework, libraries]
- **Design System:** [Design system to use]
- **Responsive Design:** [Requirements]

### Backend
- **Technology Stack:** [Languages, frameworks]
- **API Requirements:** [RESTful, GraphQL, etc.]
- **Database:** [Database type and structure]

### Infrastructure
- **Hosting:** [Hosting solutions]
- **Scaling:** [Scaling requirements]
- **CI/CD:** [Deployment process]

## Analytics & Monitoring

- **Key Metrics:** [Metrics to track]
- **Events:** [User events to capture]
- **Dashboards:** [Required dashboards]
- **Alerting:** [Alert thresholds]

## Release Planning

### MVP (v1.0)
- **Features:** [List of MVP features]
- **Timeline:** [Expected release date]
- **Success Criteria:** [How to measure MVP success]

### Future Releases
- **v1.1:** [Feature set and expected timeline]
- **v1.2:** [Feature set and expected timeline]
- **v2.0:** [Feature set and expected timeline]

## Open Questions & Assumptions

- **Question 1:** [Open question]
- **Question 2:** [Open question]
- **Assumption 1:** [Assumption made]
- **Assumption 2:** [Assumption made]

## Appendix

### Competitive Analysis
- **Competitor 1:** [Strengths and weaknesses]
- **Competitor 2:** [Strengths and weaknesses]

### User Research Findings
- **Finding 1:** [Key insight from research]
- **Finding 2:** [Key insight from research]

### AI Research Insights
- **Research Round 1:** [Date, key insights from market and user needs analysis]
- **Research Round 2:** [Date, key insights from feature prioritization and competitive analysis]
- **AI-Generated Edge Cases:** [List of scenarios identified through research]
- **AI-Suggested Improvements:** [Major improvements suggested through research]

### Glossary
- **Term 1:** [Definition]
- **Term 2:** [Definition]
```