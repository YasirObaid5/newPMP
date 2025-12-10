import React, { useState } from 'react';
import { pmbok6Data } from '../pmbok6Data';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Layers, Settings, FileText, Database } from 'lucide-react';

const ProcessGridView = () => {
  const [selectedProcess, setSelectedProcess] = useState(null);

  const processGroups = [
    "1. Initiating", "2. Planning", "3. Executing", "4. Monitoring & Controlling", "5. Closing"
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
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Predictive <span className="text-purple-600">Process Grid</span>
        </h1>
        <p className="text-slate-600 max-w-3xl">
          The PMBOK 6th Edition framework. Click any process to explore its Inputs, Tools & Techniques, and Outputs (ITTOs).
        </p>
      </header>

      <div className="overflow-x-auto pb-8">
        <div className="min-w-[1200px] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-[200px_repeat(5,1fr)] bg-slate-800 text-white font-bold text-sm uppercase tracking-wider">
            <div className="p-4 border-r border-slate-700 flex items-center justify-center bg-white text-slate-900 border-b border-slate-200">
              Knowledge Areas
            </div>
            {processGroups.map((group, i) => (
              <div key={i} className="p-4 text-center border-r border-slate-700 last:border-r-0 flex items-center justify-center">
                {group}
              </div>
            ))}
          </div>

          {/* Grid Content */}
          {knowledgeAreas.map((area, i) => (
            <div key={area.id} className="grid grid-cols-[200px_repeat(5,1fr)] border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
              {/* Knowledge Area Header */}
              <div className="p-4 font-bold text-slate-700 text-sm bg-slate-50 border-r border-slate-200 flex items-center">
                {area.title}
              </div>

              {/* Process Cells */}
              {[0, 1, 2, 3, 4].map((groupId) => {
                const processes = area.processes.filter(p => p.group === groupId);
                return (
                  <div key={groupId} className="p-3 border-r border-slate-100 last:border-r-0 flex flex-col gap-2">
                    {processes.map((process) => (
                      <button
                        key={process.id}
                        onClick={() => handleProcessClick(process.id)}
                        className="text-left text-xs font-medium p-2 rounded-lg bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-600 hover:text-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                      >
                        {process.name}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProcess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProcess(null)}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl relative z-10 flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{selectedProcess.title}</h2>
                  <p className="text-slate-500 text-sm mt-1">Process Details & ITTOs</p>
                </div>
                <button 
                  onClick={() => setSelectedProcess(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Inputs */}
                  <div className="bg-blue-50 rounded-xl border border-blue-100 overflow-hidden">
                    <div className="bg-blue-100/50 p-4 border-b border-blue-100 flex items-center gap-2">
                      <Database size={18} className="text-blue-600" />
                      <h3 className="font-bold text-blue-800">Inputs</h3>
                    </div>
                    <ul className="p-4 space-y-3">
                      {selectedProcess.inputs.map((item, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="bg-purple-50 rounded-xl border border-purple-100 overflow-hidden">
                    <div className="bg-purple-100/50 p-4 border-b border-purple-100 flex items-center gap-2">
                      <Settings size={18} className="text-purple-600" />
                      <h3 className="font-bold text-purple-800">Tools & Techniques</h3>
                    </div>
                    <ul className="p-4 space-y-3">
                      {selectedProcess.tools.map((item, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outputs */}
                  <div className="bg-green-50 rounded-xl border border-green-100 overflow-hidden">
                    <div className="bg-green-100/50 p-4 border-b border-green-100 flex items-center gap-2">
                      <FileText size={18} className="text-green-600" />
                      <h3 className="font-bold text-green-800">Outputs</h3>
                    </div>
                    <ul className="p-4 space-y-3">
                      {selectedProcess.outputs.map((item, i) => (
                        <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
