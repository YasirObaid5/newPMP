import {
    Repeat, GitBranch, Layers, Target, Users, Clock,
    CheckCircle, AlertTriangle, Zap, BarChart2, RefreshCw,
    MessageCircle, Award, TrendingUp, Clipboard, Layout,
    Activity, Box, Calendar, FileText, Settings, Star
} from 'lucide-react';

// ========================
// AGILE FRAMEWORKS
// ========================
export const agileFrameworks = [
    {
        id: 'scrum',
        name: 'Scrum',
        category: 'Iterative Framework',
        description: 'A lightweight framework that helps people, teams, and organizations generate value through adaptive solutions for complex problems.',
        icon: 'Repeat',
        color: 'blue',
        principles: [
            'Empirical process control (transparency, inspection, adaptation)',
            'Self-organization',
            'Collaboration',
            'Value-based prioritization',
            'Time-boxing',
            'Iterative development'
        ],
        roles: [
            {
                name: 'Product Owner',
                responsibilities: [
                    'Defines and prioritizes the product backlog',
                    'Represents stakeholders and the voice of the customer',
                    'Accepts or rejects work results',
                    'Maximizes the value of the product',
                    'Ensures the team understands items in the backlog'
                ]
            },
            {
                name: 'Scrum Master',
                responsibilities: [
                    'Facilitates Scrum events and removes impediments',
                    'Coaches the team on Scrum practices',
                    'Shields the team from external distractions',
                    'Promotes self-organization',
                    'Helps improve team practices'
                ]
            },
            {
                name: 'Development Team',
                responsibilities: [
                    'Self-organizing and cross-functional',
                    'Delivers potentially shippable increments',
                    'Owns the technical decisions',
                    'Collectively responsible for the work',
                    'Typically 3-9 members'
                ]
            }
        ],
        events: [
            {
                name: 'Sprint',
                timeBox: '1-4 weeks (typically 2 weeks)',
                description: 'A time-boxed iteration where a potentially releasable product increment is created.',
                keyPoints: ['Fixed duration', 'No changes that endanger Sprint Goal', 'Quality does not decrease', 'Scope may be clarified with PO']
            },
            {
                name: 'Sprint Planning',
                timeBox: '8 hours max for 1-month Sprint',
                description: 'The team selects work from the backlog and creates a plan to deliver it.',
                keyPoints: ['What can be delivered?', 'How will the work get done?', 'Sprint Goal is defined', 'Team commits to Sprint Backlog']
            },
            {
                name: 'Daily Scrum',
                timeBox: '15 minutes',
                description: 'A daily synchronization meeting for the Development Team.',
                keyPoints: ['Same time and place daily', 'What did I do yesterday?', 'What will I do today?', 'Any impediments?']
            },
            {
                name: 'Sprint Review',
                timeBox: '4 hours max for 1-month Sprint',
                description: 'Demonstration of the work completed to stakeholders for feedback.',
                keyPoints: ['Demo the increment', 'Gather feedback', 'Adapt the backlog', 'NOT a status meeting']
            },
            {
                name: 'Sprint Retrospective',
                timeBox: '3 hours max for 1-month Sprint',
                description: 'Team reflects on the process and identifies improvements.',
                keyPoints: ['What went well?', 'What could be improved?', 'Create actionable improvements', 'Inspect people, relationships, process, tools']
            }
        ],
        artifacts: [
            {
                name: 'Product Backlog',
                description: 'An ordered list of everything that is known to be needed in the product.',
                commitment: 'Product Goal',
                keyPoints: ['Single source of requirements', 'Never complete', 'Constantly refined', 'Owned by Product Owner']
            },
            {
                name: 'Sprint Backlog',
                description: 'Set of Product Backlog items selected for the Sprint plus the plan for delivering them.',
                commitment: 'Sprint Goal',
                keyPoints: ['Owned by Development Team', 'Updated throughout Sprint', 'Visible to all', 'Detailed plan']
            },
            {
                name: 'Increment',
                description: 'The sum of all Product Backlog items completed during a Sprint and all previous Sprints.',
                commitment: 'Definition of Done',
                keyPoints: ['Must be usable', 'Meets Definition of Done', 'Potentially releasable', 'Inspectable']
            }
        ]
    },
    {
        id: 'kanban',
        name: 'Kanban',
        category: 'Flow-Based Method',
        description: 'A method for managing knowledge work with an emphasis on just-in-time delivery while not overloading team members.',
        icon: 'Layout',
        color: 'purple',
        principles: [
            'Start with what you do now',
            'Agree to pursue incremental, evolutionary change',
            'Respect the current process, roles, responsibilities & titles',
            'Encourage acts of leadership at all levels'
        ],
        practices: [
            {
                name: 'Visualize the Workflow',
                description: 'Use a Kanban board to make work visible.',
                details: 'Create columns representing stages of your process. Cards move from left to right as work progresses.'
            },
            {
                name: 'Limit Work in Progress (WIP)',
                description: 'Restrict the number of items in each stage.',
                details: 'WIP limits help identify bottlenecks and prevent overloading. When a limit is reached, the team must complete work before pulling new items.'
            },
            {
                name: 'Manage Flow',
                description: 'Monitor and measure the flow of work.',
                details: 'Track lead time, cycle time, and throughput to identify improvements and predict delivery.'
            },
            {
                name: 'Make Policies Explicit',
                description: 'Define and communicate how work is handled.',
                details: 'Include Definition of Done, WIP limits, priority rules, and escalation paths.'
            },
            {
                name: 'Implement Feedback Loops',
                description: 'Regular cadences for review and improvement.',
                details: 'Daily standups, delivery reviews, operations reviews, and strategy reviews.'
            },
            {
                name: 'Improve Collaboratively, Evolve Experimentally',
                description: 'Use models and the scientific method to drive improvement.',
                details: 'Test hypotheses about process changes and measure results.'
            }
        ],
        metrics: [
            { name: 'Lead Time', description: 'Time from request to delivery', formula: 'End Date - Request Date' },
            { name: 'Cycle Time', description: 'Time from work started to completed', formula: 'End Date - Start Date' },
            { name: 'Throughput', description: 'Number of items completed per time period', formula: 'Items Completed / Time Period' },
            { name: 'WIP', description: 'Number of items currently in progress', formula: 'Count of items in active columns' }
        ]
    },
    {
        id: 'xp',
        name: 'Extreme Programming (XP)',
        category: 'Engineering Practices',
        description: 'A software development methodology intended to improve software quality and responsiveness to changing customer requirements.',
        icon: 'Zap',
        color: 'yellow',
        values: [
            { name: 'Communication', description: 'Everyone is part of the team and communicates face-to-face daily.' },
            { name: 'Simplicity', description: 'We will do what is needed and asked for, but no more.' },
            { name: 'Feedback', description: 'We will take every iteration commitment seriously by delivering working software.' },
            { name: 'Courage', description: 'We will tell the truth about progress and estimates. We will adapt to changes.' },
            { name: 'Respect', description: 'Everyone gives and feels the respect they deserve as a valued team member.' }
        ],
        practices: [
            { name: 'Pair Programming', description: 'Two programmers work together at one workstation.', category: 'Development' },
            { name: 'Test-Driven Development (TDD)', description: 'Write tests before writing code.', category: 'Development' },
            { name: 'Continuous Integration', description: 'Integrate and test code frequently.', category: 'Development' },
            { name: 'Refactoring', description: 'Restructure code without changing its external behavior.', category: 'Development' },
            { name: 'Simple Design', description: 'Keep the design as simple as possible at any given moment.', category: 'Development' },
            { name: 'Collective Code Ownership', description: 'Anyone can change any code anywhere in the system.', category: 'Team' },
            { name: 'Coding Standards', description: 'Programmers write all code in accordance with rules.', category: 'Team' },
            { name: 'Sustainable Pace', description: 'Work at a pace that can be sustained indefinitely.', category: 'Team' },
            { name: 'Planning Game', description: 'Quickly determine the scope of the next release.', category: 'Planning' },
            { name: 'Small Releases', description: 'Release new versions on a very short cycle.', category: 'Planning' },
            { name: 'Whole Team', description: 'All contributors sit together as members of one team.', category: 'Planning' },
            { name: 'On-Site Customer', description: 'A real customer sits with the team, available to answer questions.', category: 'Planning' }
        ]
    },
    {
        id: 'lean',
        name: 'Lean',
        category: 'Philosophy & Principles',
        description: 'A systematic method for waste minimization without sacrificing productivity, derived from Toyota Production System.',
        icon: 'TrendingUp',
        color: 'green',
        principles: [
            {
                name: 'Eliminate Waste',
                description: 'Remove anything that does not add value for the customer.',
                wasteTypes: [
                    { name: 'Partially Done Work', example: 'Uncoded designs, untested code' },
                    { name: 'Extra Features', example: 'Gold-plating, unused functionality' },
                    { name: 'Relearning', example: 'Knowledge not captured or shared' },
                    { name: 'Handoffs', example: 'Passing work between teams' },
                    { name: 'Delays', example: 'Waiting for decisions, resources' },
                    { name: 'Task Switching', example: 'Context switching between projects' },
                    { name: 'Defects', example: 'Bugs, rework, technical debt' }
                ]
            },
            {
                name: 'Build Quality In',
                description: 'Prevent defects rather than find and fix them.',
                practices: ['TDD', 'Pair Programming', 'Continuous Integration', 'Automated Testing']
            },
            {
                name: 'Create Knowledge',
                description: 'Use short iteration cycles to learn and adapt.',
                practices: ['Set-based development', 'Spikes', 'Retrospectives', 'Documentation']
            },
            {
                name: 'Defer Commitment',
                description: 'Make decisions at the last responsible moment.',
                practices: ['Options thinking', 'Set-based development', 'Reversible decisions']
            },
            {
                name: 'Deliver Fast',
                description: 'Deliver value quickly through short cycles.',
                practices: ['Small batches', 'Queue management', 'Pull systems']
            },
            {
                name: 'Respect People',
                description: 'Trust teams to figure out the best way to work.',
                practices: ['Self-organization', 'Cross-training', 'Safe environment']
            },
            {
                name: 'Optimize the Whole',
                description: 'Focus on the entire value stream, not local optimization.',
                practices: ['Value stream mapping', 'Systems thinking', 'End-to-end ownership']
            }
        ]
    },
    {
        id: 'safe',
        name: 'SAFe (Scaled Agile Framework)',
        category: 'Scaling Framework',
        description: 'A framework for implementing agile practices at enterprise scale.',
        icon: 'Layers',
        color: 'indigo',
        levels: [
            {
                name: 'Team Level',
                description: 'Agile teams working in Scrum, Kanban, or XP',
                components: ['Agile Teams', 'Scrum Master', 'Product Owner', 'Iteration Planning', 'Daily Standup']
            },
            {
                name: 'Program Level (ART)',
                description: 'Agile Release Train - 5-12 teams working together',
                components: ['Release Train Engineer (RTE)', 'Product Management', 'System Architect', 'PI Planning', 'System Demo']
            },
            {
                name: 'Large Solution Level',
                description: 'For very large solutions requiring multiple ARTs',
                components: ['Solution Train Engineer', 'Solution Management', 'Solution Architect', 'Pre/Post PI Planning']
            },
            {
                name: 'Portfolio Level',
                description: 'Strategy, investment, and governance',
                components: ['Lean Portfolio Management', 'Epic Owners', 'Enterprise Architect', 'Strategic Themes']
            }
        ],
        events: [
            { name: 'PI Planning', description: '2-day event where all teams plan together for the Program Increment (8-12 weeks)', frequency: 'Every PI' },
            { name: 'System Demo', description: 'Demonstration of the integrated solution to stakeholders', frequency: 'Every 2 weeks' },
            { name: 'Inspect & Adapt', description: 'Problem-solving workshop at the end of each PI', frequency: 'Every PI' },
            { name: 'Scrum of Scrums', description: 'Coordination meeting between team representatives', frequency: 'Daily or as needed' }
        ]
    }
];

