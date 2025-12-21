import {
    BookOpen, Target, Clock, CheckCircle, AlertTriangle,
    Award, Brain, Lightbulb, TrendingUp, FileText
} from 'lucide-react';

// ========================
// EXAM OVERVIEW
// ========================
export const examOverview = {
    title: 'PMP Exam Overview',
    description: 'Key information about the PMP certification examination.',
    details: {
        totalQuestions: 180,
        scoredQuestions: 175,
        pretestQuestions: 5,
        duration: '230 minutes (3 hours 50 minutes)',
        breaks: '2 scheduled 10-minute breaks',
        format: 'Computer-based testing (CBT)',
        questionTypes: ['Multiple choice (single answer)', 'Multiple response', 'Matching', 'Hotspot', 'Fill-in-the-blank'],
        passingScore: 'Approximately 61% (Target Score - not officially published)',
        languages: 'Available in multiple languages with aid feature',
        validity: '3 years (60 PDUs required for renewal)'
    },
    domains: [
        { name: 'People', percentage: 42, questions: '~76 questions', color: 'red' },
        { name: 'Process', percentage: 50, questions: '~90 questions', color: 'blue' },
        { name: 'Business Environment', percentage: 8, questions: '~14 questions', color: 'green' }
    ],
    approach: {
        predictive: 'About 50% of questions',
        agileHybrid: 'About 50% of questions',
        note: 'Questions are distributed across all domains, not isolated'
    }
};

// ========================
// STUDY STRATEGIES
// ========================
export const studyStrategies = [
    {
        title: 'Understand, Don\'t Memorize',
        icon: 'Brain',
        description: 'Focus on understanding concepts rather than rote memorization.',
        tips: [
            'Learn the "why" behind each process and tool',
            'Understand when to use each technique',
            'Connect concepts to real-world scenarios',
            'Think like a project manager, not a student'
        ]
    },
    {
        title: 'Master Both Approaches',
        icon: 'GitBranch',
        description: 'The exam tests both predictive and agile approaches equally.',
        tips: [
            'Study Scrum, Kanban, and XP thoroughly',
            'Understand when to use agile vs. predictive',
            'Know hybrid approaches and tailoring',
            'Learn servant leadership and facilitation'
        ]
    },
    {
        title: 'Focus on Situational Questions',
        icon: 'Target',
        description: 'Most questions present scenarios requiring judgment.',
        tips: [
            'Practice identifying what the question is really asking',
            'Eliminate obviously wrong answers first',
            'Look for the "best" answer, not just correct ones',
            'Consider stakeholder impact in your choices'
        ]
    },
    {
        title: 'Time Management',
        icon: 'Clock',
        description: 'You have about 76 seconds per question.',
        tips: [
            'Don\'t spend more than 2 minutes on any question',
            'Flag difficult questions and return later',
            'Use breaks wisely to refresh your mind',
            'Practice with timed mock exams'
        ]
    },
    {
        title: 'Know the ECO',
        icon: 'FileText',
        description: 'The Examination Content Outline is your primary guide.',
        tips: [
            'Study all tasks and enablers in each domain',
            'Understand the relationships between tasks',
            'Practice applying concepts in scenarios',
            'Review PMI\'s mindset for PMs'
        ]
    }
];

// ========================
// PMP MINDSET
// ========================
export const pmpMindset = {
    title: 'The PMP Mindset',
    description: 'PMI expects project managers to think in specific ways. Adopt this mindset for the exam.',
    principles: [
        {
            title: 'Be Proactive, Not Reactive',
            description: 'Anticipate problems and plan ahead rather than firefighting.',
            examples: [
                'Identify risks before they become issues',
                'Plan stakeholder engagement early',
                'Build quality in from the start'
            ]
        },
        {
            title: 'Communicate First',
            description: 'When in doubt, communicate with stakeholders.',
            examples: [
                'Meet with stakeholders to understand concerns',
                'Escalate issues early to the right people',
                'Keep the team informed of changes'
            ]
        },
        {
            title: 'Follow the Process',
            description: 'Use proper change management and governance.',
            examples: [
                'Submit changes through change control',
                'Document decisions and their rationale',
                'Get proper approvals before acting'
            ]
        },
        {
            title: 'Be Ethical and Professional',
            description: 'Uphold PMI\'s Code of Ethics and Professional Conduct.',
            examples: [
                'Report ethical violations',
                'Be honest and transparent',
                'Respect cultural differences'
            ]
        },
        {
            title: 'Empower the Team',
            description: 'Trust your team and enable their success.',
            examples: [
                'Remove impediments for the team',
                'Facilitate rather than direct',
                'Support team decisions'
            ]
        },
        {
            title: 'Focus on Value',
            description: 'Deliver business value, not just outputs.',
            examples: [
                'Prioritize work by business value',
                'Deliver incrementally when possible',
                'Align project work to strategy'
            ]
        }
    ]
};

