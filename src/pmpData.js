
import {
    Users, UserCheck, GitMerge, Calendar, Briefcase,
    Package, BarChart2, AlertTriangle, Heart, MessageCircle,
    Target, Share2, Zap, Shield, RefreshCw, Compass,
    Layers, Anchor, TrendingUp, Award, BookOpen, FileText,
    CheckSquare, ClipboardList, PieChart, Sliders
} from 'lucide-react';

export const principles = [
    {
        id: 'stewardship',
        title: 'Stewardship',
        description: 'Be a diligent, respectful, and caring steward.',
        details: 'Stewardship involves acting responsibly to uphold integrity, care, and trustworthiness while maintaining compliance with internal and external guidelines. It encompasses financial, social, and environmental responsibilities.',
        icon: 'Shield'
    },
    {
        id: 'team',
        title: 'Team',
        description: 'Create a collaborative project team environment.',
        details: 'Project teams are made up of individuals with diverse skills and knowledge. Collaboration fosters a shared team culture, learning, and development, which are essential for delivering value.',
        icon: 'Users'
    },
    {
        id: 'stakeholders',
        title: 'Stakeholders',
        description: 'Effectively engage with stakeholders.',
        details: 'Engage stakeholders proactively and to the degree needed to contribute to project success and customer satisfaction. Engagement strategies should be tailored to the unique needs of each stakeholder.',
        icon: 'MessageCircle'
    },
    {
        id: 'value',
        title: 'Value',
        description: 'Focus on value.',
        details: 'Continually evaluate and adjust project alignment to business objectives and intended benefits and value. Value is the ultimate indicator of project success.',
        icon: 'Target'
    },
    {
        id: 'systems-thinking',
        title: 'Systems Thinking',
        description: 'Recognize, evaluate, and respond to system interactions.',
        details: 'Recognize that a project is a system of interdependent parts. Systems thinking allows the project team to leverage the interactions between project elements and the larger system.',
        icon: 'Share2'
    },
    {
        id: 'leadership',
        title: 'Leadership',
        description: 'Demonstrate leadership behaviors.',
        details: 'Leadership is not limited to a specific role. Effective leadership involves motivating, influencing, coaching, and learning, and can be demonstrated by any team member.',
        icon: 'Award'
    },
    {
        id: 'tailoring',
        title: 'Tailoring',
        description: 'Tailor based on context.',
        details: 'Design the project development approach based on the context of the project, its objectives, stakeholders, governance, and the environment. One size does not fit all.',
        icon: 'Sliders'
    },
    {
        id: 'quality',
        title: 'Quality',
        description: 'Build quality into processes and deliverables.',
        details: 'Maintain a focus on quality that produces deliverables that meet project objectives and align to the needs and uses of stakeholders.',
        icon: 'CheckSquare'
    },
    {
        id: 'complexity',
        title: 'Complexity',
        description: 'Navigate complexity.',
        details: 'Constantly evaluate and navigate complexity so that approaches and plans enable the project team to successfully manage the project lifecycle.',
        icon: 'Layers'
    },
    {
        id: 'risk',
        title: 'Risk',
        description: 'Optimize risk responses.',
        details: 'Continually evaluate exposure to risk, both opportunities and threats, to maximize positive impacts and minimize negative impacts to the project and its outcomes.',
        icon: 'AlertTriangle'
    },
    {
        id: 'adaptability',
        title: 'Adaptability & Resiliency',
        description: 'Embrace adaptability and resiliency.',
        details: 'Build adaptability and resiliency into the organization’s and project team’s approaches to help the project accommodate change, recover from setbacks, and advance the work.',
        icon: 'RefreshCw'
    },
    {
        id: 'change',
        title: 'Change',
        description: 'Enable change to achieve the envisioned future state.',
        details: 'Prepare those impacted for the adoption and sustainment of new and different behaviors and processes required for the transition from the current state to the intended future state.',
        icon: 'TrendingUp'
    }
];