// ========================
// AGILE PRACTICES & TECHNIQUES
// ========================
export const agilePractices = [
    {
        category: 'Planning & Estimation',
        icon: 'Calendar',
        items: [
            {
                name: 'User Stories',
                description: 'Short, simple description of a feature from end-user perspective.',
                format: 'As a [role], I want [feature] so that [benefit]',
                components: ['Card (written story)', 'Conversation (discussion)', 'Confirmation (acceptance criteria)'],
                investCriteria: [
                    { letter: 'I', meaning: 'Independent', description: 'Can be developed in any order' },
                    { letter: 'N', meaning: 'Negotiable', description: 'Details worked out in conversation' },
                    { letter: 'V', meaning: 'Valuable', description: 'Delivers value to stakeholder' },
                    { letter: 'E', meaning: 'Estimable', description: 'Can be sized by the team' },
                    { letter: 'S', meaning: 'Small', description: 'Fits within an iteration' },
                    { letter: 'T', meaning: 'Testable', description: 'Clear acceptance criteria' }
                ]
            },
            {
                name: 'Story Points',
                description: 'Relative measure of effort, complexity, and uncertainty.',
                details: 'Uses Fibonacci sequence (1, 2, 3, 5, 8, 13, 21...) or T-shirt sizes (XS, S, M, L, XL).',
                benefits: ['Faster than hour estimation', 'Accounts for uncertainty', 'Team-specific calibration']
            },
            {
                name: 'Planning Poker',
                description: 'Consensus-based estimation technique using cards.',
                steps: ['PO presents story', 'Team asks questions', 'Each member selects card privately', 'Cards revealed simultaneously', 'Discuss differences', 'Re-estimate until consensus']
            },
            {
                name: 'Affinity Estimation',
                description: 'Quick technique for estimating large backlogs.',
                steps: ['Place first story in middle', 'Silently place other stories relative to it', 'Discuss and adjust placements', 'Assign point values to groupings']
            },
            {
                name: 'Velocity',
                description: 'Amount of work a team completes in a sprint.',
                calculation: 'Sum of story points for completed stories',
                usage: 'Used for sprint planning and release forecasting'
            },
            {
                name: 'Release Planning',
                description: 'High-level planning for product releases.',
                inputs: ['Product backlog', 'Team velocity', 'Sprint length'],
                outputs: ['Release date or scope commitment', 'Feature roadmap']
            }
        ]
    },
    {
        category: 'Backlog Management',
        icon: 'Clipboard',
        items: [
            {
                name: 'Product Backlog Refinement',
                description: 'Ongoing process of reviewing and preparing backlog items.',
                activities: ['Break down large items', 'Add detail and acceptance criteria', 'Re-prioritize items', 'Estimate or re-estimate', 'Remove obsolete items'],
                timeBox: '10% of sprint capacity recommended'
            },
            {
                name: 'MoSCoW Prioritization',
                description: 'Technique for prioritizing requirements.',
                categories: [
                    { name: 'Must Have', description: 'Critical for current delivery' },
                    { name: 'Should Have', description: 'Important but not vital' },
                    { name: 'Could Have', description: 'Desirable if time/resources permit' },
                    { name: 'Won\'t Have', description: 'Explicitly excluded from this release' }
                ]
            },
            {
                name: 'Weighted Shortest Job First (WSJF)',
                description: 'SAFe prioritization technique based on economic value.',
                formula: 'WSJF = Cost of Delay / Job Duration',
                costOfDelay: ['Business Value', 'Time Criticality', 'Risk Reduction / Opportunity Enablement']
            },
            {
                name: 'Story Mapping',
                description: 'Visual technique for organizing user stories.',
                structure: 'Horizontal axis = user journey steps; Vertical axis = priority within each step',
                benefits: ['See the big picture', 'Identify gaps', 'Plan releases', 'Maintain context']
            },
            {
                name: 'Definition of Ready (DoR)',
                description: 'Criteria a backlog item must meet before being pulled into a sprint.',
                examples: ['User story written in proper format', 'Acceptance criteria defined', 'Dependencies identified', 'Estimated by team', 'Small enough for one sprint']
            },
            {
                name: 'Definition of Done (DoD)',
                description: 'Shared understanding of what "complete" means.',
                examples: ['Code written and reviewed', 'Unit tests passing', 'Integration tests passing', 'Documentation updated', 'Deployed to staging', 'PO accepted']
            }
        ]
    },
    {
        category: 'Collaboration & Communication',
        icon: 'MessageCircle',
        items: [
            {
                name: 'Information Radiators',
                description: 'Large, visible displays of key project information.',
                types: ['Kanban boards', 'Burndown charts', 'Build status monitors', 'Team calendars'],
                principle: 'Osmotic communication - information flows passively to all team members'
            },
            {
                name: 'Colocation',
                description: 'Team members sitting together in the same physical space.',
                benefits: ['Faster communication', 'Immediate problem solving', 'Team bonding', 'Osmotic communication'],
                alternatives: 'For remote teams: dedicated chat channels, video conferencing, virtual boards'
            },
            {
                name: 'Daily Standup / Daily Scrum',
                description: '15-minute daily synchronization meeting.',
                format: 'Each person answers: What did I do? What will I do? Any blockers?',
                tips: ['Same time, same place', 'Stand to keep it short', 'Problems raised, not solved', 'Team talks to each other, not to Scrum Master']
            },
            {
                name: 'Retrospectives',
                description: 'Regular reflection on how to become more effective.',
                formats: [
                    { name: 'Start/Stop/Continue', description: 'What should we start, stop, or continue doing?' },
                    { name: 'Mad/Sad/Glad', description: 'Emotional check on sprint experiences' },
                    { name: '4Ls', description: 'Liked, Learned, Lacked, Longed For' },
                    { name: 'Sailboat', description: 'Wind (helps), Anchors (slows), Rocks (risks), Sun (goals)' }
                ]
            },
            {
                name: 'Working Agreements',
                description: 'Team-created guidelines for how they work together.',
                examples: ['Core hours', 'Meeting etiquette', 'Code review expectations', 'Communication preferences']
            }
        ]
    },
    {
        category: 'Technical Practices',
        icon: 'Settings',
        items: [
            {
                name: 'Test-Driven Development (TDD)',
                description: 'Write tests before writing code.',
                cycle: ['Red (write failing test)', 'Green (write minimum code to pass)', 'Refactor (improve code)'],
                benefits: ['Higher code coverage', 'Better design', 'Living documentation', 'Confidence in changes']
            },
            {
                name: 'Behavior-Driven Development (BDD)',
                description: 'Extension of TDD focusing on behavior specification.',
                format: 'Given [context], When [action], Then [outcome]',
                benefits: ['Shared language with business', 'Executable specifications', 'Living documentation']
            },
            {
                name: 'Continuous Integration (CI)',
                description: 'Frequently integrate code changes into shared repository.',
                practices: ['Commit frequently', 'Automated build on each commit', 'Fix broken builds immediately', 'Keep build fast'],
                benefits: ['Early defect detection', 'Reduced integration problems', 'Rapid feedback']
            },
            {
                name: 'Continuous Delivery/Deployment (CD)',
                description: 'Extend CI to automate the release process.',
                continuousDelivery: 'Every change is releasable, deployment is manual decision',
                continuousDeployment: 'Every change automatically deployed to production',
                requirements: ['Comprehensive automated testing', 'Deployment automation', 'Feature flags', 'Monitoring']
            },
            {
                name: 'Pair Programming',
                description: 'Two developers work together at one workstation.',
                roles: ['Driver (writes code)', 'Navigator (reviews, thinks ahead)'],
                benefits: ['Knowledge sharing', 'Better code quality', 'Reduced bus factor', 'Continuous code review']
            },
            {
                name: 'Mob Programming',
                description: 'Whole team works on same thing at same time.',
                setup: 'One computer, whole team, roles rotate frequently',
                benefits: ['Maximum knowledge sharing', 'High-quality solutions', 'Team alignment']
            },
            {
                name: 'Refactoring',
                description: 'Improving code structure without changing behavior.',
                techniques: ['Extract method', 'Rename variable', 'Remove duplication', 'Simplify conditionals'],
                rule: 'Always have tests before refactoring'
            },
            {
                name: 'Technical Debt',
                description: 'Cost of shortcuts or deferred work.',
                types: ['Deliberate (conscious shortcuts)', 'Inadvertent (design mistakes)', 'Bit rot (outdated code)'],
                management: 'Track on backlog, allocate capacity each sprint, pay down continuously'
            }
        ]
    },
    {
        category: 'Metrics & Visualization',
        icon: 'BarChart2',
        items: [
            {
                name: 'Burndown Chart',
                description: 'Shows remaining work vs. time.',
                axes: 'X = time (days), Y = remaining work (story points or hours)',
                interpretation: 'Line above ideal = behind schedule; below = ahead',
                variants: ['Sprint Burndown', 'Release Burndown']
            },
            {
                name: 'Burnup Chart',
                description: 'Shows completed work and total scope over time.',
                axes: 'X = time, Y = story points; Two lines: completed work and total scope',
                benefits: 'Shows scope changes, clearer for release tracking'
            },
            {
                name: 'Cumulative Flow Diagram (CFD)',
                description: 'Shows work items in each state over time.',
                interpretation: 'Width of bands = WIP; horizontal movement = lead time; bottlenecks = widening bands',
                usage: 'Common in Kanban for flow analysis'
            },
            {
                name: 'Control Chart',
                description: 'Shows cycle time for individual items over time.',
                elements: 'Dots for each item, average line, upper/lower control limits',
                usage: 'Identify outliers and process stability'
            },
            {
                name: 'Escaped Defects',
                description: 'Number of defects found by customers (not in testing).',
                goal: 'Minimize to zero',
                action: 'Analyze root cause and improve testing'
            }
        ]
    }
];