// ========================
// PRACTICE QUESTIONS - PEOPLE DOMAIN
// ========================
export const peopleQuestions = [
    {
        id: 'P001',
        domain: 'People',
        task: 'Manage conflict',
        question: 'Two team members have been arguing about the best technical approach for a key feature. The conflict has been ongoing for three days and is affecting team morale. What should the project manager do FIRST?',
        options: [
            { id: 'A', text: 'Escalate the conflict to the functional managers' },
            { id: 'B', text: 'Make a decision on the technical approach to end the conflict' },
            { id: 'C', text: 'Meet with both team members to understand the root cause of the conflict' },
            { id: 'D', text: 'Separate the team members by assigning them to different tasks' }
        ],
        correctAnswer: 'C',
        explanation: 'Before taking action, the PM should understand the root cause of the conflict. Meeting with both team members allows the PM to gather information and understand each perspective. This aligns with the "collaborate/problem solve" conflict resolution approach, which is generally preferred.',
        tip: 'The PMP exam favors conflict resolution through collaboration and understanding root causes before escalating or forcing a solution.'
    },
    {
        id: 'P002',
        domain: 'People',
        task: 'Lead a team',
        question: 'A project manager is leading a team of highly experienced professionals who are experts in their domains but have never worked together. What leadership style would be MOST appropriate initially?',
        options: [
            { id: 'A', text: 'Directive - providing clear instructions and close supervision' },
            { id: 'B', text: 'Supportive - focusing on relationships and team building' },
            { id: 'C', text: 'Delegating - giving full autonomy to team members' },
            { id: 'D', text: 'Coaching - providing guidance while building independence' }
        ],
        correctAnswer: 'B',
        explanation: 'With highly experienced team members who are new to working together, the focus should be on building relationships and team cohesion (Supportive). The team doesn\'t need technical direction (Directive) or coaching, and it\'s too early for full delegation before trust is established.',
        tip: 'Situational leadership adapts to both the task and the team. When competence is high but team cohesion is low, focus on relationships.'
    },
    {
        id: 'P003',
        domain: 'People',
        task: 'Support team performance',
        question: 'During a sprint retrospective, a team member mentions that they feel their contributions are not valued by the rest of the team. How should the Scrum Master respond?',
        options: [
            { id: 'A', text: 'Note the concern and move on to the next topic to respect the timebox' },
            { id: 'B', text: 'Ask the team member to provide specific examples and facilitate a discussion' },
            { id: 'C', text: 'Speak with the team member privately after the retrospective' },
            { id: 'D', text: 'Assure the team member that all contributions are valued' }
        ],
        correctAnswer: 'B',
        explanation: 'The retrospective is the appropriate forum for discussing team dynamics. By asking for specifics and facilitating discussion, the Scrum Master helps the team address the issue openly, which promotes trust and continuous improvement.',
        tip: 'Retrospectives are safe spaces for discussing team issues. Use them to address problems openly rather than avoiding difficult conversations.'
    },
    {
        id: 'P004',
        domain: 'People',
        task: 'Empower team members and stakeholders',
        question: 'A team member approaches the project manager for approval on a minor technical decision. The project manager has previously told the team they have authority over technical decisions. What should the project manager do?',
        options: [
            { id: 'A', text: 'Approve the decision to keep the project moving' },
            { id: 'B', text: 'Remind the team member of their authority and ask what they would decide' },
            { id: 'C', text: 'Escalate to the technical lead for their input' },
            { id: 'D', text: 'Review the decision criteria and make the decision together' }
        ],
        correctAnswer: 'B',
        explanation: 'Empowerment means reinforcing team members\' authority over their domain. By reminding them of their authority and asking what they would decide, the PM reinforces self-organization while ensuring the team member is confident in their decision.',
        tip: 'Empowerment requires consistent reinforcement. Don\'t take back decisions that belong to the team.'
    },
    {
        id: 'P005',
        domain: 'People',
        task: 'Build a team',
        question: 'A new project team is forming with members from different countries and cultural backgrounds. What should the project manager do FIRST to build an effective team?',
        options: [
            { id: 'A', text: 'Establish common working hours for all team members' },
            { id: 'B', text: 'Create detailed processes and procedures for the team to follow' },
            { id: 'C', text: 'Facilitate the creation of team ground rules and working agreements' },
            { id: 'D', text: 'Assign a team leader from the most represented culture' }
        ],
        correctAnswer: 'C',
        explanation: 'Facilitating the creation of ground rules and working agreements allows the team to establish shared expectations while respecting cultural differences. This approach promotes inclusion and builds team cohesion from the start.',
        tip: 'Cultural diversity is an asset. Focus on establishing shared norms through team participation rather than imposing rules.'
    },
    {
        id: 'P006',
        domain: 'People',
        task: 'Address and remove impediments',
        question: 'During the daily standup, a developer mentions they\'ve been waiting three days for access to a testing environment. What should the Scrum Master do?',
        options: [
            { id: 'A', text: 'Add it to the sprint backlog for tracking' },
            { id: 'B', text: 'Ask the developer to work on other tasks until access is granted' },
            { id: 'C', text: 'Take ownership of resolving the impediment immediately after standup' },
            { id: 'D', text: 'Raise it in the next sprint retrospective' }
        ],
        correctAnswer: 'C',
        explanation: 'Removing impediments is a core responsibility of the Scrum Master. A three-day delay is significant and should be addressed immediately, not deferred to a retrospective or worked around.',
        tip: 'Impediments that block progress should be addressed immediately by the Scrum Master. Don\'t let blockers persist.'
    },
    {
        id: 'P007',
        domain: 'People',
        task: 'Negotiate project agreements',
        question: 'During contract negotiations with a vendor, the vendor proposes terms that favor them significantly. What is the BEST approach for the project manager?',
        options: [
            { id: 'A', text: 'Accept the terms to maintain a good relationship with the vendor' },
            { id: 'B', text: 'Reject the proposal and seek alternative vendors' },
            { id: 'C', text: 'Identify common interests and explore options that benefit both parties' },
            { id: 'D', text: 'Escalate to procurement to handle the negotiation' }
        ],
        correctAnswer: 'C',
        explanation: 'Effective negotiation seeks win-win outcomes. By identifying common interests and exploring mutual benefits, the PM can build a better relationship while protecting project interests. This is the principled negotiation approach.',
        tip: 'PMI favors win-win negotiations. Look for solutions that create value for both parties.'
    },
    {
        id: 'P008',
        domain: 'People',
        task: 'Engage and support virtual teams',
        question: 'A project team is distributed across four time zones. Team members report feeling disconnected and communication issues are causing delays. What should the project manager do?',
        options: [
            { id: 'A', text: 'Require all team members to work during core overlapping hours' },
            { id: 'B', text: 'Implement multiple communication tools and establish clear protocols' },
            { id: 'C', text: 'Request co-location for the remainder of the project' },
            { id: 'D', text: 'Reduce meeting frequency to minimize scheduling conflicts' }
        ],
        correctAnswer: 'B',
        explanation: 'Effective virtual team management requires appropriate tools and clear communication protocols. Multiple tools (synchronous and asynchronous) accommodate different time zones, while protocols ensure consistency.',
        tip: 'Virtual teams need intentional communication strategies. Use a mix of tools for synchronous and asynchronous collaboration.'
    },
    {
        id: 'P009',
        domain: 'People',
        task: 'Mentor relevant stakeholders',
        question: 'A junior team member is struggling with user story writing and is hesitant to ask for help. The project manager notices this during backlog refinement. What is the BEST approach?',
        options: [
            { id: 'A', text: 'Correct the user stories during the refinement session' },
            { id: 'B', text: 'Assign the task of writing user stories to a more experienced team member' },
            { id: 'C', text: 'Offer to pair with the team member on the next few user stories' },
            { id: 'D', text: 'Send the team member documentation on user story writing' }
        ],
        correctAnswer: 'C',
        explanation: 'Mentoring involves active support and knowledge transfer. Pairing provides hands-on learning while maintaining the team member\'s involvement and building their confidence.',
        tip: 'Effective mentoring is active and supportive. Help people learn by doing, not just by reading.'
    },
    {
        id: 'P010',
        domain: 'People',
        task: 'Promote team performance through emotional intelligence',
        question: 'During a heated project meeting, a stakeholder becomes visibly frustrated and raises their voice at the team. How should the project manager respond?',
        options: [
            { id: 'A', text: 'Firmly ask the stakeholder to lower their voice' },
            { id: 'B', text: 'Acknowledge the stakeholder\'s frustration and suggest a short break' },
            { id: 'C', text: 'Continue the meeting to avoid drawing more attention to the situation' },
            { id: 'D', text: 'Ask the stakeholder to leave and return when calm' }
        ],
        correctAnswer: 'B',
        explanation: 'Emotional intelligence involves recognizing emotions and responding appropriately. Acknowledging the frustration validates the stakeholder\'s feelings, and suggesting a break allows emotions to cool without confrontation.',
        tip: 'Emotional intelligence starts with acknowledging emotions. Create space for people to calm down before problem-solving.'
    }
];