export const performanceDomains = [
    {
        id: 'stakeholders',
        title: 'Stakeholders',
        description: 'Engaging and managing relationships with all individuals, groups, or organizations impacted by the project.',
        outcomes: [
            'A productive working relationship with stakeholders throughout the project.',
            'Stakeholder agreement with project objectives.',
            'Stakeholders who are project beneficiaries are supportive and satisfied.',
            'Stakeholders who may oppose the project or its deliverables do not negatively impact project results.'
        ],
        details: [
            'Identify stakeholders early and continuously.',
            'Analyze stakeholder influence, interest, and impact.',
            'Engage stakeholders to understand needs and expectations.',
            'Monitor stakeholder relationships and adjust strategies.'
        ],
        icon: 'Users'
    },
    {
        id: 'team',
        title: 'Team',
        description: 'Creating and leading a high-performing project team.',
        outcomes: [
            'Shared ownership.',
            'A high-performing team.',
            'Applicable leadership and other interpersonal skills demonstrated by all team members.'
        ],
        details: [
            'Foster a collaborative team environment.',
            'Develop team skills and competencies.',
            'Provide leadership and support.',
            'Manage conflict and facilitate communication.'
        ],
        icon: 'UserCheck'
    },
    {
        id: 'dev-approach',
        title: 'Development Approach & Life Cycle',
        description: 'Selecting the appropriate development approach and defining the project lifecycle.',
        outcomes: [
            'Development approaches that are consistent with project deliverables.',
            'A project life cycle consisting of phases that connect the delivery of business and stakeholder value.',
            'A project life cycle that facilitates the delivery cadence and development approach.'
        ],
        details: [
            'Choose between predictive, adaptive (agile), or hybrid approaches.',
            'Tailor the lifecycle to the project context.',
            'Align cadence and phases with value delivery.'
        ],
        icon: 'GitMerge'
    },
    {
        id: 'planning',
        title: 'Planning',
        description: 'Setting up the project game plan to ensure organized progress.',
        outcomes: [
            'The project moves in an organized, coordinated, and deliberate manner.',
            'There is a holistic approach to delivering the project outcomes.',
            'Evolving information is elaborated to produce the deliverables and outcomes.',
            'Time spent planning is appropriate for the situation.'
        ],
        details: [
            'Develop comprehensive plans for scope, schedule, and cost.',
            'Plan for quality, resources, and communications.',
            'Continuously adapt plans as the project evolves.'
        ],
        icon: 'Calendar'
    },
    {
        id: 'project-work',
        title: 'Project Work',
        description: 'Executing tasks, managing resources, and facilitating learning.',
        outcomes: [
            'Efficient and effective project performance.',
            'Project processes are appropriate for the project and the environment.',
            'Appropriate communication with stakeholders.',
            'Efficient management of physical resources.',
            'Effective management of procurements.',
            'Improved team capability due to continuous learning.'
        ],
        details: [
            'Manage physical resources and procurement.',
            'Maintain project knowledge and lessons learned.',
            'Ensure effective communication and engagement.',
            'Monitor and control project work.'
        ],
        icon: 'Briefcase'
    },
    {
        id: 'delivery',
        title: 'Delivery',
        description: 'Delivering scope and value, ensuring outputs meet quality standards.',
        outcomes: [
            'Projects contribute to business objectives and advancement of strategy.',
            'Projects realize the outcomes they were initiated to deliver.',
            'Project benefits are realized in the time frame in which they were planned.',
            'The project team has a clear understanding of requirements.',
            'Stakeholders accept and are satisfied with project deliverables.'
        ],
        details: [
            'Focus on value delivery and benefits realization.',
            'Ensure deliverables meet quality requirements.',
            'Manage scope and requirements changes.'
        ],
        icon: 'Package'
    },
    {
        id: 'performance',
        title: 'Performance',
        description: 'Evaluating project performance and monitoring progress.',
        outcomes: [
            'A reliable understanding of the status of the project.',
            'Actionable data to facilitate decision making.',
            'Timely and appropriate actions to keep project performance on track.',
            'Achieving targets and generating business value.'
        ],
        details: [
            'Define key performance indicators (KPIs).',
            'Measure progress against baselines.',
            'Use data to make informed decisions.',
            'Report status to stakeholders.'
        ],
        icon: 'BarChart2'
    },
    {
        id: 'uncertainty',
        title: 'Uncertainty & Ambiguity',
        description: 'Managing risks, opportunities, and overall uncertainty.',
        outcomes: [
            'An awareness of the environment in which the project occurs.',
            'Proactively exploring and responding to uncertainty.',
            'An awareness of the interdependence of multiple variables on the project.',
            'The capacity to anticipate threats and opportunities.',
            'Project delivery with little or no negative impact from unforeseen events.'
        ],
        details: [
            'Identify and assess risks and opportunities.',
            'Plan risk responses (avoid, mitigate, transfer, accept).',
            'Navigate ambiguity and complexity.',
            'Build resilience and adaptability.'
        ],
        icon: 'AlertTriangle'
    }
];

