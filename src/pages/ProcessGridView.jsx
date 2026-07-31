import React, { useState } from 'react';
import { pmbok6Data } from '../pmbok6Data';
// eslint-disable-next-line no-unused-vars -- motion is used through JSX member tags.
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ProcessGridView = () => {
  const [selectedProcess, setSelectedProcess] = useState(null);

  const processGroups = [
    "Initiating", "Planning", "Executing", "Monitoring & Controlling", "Closing"
  ];

  const knowledgeAreas = [
    { id: "integration", title: "1. Integration", processes: [
      { group: 0, id: "developProjectCharter", name: "1.1 Develop Project Charter" },
      { group: 1, id: "developProjectManagementPlan", name: "1.2 Develop Project Management Plan" },
      { group: 2, id: "directAndManageProjectWork", name: "1.3 Direct and Manage Project Work" },
      { group: 2, id: "manageProjectKnowledge", name: "1.4 Manage Project Knowledge" },
      { group: 3, id: "monitorAndControlProjectWork", name: "1.5 Monitor and Control Project Work" },
      { group: 3, id: "performIntegratedChangeControl", name: "1.6 Perform Integrated Change Control" },
      { group: 4, id: "closeProjectOrPhase", name: "1.7 Close Project or Phase" }
    ]},
    { id: "scope", title: "2. Scope", processes: [
      { group: 1, id: "planScopeManagement", name: "2.1 Plan Scope Management" },
      { group: 1, id: "collectRequirements", name: "2.2 Collect Requirements" },
      { group: 1, id: "defineScope", name: "2.3 Define Scope" },
      { group: 1, id: "createWBS", name: "2.4 Create WBS" },
      { group: 3, id: "validateScope", name: "2.5 Validate Scope" },
      { group: 3, id: "controlScope", name: "2.6 Control Scope" }
    ]},
    { id: "schedule", title: "3. Schedule", processes: [
      { group: 1, id: "planScheduleManagement", name: "3.1 Plan Schedule Management" },
      { group: 1, id: "defineActivities", name: "3.2 Define Activities" },
      { group: 1, id: "sequenceActivities", name: "3.3 Sequence Activities" },
      { group: 1, id: "estimateActivityDurations", name: "3.4 Estimate Activity Durations" },
      { group: 1, id: "developSchedule", name: "3.5 Develop Schedule" },
      { group: 3, id: "controlSchedule", name: "3.6 Control Schedule" }
    ]},
    { id: "cost", title: "4. Cost", processes: [
      { group: 1, id: "planCostManagement", name: "4.1 Plan Cost Management" },
      { group: 1, id: "estimateCosts", name: "4.2 Estimate Costs" },
      { group: 1, id: "determineBudget", name: "4.3 Determine Budget" },
      { group: 3, id: "controlCost", name: "4.4 Control Cost" }
    ]},
    { id: "quality", title: "5. Quality", processes: [
      { group: 1, id: "planQualityManagement", name: "5.1 Plan Quality Management" },
      { group: 2, id: "manageQuality", name: "5.2 Manage Quality" },
      { group: 3, id: "controlQuality", name: "5.3 Control Quality" }
    ]},
    { id: "resource", title: "6. Resource", processes: [
      { group: 1, id: "planResourceManagement", name: "6.1 Plan Resource Management" },
      { group: 1, id: "estimateActivityResources", name: "6.2 Estimate Activity Resources" },
      { group: 2, id: "acquireResources", name: "6.3 Acquire Resources" },
      { group: 2, id: "developTeam", name: "6.4 Develop Team" },
      { group: 2, id: "manageTeam", name: "6.5 Manage Team" },
      { group: 3, id: "controlResources", name: "6.6 Control Resources" }
    ]},
    { id: "communications", title: "7. Communications", processes: [
      { group: 1, id: "planCommunicationsManagement", name: "7.1 Plan Communications Management" },
      { group: 2, id: "manageCommunications", name: "7.2 Manage Communications" },
      { group: 3, id: "monitorCommunications", name: "7.3 Monitor Communications" }
    ]},
    { id: "risk", title: "8. Risk", processes: [
      { group: 1, id: "planRiskManagement", name: "8.1 Plan Risk Management" },
      { group: 1, id: "identifyRisks", name: "8.2 Identify Risks" },
      { group: 1, id: "performQualitativeRiskAnalysis", name: "8.3 Perform Qualitative Risk Analysis" },
      { group: 1, id: "performQuantitativeRiskAnalysis", name: "8.4 Perform Quantitative Risk Analysis" },
      { group: 1, id: "planRiskResponses", name: "8.5 Plan Risk Responses" },
      { group: 2, id: "implementRiskResponses", name: "8.6 Implement Risk Responses" },
      { group: 3, id: "monitorRisks", name: "8.7 Monitor Risks" }
    ]},
    { id: "procurement", title: "9. Procurement", processes: [
      { group: 1, id: "planProcurementManagement", name: "9.1 Plan Procurement Management" },
      { group: 2, id: "conductProcurements", name: "9.2 Conduct Procurements" },
      { group: 3, id: "controlProcurements", name: "9.3 Control Procurements" }
    ]},
    { id: "stakeholder", title: "10. Stakeholder", processes: [
      { group: 0, id: "identifyStakeholders", name: "10.1 Identify Stakeholders" },
      { group: 1, id: "planStakeholderEngagement", name: "10.2 Plan Stakeholder Engagement" },
      { group: 2, id: "manageStakeholderEngagement", name: "10.3 Manage Stakeholder Engagement" },
      { group: 3, id: "monitorStakeholderEngagement", name: "10.4 Monitor Stakeholder Engagement" }
    ]}
  ];

  const handleProcessClick = (processId) => {
    const data = pmbok6Data[processId];
    if (data) {
      setSelectedProcess(data);
    }
  };

  return (
    <div>
      <PageHeader
        number="§ IV"
        kicker="Predictive"
        title="The Process Grid"
        standfirst="Forty-nine processes, set against ten knowledge areas and five process groups."
        note="Carried over from the sixth edition. The current exam no longer tests the grid directly, but it remains the clearest map of predictive delivery. Any process opens to its inputs, tools and outputs."
        image="/art/chapter-process-grid.jpg"
        imageAlt="Ordered mountain paths and bridges leading to a distant pavilion"
        maxim="A clear path need not become a rigid path."
        imagePosition="center bottom"
      />

      <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 custom-scrollbar">
        <table className="min-w-[1000px] w-full border-collapse text-left">
          <thead>
            <tr className="border-y-2 border-ink">
              <th scope="col" className="label align-bottom py-3 pr-6 w-[190px]">
                Knowledge area
              </th>
              {processGroups.map((group, i) => (
                <th key={i} scope="col" className="align-bottom py-3 px-3 w-[calc((100%-190px)/5)]">
                  <span className="numeral text-[11px] font-semibold block mb-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="label block leading-snug">{group}</span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {knowledgeAreas.map((area) => {
              const [num, ...rest] = area.title.split('. ');
              return (
                <tr key={area.id} className="border-b border-rule align-top">
                  <th scope="row" className="py-5 pr-6 font-normal">
                    <span className="flex items-baseline gap-3">
                      <span className="numeral text-[11px] font-semibold shrink-0">
                        {num.padStart(2, '0')}
                      </span>
                      <span className="font-display text-[15px] font-semibold text-ink leading-snug">
                        {rest.join('. ')}
                      </span>
                    </span>
                  </th>

                  {[0, 1, 2, 3, 4].map((groupId) => {
                    const processes = area.processes.filter((p) => p.group === groupId);
                    return (
                      <td key={groupId} className="py-5 px-3 border-l border-rule">
                        <ul className="space-y-2.5">
                          {processes.map((process) => {
                            const [ref, ...label] = process.name.split(' ');
                            return (
                              <li key={process.id}>
                                <button
                                  onClick={() => handleProcessClick(process.id)}
                                  className="group text-left flex items-baseline gap-2 w-full"
                                >
                                  <span className="figure font-text text-[10px] font-semibold
                                                   text-ink-faint shrink-0 pt-px
                                                   group-hover:text-saffron transition-colors">
                                    {ref}
                                  </span>
                                  <span className="font-text text-[13px] leading-snug text-ink-soft
                                                   border-b border-transparent
                                                   group-hover:text-lapis group-hover:border-lapis
                                                   transition-colors">
                                    {label.join(' ')}
                                  </span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ITTOs */}
      <AnimatePresence>
        {selectedProcess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProcess(null)}
              className="absolute inset-0 bg-ink/35"
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.22 }}
              className="plate w-full max-w-4xl max-h-[88vh] relative z-10 flex flex-col
                         shadow-[0_18px_50px_-25px_rgba(26,24,21,0.5)]"
            >
              <div className="px-6 sm:px-10 pt-7 pb-5 border-b border-rule-strong shrink-0">
                <div className="flex items-baseline justify-between gap-6 mb-3">
                  <span className="label">Inputs · Tools &amp; Techniques · Outputs</span>
                  <button
                    onClick={() => setSelectedProcess(null)}
                    aria-label="Close"
                    className="text-ink-faint hover:text-ink transition-colors -mr-1"
                  >
                    <X size={20} />
                  </button>
                </div>
                <h2 className="font-display text-2xl sm:text-[2rem] font-semibold text-ink leading-tight">
                  {selectedProcess.title}
                </h2>
              </div>

              <div className="px-6 sm:px-10 py-8 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
                  {[
                    { head: 'Inputs', items: selectedProcess.inputs, mark: 'text-ink-faint', rule: 'border-rule-strong' },
                    { head: 'Tools & Techniques', items: selectedProcess.tools, mark: 'text-lapis', rule: 'border-lapis/40' },
                    { head: 'Outputs', items: selectedProcess.outputs, mark: 'text-saffron', rule: 'border-saffron/40' },
                  ].map((column) => (
                    <section key={column.head}>
                      <h3 className={`label border-b-2 ${column.rule} pb-2 mb-1 ${column.mark}`}>
                        {column.head}
                      </h3>
                      <ul>
                        {column.items.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-baseline gap-3 py-2.5 border-b border-rule"
                          >
                            <span className={`figure text-[10px] font-text font-semibold shrink-0 w-3.5 ${column.mark}`}>
                              {i + 1}
                            </span>
                            <span className="font-text text-[13.5px] text-ink-soft leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProcessGridView;