// ========================
// PRACTICE QUESTIONS - PROCESS DOMAIN
// ========================
export const processQuestions = [
    {
        id: 'PR001',
        domain: 'Process',
        task: 'Execute project with urgency required to deliver business value',
        question: 'The Product Owner wants to add a new feature that will delay the release by one month. The team has already committed to delivering value to customers by a specific date. What should the team do?',
        options: [
            { id: 'A', text: 'Accept the feature to satisfy the Product Owner' },
            { id: 'B', text: 'Discuss the trade-offs and impact on value delivery with the Product Owner' },
            { id: 'C', text: 'Reject the feature to meet the committed date' },
            { id: 'D', text: 'Add more resources to deliver both on time' }
        ],
        correctAnswer: 'B',
        explanation: 'The team should discuss trade-offs with the Product Owner, who ultimately prioritizes the backlog. This conversation should include impact on business value, customer expectations, and potential alternatives.',
        tip: 'Value delivery decisions belong to the Product Owner, but they need information from the team to make informed choices.'
    },
    {
        id: 'PR002',
        domain: 'Process',
        task: 'Manage communications',
        question: 'A project has 45 stakeholders. The project manager is spending a significant amount of time creating individual status reports. What should the project manager do to improve efficiency?',
        options: [
            { id: 'A', text: 'Reduce the number of stakeholders receiving reports' },
            { id: 'B', text: 'Create a communication plan that groups stakeholders by information needs' },
            { id: 'C', text: 'Delegate report creation to team members' },
            { id: 'D', text: 'Switch to verbal updates instead of written reports' }
        ],
        correctAnswer: 'B',
        explanation: 'A communication plan should group stakeholders by their information needs, allowing for efficient communication through targeted reports. This ensures the right information reaches the right people in the right format.',
        tip: 'Not all stakeholders need the same level of detail. Segment stakeholders and tailor communications accordingly.'
    },
    {
        id: 'PR003',
        domain: 'Process',
        task: 'Assess and manage risks',
        question: 'During sprint planning, the team identifies a risk that a key API integration might fail due to the vendor\'s unstable platform. The probability is medium and the impact is high. What should the team do?',
        options: [
            { id: 'A', text: 'Avoid the risk by building the feature without the API' },
            { id: 'B', text: 'Accept the risk and proceed with the sprint' },
            { id: 'C', text: 'Create a spike to test the integration early in the sprint' },
            { id: 'D', text: 'Transfer the risk to the vendor' }
        ],
        correctAnswer: 'C',
        explanation: 'A spike (timeboxed research) allows the team to validate the integration early, reducing uncertainty. This is a mitigation strategy that addresses the risk proactively within the sprint.',
        tip: 'In agile, use spikes to reduce technical uncertainty early. This is a form of risk mitigation.'
    },
    {
        id: 'PR004',
        domain: 'Process',
        task: 'Engage stakeholders',
        question: 'A key stakeholder has been missing sprint reviews despite multiple invitations. Their feedback is critical for the product direction. What should the project manager do?',
        options: [
            { id: 'A', text: 'Document the stakeholder\'s absence and proceed without their input' },
            { id: 'B', text: 'Meet with the stakeholder to understand their constraints and adapt engagement approach' },
            { id: 'C', text: 'Escalate to the stakeholder\'s manager' },
            { id: 'D', text: 'Send the stakeholder recordings of the sprint reviews' }
        ],
        correctAnswer: 'B',
        explanation: 'Understanding the stakeholder\'s constraints allows for adapting the engagement approach. Perhaps a different time, format, or representative would work better. Direct conversation is the best first step.',
        tip: 'Stakeholder engagement strategies should be tailored to individual needs. If something isn\'t working, adapt.'
    },
    {
        id: 'PR005',
        domain: 'Process',
        task: 'Plan and manage budget and resources',
        question: 'The project is using an agile approach with a fixed budget and variable scope. Midway through, the team discovers that a must-have feature will require twice the estimated effort. What should the project manager do?',
        options: [
            { id: 'A', text: 'Request additional budget to complete the feature' },
            { id: 'B', text: 'Work with the Product Owner to reprioritize and potentially descope other features' },
            { id: 'C', text: 'Have the team work overtime to complete everything' },
            { id: 'D', text: 'Reduce quality to meet the budget' }
        ],
        correctAnswer: 'B',
        explanation: 'With a fixed budget and variable scope, the appropriate response is to reprioritize. The Product Owner can decide which lower-priority features to descope to accommodate the must-have feature.',
        tip: 'In agile with fixed budget, scope is the variable. Work with the Product Owner to make trade-off decisions.'
    },
    {
        id: 'PR006',
        domain: 'Process',
        task: 'Plan and manage schedule',
        question: 'A team has completed four sprints with velocities of 24, 28, 22, and 26 story points. There are 150 story points remaining in the backlog. How many sprints are needed to complete the backlog?',
        options: [
            { id: 'A', text: '5 sprints' },
            { id: 'B', text: '6 sprints' },
            { id: 'C', text: '7 sprints' },
            { id: 'D', text: 'Cannot be determined from this information' }
        ],
        correctAnswer: 'B',
        explanation: 'Average velocity = (24+28+22+26)/4 = 25 story points per sprint. Remaining work = 150 points. Sprints needed = 150/25 = 6 sprints.',
        tip: 'Use average velocity for forecasting. Remember to consider variability in your estimates.'
    },
    {
        id: 'PR007',
        domain: 'Process',
        task: 'Plan and manage quality',
        question: 'A team is experiencing a high defect rate in production. The retrospective identified insufficient testing as the root cause. What should the team do?',
        options: [
            { id: 'A', text: 'Add a dedicated testing phase after each sprint' },
            { id: 'B', text: 'Update the Definition of Done to include specific testing requirements' },
            { id: 'C', text: 'Hire additional testers' },
            { id: 'D', text: 'Conduct more frequent code reviews' }
        ],
        correctAnswer: 'B',
        explanation: 'The Definition of Done establishes the team\'s quality standards. By explicitly including testing requirements, the team ensures testing is built into their process rather than treated as separate phase.',
        tip: 'Quality is built in, not tested in. Update the Definition of Done to embed quality practices.'
    },
    {
        id: 'PR008',
        domain: 'Process',
        task: 'Plan and manage scope',
        question: 'During backlog refinement, the team realizes a user story is too large to complete in a single sprint. What should the team do?',
        options: [
            { id: 'A', text: 'Extend the sprint to accommodate the story' },
            { id: 'B', text: 'Split the story into smaller, independent stories' },
            { id: 'C', text: 'Assign more team members to the story' },
            { id: 'D', text: 'Move the story to a future sprint when more time is available' }
        ],
        correctAnswer: 'B',
        explanation: 'Stories should be small enough to complete within a sprint. Splitting into smaller stories maintains the sprint timebox and allows for incremental value delivery. This is a standard backlog refinement activity.',
        tip: 'The "S" in INVEST stands for Small. If a story is too big, split it into smaller stories.'
    },
    {
        id: 'PR009',
        domain: 'Process',
        task: 'Manage project changes',
        question: 'A major stakeholder requests a significant change to the project scope during sprint 5 of a 10-sprint release. The change aligns with business strategy but will require significant rework. What should the project manager do FIRST?',
        options: [
            { id: 'A', text: 'Reject the change to protect the sprint commitment' },
            { id: 'B', text: 'Implement the change immediately given its strategic importance' },
            { id: 'C', text: 'Assess the impact and present options to the Product Owner' },
            { id: 'D', text: 'Add the change to the product backlog for future prioritization' }
        ],
        correctAnswer: 'C',
        explanation: 'Before any decision, the impact should be assessed and options presented. The Product Owner can then make an informed decision about whether to accept the change and how to incorporate it.',
        tip: 'In agile, change is expected but should still be assessed. The Product Owner decides on scope priorities.'
    },
    {
        id: 'PR010',
        domain: 'Process',
        task: 'Determine appropriate project methodology',
        question: 'A project has well-defined requirements, strict regulatory compliance needs, and a fixed-price contract. Which development approach is MOST appropriate?',
        options: [
            { id: 'A', text: 'Agile with 2-week sprints' },
            { id: 'B', text: 'Predictive with detailed upfront planning' },
            { id: 'C', text: 'Hybrid with predictive requirements and agile development' },
            { id: 'D', text: 'Kanban for continuous flow' }
        ],
        correctAnswer: 'B',
        explanation: 'Given stable requirements, regulatory compliance needs, and fixed-price contract, a predictive approach is most appropriate. These conditions favor detailed upfront planning and controlled execution.',
        tip: 'Match the approach to the project characteristics. Stable requirements and fixed contracts favor predictive approaches.'
    },
    {
        id: 'PR011',
        domain: 'Process',
        task: 'Establish project governance structure',
        question: 'The project manager discovers that team decisions are frequently being overridden by a senior manager who is not on the project. What should the project manager do?',
        options: [
            { id: 'A', text: 'Accept the senior manager\'s decisions to avoid conflict' },
            { id: 'B', text: 'Escalate to the project sponsor to clarify decision authority' },
            { id: 'C', text: 'Ask the team to ignore the senior manager\'s input' },
            { id: 'D', text: 'Document the interference in the risk register' }
        ],
        correctAnswer: 'B',
        explanation: 'Decision authority should be clarified through proper governance channels. The project sponsor can help establish clear boundaries and escalation paths.',
        tip: 'Governance defines who makes what decisions. When authority is unclear, escalate to clarify.'
    },
    {
        id: 'PR012',
        domain: 'Process',
        task: 'Manage project issues',
        question: 'A critical technical issue is blocking sprint progress. The team estimates it will take 5 days to resolve, but the sprint has only 3 days remaining. What should the team do?',
        options: [
            { id: 'A', text: 'Extend the sprint by 2 days' },
            { id: 'B', text: 'Cancel the sprint and start a new one' },
            { id: 'C', text: 'Adjust the sprint goal and commitment with the Product Owner' },
            { id: 'D', text: 'Work overtime to complete everything' }
        ],
        correctAnswer: 'C',
        explanation: 'The sprint timebox should not be extended. The team should transparently discuss the situation with the Product Owner and adjust the sprint goal and commitment as needed.',
        tip: 'Sprints are timeboxed. When issues arise, be transparent and adjust scope rather than extending time.'
    }
];