export const models = [
    {
        category: 'Leadership',
        items: [
            {
                name: 'Situational Leadership',
                description: 'Adapting leadership style to the readiness of the team member.',
                details: 'Proposed by Hersey and Blanchard, this model suggests that there is no single "best" style of leadership. Effective leadership is task-relevant, and the most successful leaders are those who adapt their leadership style to the "performance readiness" (ability and willingness) of the individual or group they are attempting to lead or influence.'
            },
            {
                name: 'OSCAR',
                description: 'Coaching model: Outcome, Situation, Choices/Consequences, Actions, Review.',
                details: 'A framework for coaching and mentoring. Outcome: What is the desired result? Situation: What is the current state? Choices/Consequences: What options are available and what are their impacts? Actions: What specific steps will be taken? Review: How will progress be monitored and evaluated?'
            }
        ]
    },
    {
        category: 'Communication',
        items: [
            {
                name: 'Cross-Cultural Communication',
                description: 'Understanding how culture affects communication.',
                details: 'Involves understanding how cultural differences (language, gestures, values, norms) impact the exchange of information. Effective project managers must navigate these differences to ensure clear understanding and avoid misinterpretation in diverse teams.'
            },
            {
                name: 'Gulf of Execution/Evaluation',
                description: 'The gap between a user\'s goal and the system\'s capability.',
                details: 'A concept from Don Norman. The Gulf of Execution is the difference between the intentions of the users and what the system allows them to do. The Gulf of Evaluation is the difficulty of assessing the state of the system and how well the artifact supports the discovery and interpretation of that state.'
            }
        ]
    },
    {
        category: 'Motivation',
        items: [
            {
                name: 'Maslow\'s Hierarchy',
                description: 'Physiological, Safety, Social, Esteem, Self-Actualization.',
                details: 'A motivational theory in psychology comprising a five-tier model of human needs. Needs lower down in the hierarchy must be satisfied before individuals can attend to needs higher up. From bottom to top: Physiological, Safety, Love/Belonging, Esteem, and Self-Actualization.'
            },
            {
                name: 'Herzberg\'s Hygiene-Motivation',
                description: 'Hygiene factors prevent dissatisfaction; motivators cause satisfaction.',
                details: 'Also known as the Two-Factor Theory. "Hygiene" factors (salary, job security, working conditions) do not motivate if present, but cause dissatisfaction if absent. "Motivators" (recognition, responsibility, growth) create satisfaction and motivation.'
            },
            {
                name: 'McGregor\'s X and Y',
                description: 'Theory X (workers need direction) vs Theory Y (workers are self-motivated).',
                details: 'Theory X assumes employees are lazy, dislike work, and need constant direction. Theory Y assumes employees are self-motivated, ambitious, and exercise self-control. Management style depends on which theory is believed to be true for the team.'
            }
        ]
    },
    {
        category: 'Change',
        items: [
            {
                name: 'ADKAR',
                description: 'Awareness, Desire, Knowledge, Ability, Reinforcement.',
                details: 'A goal-oriented change management model that guides individual and organizational change. It represents the five outcomes an individual must achieve for change to be successful: Awareness of the need for change, Desire to support the change, Knowledge of how to change, Ability to demonstrate skills, and Reinforcement to make the change stick.'
            },
            {
                name: 'Kotter\'s 8 Steps',
                description: 'Process for leading change in an organization.',
                details: 'A systematic approach to change management: 1. Create Urgency, 2. Form a Powerful Coalition, 3. Create a Vision for Change, 4. Communicate the Vision, 5. Remove Obstacles, 6. Create Short-Term Wins, 7. Build on the Change, 8. Anchor the Changes in Corporate Culture.'
            }
        ]
    },
    {
        category: 'Complexity',
        items: [
            {
                name: 'Cynefin Framework',
                description: 'Categorizing problems as Simple, Complicated, Complex, or Chaotic.',
                details: 'A decision-making framework that helps leaders determine the prevailing context so they can make appropriate choices. Domains: Clear (Simple) - Best Practice; Complicated - Good Practice; Complex - Emergent Practice; Chaotic - Novel Practice.'
            },
            {
                name: 'Stacey Matrix',
                description: 'Selecting management actions based on agreement and certainty.',
                details: 'A model to select the appropriate management actions in a complex adaptive system based on the degree of certainty and the level of agreement. It helps in choosing between predictive, adaptive, or hybrid approaches.'
            }
        ]
    }
];