// ========================
// AGILE ROLES & RESPONSIBILITIES
// ========================
export const agileRoles = [
    {
        name: 'Product Owner',
        framework: 'Scrum',
        responsibilities: [
            'Owns the product vision and roadmap',
            'Manages and prioritizes the product backlog',
            'Defines user stories and acceptance criteria',
            'Represents stakeholders to the team',
            'Accepts or rejects completed work',
            'Maximizes the value delivered by the team'
        ],
        skills: ['Business acumen', 'Communication', 'Decision-making', 'Stakeholder management', 'Prioritization'],
        antiPatterns: ['Absentee PO', 'Committee PO', 'Scribe PO', 'PO who overrides team estimates']
    },
    {
        name: 'Scrum Master',
        framework: 'Scrum',
        responsibilities: [
            'Facilitates Scrum events',
            'Removes impediments for the team',
            'Coaches the team on Scrum practices',
            'Protects the team from interruptions',
            'Helps the organization adopt Scrum',
            'Promotes continuous improvement'
        ],
        skills: ['Facilitation', 'Coaching', 'Conflict resolution', 'Servant leadership', 'Systems thinking'],
        antiPatterns: ['Scrum Police', 'Secretary', 'Senior Developer', 'Project Manager in disguise']
    },
    {
        name: 'Agile Coach',
        framework: 'Various',
        responsibilities: [
            'Coaches teams and organizations on agile adoption',
            'Mentors Scrum Masters and Product Owners',
            'Facilitates organizational change',
            'Identifies and removes systemic impediments',
            'Trains on agile practices and principles'
        ],
        skills: ['Deep agile expertise', 'Organizational change', 'Facilitation', 'Training', 'Consulting'],
        levels: ['Team Coach', 'Enterprise Coach', 'Technical Coach']
    },
    {
        name: 'Release Train Engineer (RTE)',
        framework: 'SAFe',
        responsibilities: [
            'Facilitates Agile Release Train events',
            'Assists teams in delivering value',
            'Manages risks and dependencies',
            'Drives continuous improvement at program level',
            'Coaches leaders and teams'
        ],
        skills: ['Program management', 'Facilitation', 'Risk management', 'Communication', 'Lean-Agile expertise']
    }
];