// ========================
// PRACTICE QUESTIONS - BUSINESS ENVIRONMENT DOMAIN
// ========================
export const businessQuestions = [
    {
        id: 'B001',
        domain: 'Business Environment',
        task: 'Plan and manage project compliance',
        question: 'The project team discovers that a planned feature may not comply with new data privacy regulations that will take effect next quarter. What should the project manager do?',
        options: [
            { id: 'A', text: 'Proceed with the feature and update it after the regulations take effect' },
            { id: 'B', text: 'Consult with legal and compliance to understand requirements and adapt the approach' },
            { id: 'C', text: 'Remove the feature from scope to avoid compliance risk' },
            { id: 'D', text: 'Document the risk and proceed as planned' }
        ],
        correctAnswer: 'B',
        explanation: 'Compliance requirements should be understood before making decisions. Legal and compliance teams can provide guidance on requirements and acceptable approaches.',
        tip: 'Compliance issues require expert consultation. Don\'t make assumptions about regulatory requirements.'
    },
    {
        id: 'B002',
        domain: 'Business Environment',
        task: 'Evaluate and deliver project benefits and value',
        question: 'A project is delivering features as planned, but stakeholders report they are not seeing the expected business benefits. What should the project manager do?',
        options: [
            { id: 'A', text: 'Review the benefits realization plan and measurement approach with stakeholders' },
            { id: 'B', text: 'Continue delivering features as the benefits will come later' },
            { id: 'C', text: 'Close the project as it is not delivering value' },
            { id: 'D', text: 'Add more features to increase business value' }
        ],
        correctAnswer: 'A',
        explanation: 'When expected benefits are not materializing, the PM should review the benefits realization plan with stakeholders. This may reveal measurement issues, adoption gaps, or need for course correction.',
        tip: 'Outputs (features) don\'t equal outcomes (benefits). Monitor benefits realization and adapt if needed.'
    },
    {
        id: 'B003',
        domain: 'Business Environment',
        task: 'Evaluate and address external business environment changes',
        question: 'A competitor has released a product with features similar to what the project is developing. The project sponsor is concerned about being late to market. What should the project manager do?',
        options: [
            { id: 'A', text: 'Fast-track the project by working in parallel' },
            { id: 'B', text: 'Work with the Product Owner to reassess priorities and consider a minimum viable product' },
            { id: 'C', text: 'Continue as planned since the project was already approved' },
            { id: 'D', text: 'Cancel the project as the market opportunity is gone' }
        ],
        correctAnswer: 'B',
        explanation: 'External changes should trigger reassessment. Working with the Product Owner to consider an MVP or reprioritization allows the project to respond to market changes while still delivering value.',
        tip: 'External changes may require strategy adjustments. Consider MVP or scope changes to respond to market conditions.'
    },
    {
        id: 'B004',
        domain: 'Business Environment',
        task: 'Support organizational change',
        question: 'The project will introduce a new system that significantly changes how employees do their work. Many employees are resistant to the change. What should the project manager do?',
        options: [
            { id: 'A', text: 'Focus on technical delivery and let HR handle change management' },
            { id: 'B', text: 'Mandate usage of the new system after go-live' },
            { id: 'C', text: 'Develop a change management plan that addresses concerns and provides support' },
            { id: 'D', text: 'Delay the project until resistance decreases' }
        ],
        correctAnswer: 'C',
        explanation: 'Organizational change management is part of project success. A change management plan that addresses resistance, provides training, and supports adoption is essential for benefits realization.',
        tip: 'Technical success without adoption is failure. Plan for organizational change management.'
    },
    {
        id: 'B005',
        domain: 'Business Environment',
        task: 'Support organizational change',
        question: 'During project execution, the organization announces a restructuring that will change reporting relationships for several team members. How should the project manager respond?',
        options: [
            { id: 'A', text: 'Wait for the restructuring to be complete before taking action' },
            { id: 'B', text: 'Assess the impact on the project and communicate with affected stakeholders' },
            { id: 'C', text: 'Request that team members be exempt from the restructuring' },
            { id: 'D', text: 'Document the change in the assumption log' }
        ],
        correctAnswer: 'B',
        explanation: 'Organizational changes can impact projects significantly. The PM should proactively assess impacts (resources, reporting, decision-making) and communicate with affected stakeholders.',
        tip: 'Organizational changes create project risks. Assess impacts proactively and communicate.'
    }
];