export const methods = [
    {
        category: 'Data Gathering',
        items: [
            { name: 'Benchmarking', description: 'Comparing actual or planned products, processes, and practices to those of comparable organizations to identify best practices, generate ideas for improvement, and provide a basis for measuring performance.', details: 'Benchmarking involves looking outside the project or organization to see how others achieve high performance. It can be internal (within the same org) or external (competitors or other industries).' },
            { name: 'Brainstorming', description: 'A general data-gathering and creativity technique that can be used to identify risks, ideas, or solutions to issues by using a group of team members or subject matter experts.', details: 'Sessions are typically facilitated to encourage free-flowing ideas without immediate criticism. Techniques like "brain writing" or "nominal group technique" can structure the process.' },
            { name: 'Checksheets', description: 'A tally sheet that can be used as a checklist when gathering data.', details: 'Used to organize facts in a manner that will facilitate the effective collection of useful data about a potential quality problem. They are especially useful for gathering attributes data while performing inspections to identify defects.' },
            { name: 'Focus Groups', description: 'Bringing together prequalified stakeholders and subject matter experts to learn about their expectations and attitudes about a proposed product, service, or result.', details: 'A trained moderator guides the group through an interactive discussion designed to be more conversational than a one-on-one interview.' },
            { name: 'Interviews', description: 'A formal or informal approach to elicit information from stakeholders by talking to them directly.', details: 'Can be structured (prepared questions) or unstructured. Useful for obtaining confidential information or detailed technical data.' },
            { name: 'Market Research', description: 'Examination of industry and specific vendor capabilities.', details: 'Used to understand the market conditions, trends, and availability of goods and services. Essential for procurement planning and validating business cases.' },
            { name: 'Surveys', description: 'Written sets of questions designed to quickly accumulate information from a large number of respondents.', details: 'Efficient for gathering data from a geographically dispersed audience. Questions should be carefully designed to avoid ambiguity and bias.' }
        ]
    },
    {
        category: 'Data Analysis',
        items: [
            { name: 'Alternatives Analysis', description: 'A technique used to evaluate identified options in order to select the options or approaches to use to execute and perform the work of the project.', details: 'Used in many processes (e.g., defining scope, estimating resources) to decide between different ways of meeting requirements.' },
            { name: 'Cost-Benefit Analysis', description: 'A financial analysis tool used to estimate the strengths and weaknesses of alternatives in order to determine the best alternative in terms of benefits provided.', details: 'Compares the expected costs of a project or decision to the potential benefits (revenue, efficiency, etc.). If benefits > costs, the decision is generally favorable.' },
            { name: 'Earned Value Analysis', description: 'An analysis method that uses a set of measures associated with scope, schedule, and cost to determine the cost and schedule performance of a project.', details: 'Compares the Planned Value (PV), Earned Value (EV), and Actual Cost (AC) to calculate variances (SV, CV) and indices (SPI, CPI).' },
            { name: 'Root Cause Analysis', description: 'An analytical technique used to determine the basic underlying reason that causes a variance, defect, or risk.', details: 'A common tool is the "5 Whys" or the Fishbone (Ishikawa) diagram. The goal is to address the root cause rather than just treating symptoms.' },
            { name: 'SWOT Analysis', description: 'Analysis of strengths, weaknesses, opportunities, and threats of an organization, project, or option.', details: 'Strengths and Weaknesses are internal factors. Opportunities and Threats are external factors. Used for strategic planning and risk identification.' },
            { name: 'Trend Analysis', description: 'An analytical technique that uses mathematical models to forecast future outcomes based on historical results.', details: 'Used to monitor project performance over time and determine if performance is improving or deteriorating.' }
        ]
    },
    {
        category: 'Estimating',
        items: [
            { name: 'Affinity Grouping', description: 'The process of classifying items into similar categories or collections.', details: 'Often used with sticky notes on a wall. Useful for organizing large amounts of data (e.g., requirements, ideas) into natural relationships.' },
            { name: 'Analogous Estimating', description: 'A technique for estimating the duration or cost of an activity or a project using historical data from a similar activity or project.', details: 'Uses values such as scope, cost, budget, and duration or measures of scale (e.g., size, weight) from a previous, similar project as the basis for estimating the same parameter or measure for a current project. Less accurate but faster/cheaper.' },
            { name: 'Function Points', description: 'An estimate of the amount of business functionality an information system provides to a user.', details: 'Used in software development to size the software based on the number and complexity of inputs, outputs, queries, files, and interfaces.' },
            { name: 'Parametric Estimating', description: 'An estimating technique in which an algorithm is used to calculate cost or duration based on historical data and project parameters.', details: 'Uses a statistical relationship between historical data and other variables (e.g., square footage in construction) to calculate an estimate. More accurate than analogous if data is reliable.' },
            { name: 'Story Points', description: 'A unit of measure used in agile project management techniques to estimate the overall effort required to fully implement a user story.', details: 'Relative sizing based on complexity, risk, and effort, rather than absolute time (hours). Often uses the Fibonacci sequence.' },
            { name: 'Three-Point Estimating', description: 'A technique used to estimate cost or duration by applying an average or weighted average of optimistic, pessimistic, and most likely estimates.', details: 'Improves accuracy by considering uncertainty. Triangular Distribution: (O+M+P)/3. Beta (PERT) Distribution: (O+4M+P)/6.' }
        ]
    },
    {
        category: 'Meetings & Events',
        items: [
            { name: 'Backlog Refinement', description: 'Progressive elaboration of the content of the backlog and (re)prioritization of work items.', details: 'Also known as backlog grooming. The team reviews items to ensure they are clear, estimated, and ready for upcoming iterations.' },
            { name: 'Daily Standup', description: 'A brief, daily collaboration meeting in which the team reviews progress from the previous day, declares intentions for the current day, and highlights any obstacles.', details: 'Time-boxed to 15 minutes. Focuses on coordination and blocker removal, not detailed problem solving.' },
            { name: 'Iteration Planning', description: 'A meeting to clarify the details of the backlog items, acceptance criteria, and work effort required to meet an upcoming iteration commitment.', details: 'The team selects items from the backlog to work on during the iteration and plans how to complete them.' },
            { name: 'Retrospective', description: 'A workshop conducted to explore, adapt, and improve the process and product.', details: 'Held at the end of an iteration or phase. The team reflects on what went well, what didn\'t, and what to improve next time.' },
            { name: 'Risk Review', description: 'A meeting to examine and document the effectiveness of risk responses and identify new risks.', details: 'Regularly scheduled to reassess the risk register, close outdated risks, and evaluate trends.' },
            { name: 'Sprint Review', description: 'A meeting held at the end of a sprint to inspect the increment and adapt the product backlog if needed.', details: 'The team demonstrates the work completed to stakeholders and gathers feedback.' }
        ]
    }
];