// ========================
// AGILE VS PREDICTIVE COMPARISON
// ========================
export const agileVsPredictive = {
    title: 'Agile vs. Predictive Approaches',
    description: 'Understanding when to use each approach based on project characteristics.',
    comparison: [
        {
            aspect: 'Requirements',
            agile: 'Emergent, evolving, discovered through collaboration',
            predictive: 'Defined upfront, changes controlled'
        },
        {
            aspect: 'Planning',
            agile: 'Just-in-time, adaptive, rolling wave',
            predictive: 'Comprehensive upfront planning'
        },
        {
            aspect: 'Delivery',
            agile: 'Incremental, frequent releases, working software',
            predictive: 'Single delivery at project end'
        },
        {
            aspect: 'Customer Involvement',
            agile: 'Continuous collaboration throughout',
            predictive: 'Primarily at beginning and end'
        },
        {
            aspect: 'Change',
            agile: 'Embraced as normal and beneficial',
            predictive: 'Controlled through formal change process'
        },
        {
            aspect: 'Documentation',
            agile: 'Just enough, working software over docs',
            predictive: 'Comprehensive documentation'
        },
        {
            aspect: 'Team Structure',
            agile: 'Cross-functional, self-organizing',
            predictive: 'Role-based, hierarchical'
        },
        {
            aspect: 'Success Measure',
            agile: 'Working product, customer satisfaction, value delivered',
            predictive: 'On time, on budget, meeting requirements'
        }
    ],
    whenToUse: {
        agile: [
            'Requirements unclear or likely to change',
            'Customer wants to be closely involved',
            'Rapid delivery of value is important',
            'Team is experienced and cross-functional',
            'Innovation and creativity needed'
        ],
        predictive: [
            'Requirements are well-defined and stable',
            'Regulatory or compliance requirements',
            'Fixed-price contracts',
            'Team members with specialized roles',
            'Physical product or construction projects'
        ],
        hybrid: [
            'Mix of known and unknown requirements',
            'Need for both flexibility and control',
            'Organization transitioning to agile',
            'Complex projects with multiple components',
            'Vendor-supplied components mixed with custom development'
        ]
    }
};