// ========================
// KEY FORMULAS
// ========================
export const keyFormulas = [
    {
        category: 'Earned Value Management',
        formulas: [
            { name: 'Planned Value (PV)', formula: 'Budgeted cost of work scheduled', description: 'The authorized budget assigned to scheduled work.' },
            { name: 'Earned Value (EV)', formula: 'Budgeted cost of work performed', description: 'The measure of work performed expressed in terms of the budget authorized.' },
            { name: 'Actual Cost (AC)', formula: 'Actual cost of work performed', description: 'The realized cost incurred for work performed.' },
            { name: 'Budget at Completion (BAC)', formula: 'Total project budget', description: 'The sum of all budgets established for the work.' },
            { name: 'Cost Variance (CV)', formula: 'CV = EV - AC', description: 'Positive = under budget, Negative = over budget' },
            { name: 'Schedule Variance (SV)', formula: 'SV = EV - PV', description: 'Positive = ahead of schedule, Negative = behind schedule' },
            { name: 'Cost Performance Index (CPI)', formula: 'CPI = EV / AC', description: '>1 = under budget, <1 = over budget' },
            { name: 'Schedule Performance Index (SPI)', formula: 'SPI = EV / PV', description: '>1 = ahead of schedule, <1 = behind schedule' },
            { name: 'Estimate at Completion (EAC)', formula: 'EAC = BAC / CPI', description: 'Typical formula assuming current variance continues' },
            { name: 'Estimate to Complete (ETC)', formula: 'ETC = EAC - AC', description: 'Expected cost to complete remaining work' },
            { name: 'Variance at Completion (VAC)', formula: 'VAC = BAC - EAC', description: 'Projected budget variance at completion' },
            { name: 'To-Complete Performance Index (TCPI)', formula: 'TCPI = (BAC - EV) / (BAC - AC)', description: 'Required future efficiency to meet BAC' }
        ]
    },
    {
        category: 'Communication Channels',
        formulas: [
            { name: 'Communication Channels', formula: 'n(n-1)/2', description: 'Where n = number of stakeholders. Used to understand communication complexity.' }
        ]
    },
    {
        category: 'PERT Estimation',
        formulas: [
            { name: 'PERT Expected Duration', formula: '(O + 4M + P) / 6', description: 'O=Optimistic, M=Most Likely, P=Pessimistic' },
            { name: 'Standard Deviation', formula: '(P - O) / 6', description: 'Measure of uncertainty in the estimate' },
            { name: 'Variance', formula: 'σ² = [(P - O) / 6]²', description: 'Square of standard deviation' }
        ]
    },
    {
        category: 'Agile Metrics',
        formulas: [
            { name: 'Velocity', formula: 'Sum of story points completed', description: 'Total story points completed in a sprint' },
            { name: 'Lead Time', formula: 'Delivery Date - Request Date', description: 'Total time from request to delivery' },
            { name: 'Cycle Time', formula: 'Completion Date - Start Date', description: 'Time from work started to work completed' },
            { name: 'Throughput', formula: 'Items completed / Time period', description: 'Rate of completing work items' }
        ]
    }
];

