export const pmbok6Data = {
    "developProjectCharter": {
        title: "1.1 Develop Project Charter",
        inputs: ["Business documents (Business case, Benefits management plan)", "Agreements", "Enterprise Environmental Factors (EEFs)", "Organizational Process Assets (OPAs)"],
        tools: ["Expert judgment", "Data gathering (Brainstorming, Focus groups, Interviews)", "Interpersonal and team skills (Conflict management, Facilitation, Meeting management)", "Meetings"],
        outputs: ["Project charter", "Assumption log"]
    },
    "developProjectManagementPlan": {
        title: "1.2 Develop Project Management Plan",
        inputs: ["Project charter", "Outputs from other processes", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Brainstorming, Checklists, Focus groups, Interviews)", "Interpersonal and team skills (Conflict management, Facilitation, Meeting management)", "Meetings", "Change control tools", "PMIS"],
        outputs: ["Project management plan"]
    },
    "directAndManageProjectWork": {
        title: "1.3 Direct and Manage Project Work",
        inputs: ["Project management plan", "Project documents (Change log, Lessons learned register, Milestone list, etc.)", "Approved change requests", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Project Management Information System (PMIS)", "Meetings"],
        outputs: ["Deliverables", "Work performance data", "Issue log", "Change requests", "Project management plan updates", "Project documents updates", "OPA updates"]
    },
    "manageProjectKnowledge": {
        title: "1.4 Manage Project Knowledge",
        inputs: ["Project management plan", "Project documents (Lessons learned register, Resource breakdown structure, etc.)", "Deliverables", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Knowledge management", "Information management", "Interpersonal and team skills (Active listening, Facilitation, Leadership, etc.)"],
        outputs: ["Lessons learned register", "Project management plan updates", "OPA updates"]
    },
    "monitorAndControlProjectWork": {
        title: "1.5 Monitor and Control Project Work",
        inputs: ["Project management plan", "Project documents (Assumption log, Cost forecasts, Issue log, Risk register, etc.)", "Work performance information", "Agreements", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data analysis (Alternatives analysis, Cost-benefit analysis, Trend analysis, etc.)", "Decision making", "Meetings"],
        outputs: ["Work performance reports", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "performIntegratedChangeControl": {
        title: "1.6 Perform Integrated Change Control",
        inputs: ["Project management plan", "Project documents (Change log, Risk report, etc.)", "Work performance reports", "Change requests", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Change control tools", "Data analysis (Alternatives analysis, Cost-benefit analysis)", "Decision making (Voting, Autocratic, Multicriteria)", "Meetings"],
        outputs: ["Approved change requests", "Project management plan updates", "Project documents updates (Change log)"]
    },
    "closeProjectOrPhase": {
        title: "1.7 Close Project or Phase",
        inputs: ["Project charter", "Project management plan", "Project documents (Assumption log, Lessons learned register, etc.)", "Accepted deliverables", "Business documents", "Agreements", "Procurement documentation", "OPAs"],
        tools: ["Expert judgment", "Data analysis (Regression analysis, Trend analysis)", "Meetings"],
        outputs: ["Final product, service, or result transition", "Final report", "Project documents updates (Lessons learned register)", "OPA updates"]
    },
    "planScopeManagement": {
        title: "2.1 Plan Scope Management",
        inputs: ["Project charter", "Project management plan", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data analysis (Alternatives analysis)", "Meetings"],
        outputs: ["Scope management plan", "Requirements management plan"]
    },
    "collectRequirements": {
        title: "2.2 Collect Requirements",
        inputs: ["Project charter", "Project management plan", "Project documents (Assumption log, Stakeholder register, etc.)", "Business documents (Business case)", "Agreements", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Brainstorming, Interviews, Focus groups, Questionnaires, Benchmarking)", "Data analysis (Document analysis)", "Decision making (Voting, Multicriteria)", "Data representation (Affinity diagrams, Mind mapping)", "Interpersonal and team skills (Nominal group technique, Observation, Facilitation)", "Context diagram", "Prototypes"],
        outputs: ["Requirements documentation", "Requirements traceability matrix"]
    },
    "defineScope": {
        title: "2.3 Define Scope",
        inputs: ["Project charter", "Project management plan (Scope management plan)", "Project documents (Requirements documentation, Risk register, etc.)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data analysis (Alternatives analysis)", "Decision making (Multicriteria)", "Interpersonal and team skills (Facilitation)", "Product analysis"],
        outputs: ["Project scope statement", "Project documents updates"]
    },
    "createWBS": {
        title: "2.4 Create WBS",
        inputs: ["Project management plan (Scope management plan)", "Project documents (Project scope statement, Requirements documentation)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Decomposition", "Meetings"],
        outputs: ["Scope baseline", "Project documents updates"]
    },
    "validateScope": {
        title: "2.5 Validate Scope",
        inputs: ["Project management plan", "Project documents (Lessons learned register, Quality reports, Requirements documentation, etc.)", "Verified deliverables", "Work performance data"],
        tools: ["Inspection", "Decision making (Voting)"],
        outputs: ["Accepted deliverables", "Work performance information", "Change requests", "Project documents updates"]
    },
    "controlScope": {
        title: "2.6 Control Scope",
        inputs: ["Project management plan (Scope management plan, Scope baseline)", "Project documents (Lessons learned register, Requirements documentation, etc.)", "Work performance data", "OPAs"],
        tools: ["Data analysis (Variance analysis, Trend analysis)"],
        outputs: ["Work performance information", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "planScheduleManagement": {
        title: "3.1 Plan Schedule Management",
        inputs: ["Project charter", "Project management plan", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data analysis (Alternatives analysis)", "Meetings"],
        outputs: ["Schedule management plan"]
    },
    "defineActivities": {
        title: "3.2 Define Activities",
        inputs: ["Project management plan (Schedule management plan, Scope baseline)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Decomposition", "Rolling wave planning", "Meetings"],
        outputs: ["Activity list", "Activity attributes", "Milestone list", "Change requests", "Project management plan updates"]
    },
    "sequenceActivities": {
        title: "3.3 Sequence Activities",
        inputs: ["Project management plan (Schedule management plan)", "Project documents (Activity list, Activity attributes, Assumption log, Milestone list)", "EEFs", "OPAs"],
        tools: ["Precedence Diagramming Method (PDM)", "Dependency determination and integration", "Leads and lags", "PMIS"],
        outputs: ["Project schedule network diagrams", "Project documents updates"]
    },
    "estimateActivityDurations": {
        title: "3.4 Estimate Activity Durations",
        inputs: ["Project management plan (Schedule management plan)", "Project documents (Activity list, Activity attributes, Assumption log, Risk register, etc.)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Analogous estimating", "Parametric estimating", "Three-point estimating", "Bottom-up estimating", "Data analysis (Alternatives analysis, Reserve analysis)", "Decision making (Voting)", "Meetings"],
        outputs: ["Duration estimates", "Basis of estimates", "Project documents updates"]
    },
    "developSchedule": {
        title: "3.5 Develop Schedule",
        inputs: ["Project management plan", "Project documents (Activity list, Assumption log, Duration estimates, Risk register, etc.)", "Agreements", "EEFs", "OPAs"],
        tools: ["Schedule network analysis", "Critical path method", "Resource optimization", "Data analysis (What-if scenario, Simulation)", "Leads and lags", "Schedule compression", "PMIS", "Agile release planning"],
        outputs: ["Schedule baseline", "Project schedule", "Schedule data", "Project calendars", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "controlSchedule": {
        title: "3.6 Control Schedule",
        inputs: ["Project management plan (Schedule management plan, Schedule baseline)", "Project documents (Lessons learned register, Project schedule, Resource calendars, etc.)", "Work performance data", "OPAs"],
        tools: ["Data analysis (Earned value analysis, Iteration burndown chart, Performance reviews, Trend analysis, Variance analysis, What-if scenario)", "Critical path method", "PMIS", "Resource optimization", "Leads and lags", "Schedule compression"],
        outputs: ["Work performance information", "Schedule forecasts", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "planCostManagement": {
        title: "4.1 Plan Cost Management",
        inputs: ["Project charter", "Project management plan", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data analysis (Alternatives analysis)", "Meetings"],
        outputs: ["Cost management plan"]
    },
    "estimateCosts": {
        title: "4.2 Estimate Costs",
        inputs: ["Project management plan (Cost management plan, Quality management plan, Scope baseline)", "Project documents (Lessons learned register, Project schedule, Risk register, etc.)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Analogous estimating", "Parametric estimating", "Bottom-up estimating", "Three-point estimating", "Data analysis (Alternatives analysis, Reserve analysis, Cost of quality)", "PMIS", "Decision making (Voting)"],
        outputs: ["Cost estimates", "Basis of estimates", "Project documents updates"]
    },
    "determineBudget": {
        title: "4.3 Determine Budget",
        inputs: ["Project management plan (Cost management plan, Resource management plan, Scope baseline)", "Project documents (Basis of estimates, Cost estimates, Project schedule, Risk register)", "Business documents (Business case)", "Agreements", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Cost aggregation", "Data analysis (Reserve analysis)", "Historical information review", "Funding limit reconciliation", "Financing"],
        outputs: ["Cost baseline", "Project funding requirements", "Project documents updates"]
    },
    "controlCost": {
        title: "4.4 Control Cost",
        inputs: ["Project management plan (Cost management plan, Cost baseline, Performance measurement baseline)", "Project documents (Lessons learned register)", "Project funding requirements", "Work performance data", "OPAs"],
        tools: ["Expert judgment", "Data analysis (Earned value analysis, Variance analysis, Trend analysis, Reserve analysis)", "To-Complete Performance Index (TCPI)", "PMIS"],
        outputs: ["Work performance information", "Cost forecasts", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "planQualityManagement": {
        title: "5.1 Plan Quality Management",
        inputs: ["Project charter", "Project management plan (Requirements management plan, Risk management plan, Stakeholder engagement plan, Scope baseline)", "Project documents (Requirements documentation, Risk register, Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Benchmarking, Brainstorming, Interviews)", "Data analysis (Cost-benefit analysis, Cost of quality)", "Decision making (Multicriteria)", "Data representation (Flowcharts, Logical data models, Matrix diagrams, Mind mapping)", "Test and inspection planning", "Meetings"],
        outputs: ["Quality management plan", "Quality metrics", "Project management plan updates", "Project documents updates"]
    },
    "manageQuality": {
        title: "5.2 Manage Quality",
        inputs: ["Project management plan (Quality management plan)", "Project documents (Lessons learned register, Quality control measurements, Quality metrics, Risk report)", "OPAs"],
        tools: ["Data gathering (Checklists)", "Data analysis (Alternatives analysis, Document analysis, Process analysis, Root cause analysis)", "Decision making", "Data representation (Affinity diagrams, Cause-and-effect diagrams, Flowcharts, Histograms, Matrix diagrams, Scatter diagrams)", "Audits", "Design for X (DfX)", "Problem solving", "Quality improvement methods"],
        outputs: ["Quality reports", "Test and evaluation documents", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "controlQuality": {
        title: "5.3 Control Quality",
        inputs: ["Project management plan", "Project documents (Lessons learned register, Quality metrics, Test and evaluation documents)", "Approved change requests", "Deliverables", "Work performance data", "EEFs", "OPAs"],
        tools: ["Data gathering (Checklists, Check sheets, Statistical sampling, Questionnaires)", "Data analysis (Performance reviews, Root cause analysis)", "Inspection", "Testing/product evaluations", "Data representation (Cause-and-effect diagrams, Control charts, Histograms, Scatter diagrams)", "Meetings"],
        outputs: ["Quality control measurements", "Verified deliverables", "Work performance information", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "planResourceManagement": {
        title: "6.1 Plan Resource Management",
        inputs: ["Project charter", "Project management plan (Quality management plan, Scope baseline, Schedule baseline)", "Project documents (Project schedule, Requirements documentation, Risk register, Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data representation (Hierarchical charts, RACI matrix, Text-oriented formats)", "Organizational theory", "Meetings"],
        outputs: ["Resource management plan", "Team charter", "Project documents updates"]
    },
    "estimateActivityResources": {
        title: "6.2 Estimate Activity Resources",
        inputs: ["Project management plan (Resource management plan, Scope baseline)", "Project documents (Activity list, Activity attributes, Assumption log, Cost estimates, Resource calendars, Risk register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Bottom-up estimating", "Analogous estimating", "Parametric estimating", "Data analysis (Alternatives analysis)", "PMIS", "Meetings"],
        outputs: ["Resource requirements", "Basis of estimates", "Resource breakdown structure", "Project documents updates"]
    },
    "acquireResources": {
        title: "6.3 Acquire Resources",
        inputs: ["Project management plan (Resource management plan, Procurement management plan, Cost baseline)", "Project documents (Project schedule, Resource calendars, Resource requirements, Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Decision making (Multicriteria)", "Interpersonal and team skills (Negotiation)", "Pre-assignment", "Virtual teams"],
        outputs: ["Physical resource assignments", "Project team assignments", "Resource calendars", "Change requests", "Project management plan updates", "Project documents updates", "EEF updates", "OPA updates"]
    },
    "developTeam": {
        title: "6.4 Develop Team",
        inputs: ["Project management plan (Resource management plan)", "Project documents (Lessons learned register, Project schedule, Project team assignments, Resource calendars, Team charter)", "EEFs", "OPAs"],
        tools: ["Colocation", "Virtual teams", "Communication technology", "Interpersonal and team skills (Conflict management, Influencing, Motivation, Negotiation, Team building)", "Recognition and rewards", "Training", "Individual and team assessments", "Meetings"],
        outputs: ["Team performance assessments", "Change requests", "Project management plan updates", "Project documents updates", "EEF updates", "OPA updates"]
    },
    "manageTeam": {
        title: "6.5 Manage Team",
        inputs: ["Project management plan (Resource management plan)", "Project documents (Issue log, Lessons learned register, Project team assignments, Team charter)", "Work performance reports", "Team performance assessments", "EEFs", "OPAs"],
        tools: ["Interpersonal and team skills (Conflict management, Decision making, Emotional intelligence, Influencing, Leadership)", "PMIS"],
        outputs: ["Change requests", "Project management plan updates", "Project documents updates", "EEF updates"]
    },
    "controlResources": {
        title: "6.6 Control Resources",
        inputs: ["Project management plan (Resource management plan)", "Project documents (Issue log, Lessons learned register, Physical resource assignments, Project schedule, Resource breakdown structure, Risk register)", "Work performance data", "Agreements", "OPAs"],
        tools: ["Data analysis (Alternatives analysis, Cost-benefit analysis, Performance reviews, Trend analysis)", "Problem solving", "Interpersonal and team skills (Negotiation, Influencing)", "PMIS"],
        outputs: ["Work performance information", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "planCommunicationsManagement": {
        title: "7.1 Plan Communications Management",
        inputs: ["Project charter", "Project management plan (Resource management plan, Stakeholder engagement plan)", "Project documents (Requirements documentation, Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Communication requirements analysis", "Communication technology", "Communication models", "Communication methods", "Interpersonal and team skills (Communication styles assessment)", "Data representation (Stakeholder engagement assessment matrix)", "Meetings"],
        outputs: ["Communications management plan", "Project management plan updates", "Project documents updates"]
    },
    "manageCommunications": {
        title: "7.2 Manage Communications",
        inputs: ["Project management plan (Communications management plan, Stakeholder engagement plan)", "Project documents (Change log, Issue log, Lessons learned register, Quality report, Risk report, Stakeholder register)", "Work performance reports", "EEFs", "OPAs"],
        tools: ["Communication technology", "Communication methods", "Communication skills (Communication competence, Feedback, Nonverbal, Presentations)", "PMIS", "Project reporting", "Interpersonal and team skills (Active listening, Conflict management, Cultural awareness, Meeting management, Networking)", "Meetings"],
        outputs: ["Project communications", "Project management plan updates", "Project documents updates", "OPA updates"]
    },
    "monitorCommunications": {
        title: "7.3 Monitor Communications",
        inputs: ["Project management plan (Communications management plan, Resource management plan, Stakeholder engagement plan)", "Project documents (Issue log, Lessons learned register, Project communications, Stakeholder register)", "Work performance data", "EEFs", "OPAs"],
        tools: ["Expert judgment", "PMIS", "Data analysis", "Interpersonal and team skills (Observation, Conversation)", "Meetings"],
        outputs: ["Work performance information", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "planRiskManagement": {
        title: "8.1 Plan Risk Management",
        inputs: ["Project charter", "Project management plan", "Project documents (Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data analysis (Stakeholder analysis)", "Meetings"],
        outputs: ["Risk management plan"]
    },
    "identifyRisks": {
        title: "8.2 Identify Risks",
        inputs: ["Project management plan", "Project documents (Assumption log, Cost estimates, Duration estimates, Requirements documentation, Resource requirements, Stakeholder register, etc.)", "Agreements", "Procurement documentation", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Brainstorming, Checklists, Interviews)", "Data analysis (Root cause analysis, Assumption and constraint analysis, SWOT analysis, Document analysis)", "Interpersonal and team skills (Facilitation)", "Prompt lists", "Meetings"],
        outputs: ["Risk register", "Risk report", "Project documents updates"]
    },
    "performQualitativeRiskAnalysis": {
        title: "8.3 Perform Qualitative Risk Analysis",
        inputs: ["Project management plan (Risk management plan)", "Project documents (Assumption log, Risk register, Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Interviews)", "Data analysis (Risk data quality assessment, Risk probability and impact assessment, Assessment of other risk parameters)", "Interpersonal and team skills (Facilitation)", "Risk categorization", "Data representation (Probability and impact matrix, Hierarchical charts)", "Meetings"],
        outputs: ["Project documents updates (Risk register, Risk report, Assumption log, etc.)"]
    },
    "performQuantitativeRiskAnalysis": {
        title: "8.4 Perform Quantitative Risk Analysis",
        inputs: ["Project management plan (Risk management plan)", "Project documents (Assumption log, Basis of estimates, Cost estimates, Duration estimates, Risk register, Schedule baseline, etc.)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Interviews)", "Interpersonal and team skills (Facilitation)", "Representations of uncertainty", "Data analysis (Simulations, Sensitivity analysis, Decision tree analysis, Influence diagrams)"],
        outputs: ["Project documents updates (Risk report)"]
    },
    "planRiskResponses": {
        title: "8.5 Plan Risk Responses",
        inputs: ["Project management plan (Risk management plan, Cost baseline)", "Project documents (Lessons learned register, Project schedule, Risk register, Risk report, Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Interviews)", "Interpersonal and team skills (Facilitation)", "Strategies for negative risks (Escalate, Avoid, Transfer, Mitigate, Accept)", "Strategies for positive risks (Escalate, Exploit, Share, Enhance, Accept)", "Contingent response strategies", "Strategies for overall project risk", "Data analysis (Alternatives analysis, Cost-benefit analysis)", "Decision making (Multicriteria)"],
        outputs: ["Change requests", "Project management plan updates", "Project documents updates"]
    },
    "implementRiskResponses": {
        title: "8.6 Implement Risk Responses",
        inputs: ["Project management plan (Risk management plan)", "Project documents (Lessons learned register, Risk register, Risk report)", "OPAs"],
        tools: ["Expert judgment", "Interpersonal and team skills (Influencing)", "PMIS"],
        outputs: ["Change requests", "Project documents updates"]
    },
    "monitorRisks": {
        title: "8.7 Monitor Risks",
        inputs: ["Project management plan (Risk management plan)", "Project documents (Issue log, Lessons learned register, Risk register, Risk report)", "Work performance data", "Work performance reports"],
        tools: ["Data analysis (Technical performance analysis, Reserve analysis)", "Audits", "Meetings"],
        outputs: ["Work performance information", "Change requests", "Project management plan updates", "Project documents updates", "OPA updates"]
    },
    "planProcurementManagement": {
        title: "9.1 Plan Procurement Management",
        inputs: ["Project charter", "Business documents (Business case)", "Project management plan (Scope management plan, Quality management plan, Resource management plan, Scope baseline)", "Project documents (Milestone list, Project team assignments, Requirements documentation, Risk register, Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Market research)", "Data analysis (Make-or-buy analysis)", "Source selection analysis", "Meetings"],
        outputs: ["Procurement management plan", "Procurement strategy", "Bid documents", "Procurement statement of work (SOW)", "Source selection criteria", "Make-or-buy decisions", "Independent cost estimates (ICE)", "Change requests", "Project documents updates", "OPA updates"]
    },
    "conductProcurements": {
        title: "9.2 Conduct Procurements",
        inputs: ["Project management plan (Communications management plan, Procurement management plan, Cost baseline)", "Project documents (Lessons learned register, Risk register, Stakeholder register)", "Procurement documentation (Bid documents, Procurement SOW, etc.)", "Seller proposals", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Advertising", "Bidder conferences", "Data analysis (Proposal evaluation)", "Interpersonal and team skills (Negotiation)"],
        outputs: ["Selected sellers", "Agreements", "Change requests", "Project management plan updates", "Project documents updates", "OPA updates"]
    },
    "controlProcurements": {
        title: "9.3 Control Procurements",
        inputs: ["Project management plan (Procurement management plan, Requirements management plan, Risk management plan, Change management plan, Schedule baseline)", "Project documents (Assumption log, Lessons learned register, Risk register, Stakeholder register)", "Agreements", "Procurement documentation", "Approved change requests", "Work performance data", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Claims administration", "Data analysis (Performance reviews, Trend analysis, Earned value analysis, Variance analysis)", "Inspection", "Audits"],
        outputs: ["Closed procurements", "Work performance information", "Procurement documentation updates", "Change requests", "Project management plan updates", "Project documents updates", "OPA updates"]
    },
    "identifyStakeholders": {
        title: "10.1 Identify Stakeholders",
        inputs: ["Project charter", "Business documents (Business case)", "Project management plan", "Project documents (Change log, Issue log, Requirements documentation)", "Agreements", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Questionnaires, Brainstorming)", "Data analysis (Stakeholder analysis, Document analysis)", "Data representation (Stakeholder mapping)", "Meetings"],
        outputs: ["Stakeholder register", "Change requests", "Project management plan updates", "Project documents updates"]
    },
    "planStakeholderEngagement": {
        title: "10.2 Plan Stakeholder Engagement",
        inputs: ["Project charter", "Project management plan (Communications management plan, Risk management plan)", "Project documents (Assumption log, Change log, Issue log, Project schedule, Risk register, Stakeholder register)", "Agreements", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Data gathering (Benchmarking)", "Data analysis (Assumption and constraint analysis, Root cause analysis)", "Decision making (Prioritization)", "Data representation (Mind mapping, Stakeholder engagement assessment matrix)", "Meetings"],
        outputs: ["Stakeholder engagement plan"]
    },
    "manageStakeholderEngagement": {
        title: "10.3 Manage Stakeholder Engagement",
        inputs: ["Project management plan (Communications management plan, Stakeholder engagement plan)", "Project documents (Change log, Issue log, Lessons learned register, Stakeholder register)", "EEFs", "OPAs"],
        tools: ["Expert judgment", "Communication skills (Feedback)", "Interpersonal and team skills (Conflict management, Cultural awareness, Negotiation, Observation, Political awareness)", "Ground rules", "Meetings"],
        outputs: ["Change requests", "Project management plan updates", "Project documents updates"]
    },
    "monitorStakeholderEngagement": {
        title: "10.4 Monitor Stakeholder Engagement",
        inputs: ["Project management plan (Resource management plan, Communications management plan, Stakeholder engagement plan)", "Project documents (Issue log, Lessons learned register, Project communications, Risk register, Stakeholder register)", "Work performance data", "EEFs", "OPAs"],
        tools: ["Data analysis (Alternatives analysis, Root cause analysis, Stakeholder analysis)", "Decision making (Multicriteria, Voting)", "Data representation (Stakeholder engagement assessment matrix)", "Communication skills (Feedback)", "Interpersonal and team skills (Active listening, Cultural awareness, Leadership, Networking, Political awareness)", "Meetings"],
        outputs: ["Work performance information", "Change requests", "Project management plan updates", "Project documents updates"]
    }
};