export const artifacts = [
    {
        category: 'Strategy',
        items: [
            { name: 'Business Case', description: 'A documented economic feasibility study used to establish validity of the benefits of a selected component lacking sufficient definition and that is used as a basis for the authorization of further project management activities.', details: 'Explains "Why are we doing this?" and justifies the investment.' },
            { name: 'Project Charter', description: 'A document issued by the project initiator or sponsor that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources to project activities.', details: 'The "birth certificate" of the project. Contains high-level requirements, risks, stakeholders, and the PM\'s authority.' },
            { name: 'Roadmap', description: 'A high-level visual summary that maps out the vision and direction of the product offering over time.', details: 'Shows the strategic evolution of the product or project, often grouped by themes or milestones.' },
            { name: 'Vision Statement', description: 'A concise, high-level description of the future state of the product or project.', details: 'Inspires the team and stakeholders by describing the ultimate goal and value.' }
        ]
    },
    {
        category: 'Logs & Registers',
        items: [
            { name: 'Assumption Log', description: 'A project document used to record all assumptions and constraints throughout the project life cycle.', details: 'Assumptions are things believed to be true without proof. Constraints are limitations (budget, time, etc.).' },
            { name: 'Backlog', description: 'An ordered list of work to be done.', details: 'Can be a Product Backlog (all desired work) or Iteration Backlog (work for the current sprint). Dynamic and constantly reprioritized.' },
            { name: 'Change Log', description: 'A comprehensive list of changes made during the project.', details: 'Tracks all change requests, their status (approved, rejected, pending), and their impact on the project.' },
            { name: 'Issue Log', description: 'A project document where information about issues is recorded and monitored.', details: 'An issue is a risk that has happened. The log tracks the owner, resolution plan, and status.' },
            { name: 'Risk Register', description: 'A repository in which outputs of risk management processes are recorded.', details: 'Contains details of identified risks, their analysis (probability/impact), and planned responses.' },
            { name: 'Stakeholder Register', description: 'A project document including the identification, assessment, and classification of project stakeholders.', details: 'Lists names, roles, interests, influence, and communication requirements.' }
        ]
    },
    {
        category: 'Plans',
        items: [
            { name: 'Communications Plan', description: 'A component of the project management plan that describes how, when, and by whom information about the project will be administered and disseminated.', details: 'Defines the audience, message, method, frequency, and owner of communications.' },
            { name: 'Cost Plan', description: 'Describes how the project costs will be planned, structured, and controlled.', details: 'Includes units of measure, level of precision, reporting formats, and control thresholds.' },
            { name: 'Project Management Plan', description: 'The document that describes how the project will be executed, monitored, and controlled.', details: 'The master plan that integrates all subsidiary plans and baselines.' },
            { name: 'Quality Plan', description: 'Describes how applicable policies, procedures, and guidelines will be implemented to achieve the quality objectives.', details: 'Defines quality standards, metrics, and assurance/control activities.' },
            { name: 'Resource Plan', description: 'Provides guidance on how project resources should be categorized, allocated, managed, and released.', details: 'Covers both physical resources (equipment, materials) and team resources (people).' },
            { name: 'Risk Plan', description: 'Describes how risk management activities will be structured and performed.', details: 'Defines risk methodology, roles and responsibilities, budgeting, and timing.' },
            { name: 'Scope Plan', description: 'Describes how the scope will be defined, developed, monitored, controlled, and validated.', details: 'Includes the process for creating the WBS and managing scope creep.' },
            { name: 'Schedule Plan', description: 'Establishes the criteria and the activities for developing, monitoring, and controlling the schedule.', details: 'Defines scheduling methodology, tools, and accuracy levels.' }
        ]
    },
    {
        category: 'Hierarchy Charts',
        items: [
            { name: 'Organizational Breakdown Structure', description: 'A hierarchical representation of the project organization, which illustrates the relationship between project activities and the organizational units that will perform those activities.', details: 'Shows "who does what" by department or team.' },
            { name: 'Product Breakdown Structure', description: 'A hierarchical structure reflecting the components and assemblies of a product.', details: 'Breaks down the physical product into its constituent parts.' },
            { name: 'Resource Breakdown Structure', description: 'A hierarchical representation of resources by category and type.', details: 'Useful for resource leveling and analyzing resource utilization.' },
            { name: 'Work Breakdown Structure (WBS)', description: 'A hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives and create the required deliverables.', details: 'The cornerstone of scope management. Breaks work down into manageable "work packages".' }
        ]
    },
    {
        category: 'Visual Data',
        items: [
            { name: 'Affinity Diagram', description: 'A technique that allows large numbers of ideas to be classified into groups for review and analysis.', details: 'Visually groups related items to find patterns.' },
            { name: 'Burndown Chart', description: 'A graphic representation of work remaining versus time.', details: 'Common in Agile. Shows if the team is on track to complete the work by the end of the iteration.' },
            { name: 'Gantt Chart', description: 'A bar chart that provides a schedule information where activities are listed on the vertical axis, dates are shown on the horizontal axis, and activity durations are shown as horizontal bars placed according to start and finish dates.', details: 'The classic project schedule view. Shows dependencies and critical path.' },
            { name: 'Flow Chart', description: 'The depiction in a diagram format of the inputs, process actions, and outputs of one or more processes within a system.', details: 'Used to understand and improve processes.' },
            { name: 'Kanban Board', description: 'A visualization tool that enables improvements to the flow of work by making bottlenecks visible.', details: 'Uses columns (e.g., To Do, In Progress, Done) to track work items.' },
            { name: 'Scatter Diagram', description: 'A graph that shows the relationship between two variables.', details: 'Used in quality management to see if a change in one variable affects another (correlation).' },
            { name: 'S-Curve', description: 'A graph that displays cumulative costs over a specific time period.', details: 'Typically forms an "S" shape (slow start, steep middle, slow finish). Used to compare planned vs. actual performance.' },
            { name: 'Value Stream Map', description: 'A lean enterprise technique used to document, analyze, and improve the flow of information or materials required to produce a product or service for a customer.', details: 'Identifies value-added vs. non-value-added steps (waste).' }
        ]
    }
];