// ========================
// EXAM DAY TIPS
// ========================
export const examDayTips = [
    {
        title: 'Before the Exam',
        tips: [
            'Get a good night\'s sleep - avoid last-minute cramming',
            'Arrive at the testing center 30 minutes early',
            'Bring two forms of valid ID',
            'Use the restroom before the exam starts',
            'Do a brain dump of formulas at the beginning if needed'
        ]
    },
    {
        title: 'During the Exam',
        tips: [
            'Read each question carefully - identify what is being asked',
            'Eliminate obviously wrong answers first',
            'Don\'t spend more than 2 minutes on any question',
            'Flag difficult questions and return to them',
            'Take scheduled breaks to stay fresh',
            'Trust your preparation - don\'t second-guess too much'
        ]
    },
    {
        title: 'Question Strategies',
        tips: [
            'Look for "FIRST", "BEST", "NEXT" keywords',
            '"All of the above" and "None of the above" are rarely correct',
            'Answers with absolute words (always, never) are often wrong',
            'When stuck, think "What would PMI want?"',
            'Consider the stakeholder impact of each option',
            'In conflict situations, prefer collaboration over escalation'
        ]
    },
    {
        title: 'Mindset Tips',
        tips: [
            'You are an experienced, ethical project manager',
            'Always communicate before escalating',
            'Process matters - follow change control',
            'Value delivery is the ultimate goal',
            'Empower your team - servant leadership',
            'Proactive is better than reactive'
        ]
    }
];

export default {
    examOverview,
    studyStrategies,
    pmpMindset,
    peopleQuestions,
    processQuestions,
    businessQuestions,
    keyFormulas,
    examDayTips
};