// ========================
// SERVANT LEADERSHIP
// ========================
export const servantLeadership = {
    title: 'Servant Leadership',
    description: 'A leadership philosophy where the main goal is to serve others, enabling them to perform at their best.',
    principles: [
        { name: 'Listening', description: 'Deeply committed to listening to others intently.' },
        { name: 'Empathy', description: 'Understanding and accepting others as they are.' },
        { name: 'Healing', description: 'Helping to make whole those with whom they come in contact.' },
        { name: 'Awareness', description: 'General awareness, and especially self-awareness.' },
        { name: 'Persuasion', description: 'Relying on persuasion rather than positional authority.' },
        { name: 'Conceptualization', description: 'Ability to dream great dreams and think beyond day-to-day.' },
        { name: 'Foresight', description: 'Understanding lessons from past, realities of present, consequences of decisions.' },
        { name: 'Stewardship', description: 'Holding institutions in trust for the greater good.' },
        { name: 'Commitment to Growth', description: 'Deeply committed to growth of each individual.' },
        { name: 'Building Community', description: 'Seeking to build community among those who work within institutions.' }
    ],
    applicationInAgile: [
        'Shield the team from distractions and impediments',
        'Create a safe environment for experimentation',
        'Help team members grow and develop skills',
        'Facilitate rather than direct',
        'Remove obstacles instead of assigning blame',
        'Trust the team to make decisions'
    ]
};

export default {
    agileFrameworks,
    agilePractices,
    agileRoles,
    agileVsPredictive,
    servantLeadership
};
