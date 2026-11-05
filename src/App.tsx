import { CRM } from "@/components/atomic-crm/root/CRM";

const App = () => (
  <CRM
    title="Ridgeline Example Roofing CRM"
    currency="USD"
    companySectors={[
      { value: "homeowner", label: "Homeowner" },
      { value: "property-manager", label: "Property manager" },
      { value: "contractor", label: "Contractor" },
    ]}
    dealStages={[
      { value: "new-lead", label: "New lead" },
      { value: "inspection-booked", label: "Inspection booked" },
      { value: "quote-sent", label: "Quote sent" },
      { value: "won", label: "Won" },
      { value: "lost", label: "Lost" },
    ]}
    dealPipelineStatuses={["won"]}
    dealCategories={[
      { value: "repair", label: "Repair" },
      { value: "full-roof", label: "Full roof" },
      { value: "gutters", label: "Gutters" },
    ]}
    noteStatuses={[
      { value: "hot", label: "Hot", color: "#e88b7d" },
      { value: "warm", label: "Warm", color: "#e8cb7d" },
      { value: "cold", label: "Cold", color: "#7dbde8" },
    ]}
    taskTypes={[
      { value: "call", label: "Call" },
      { value: "text", label: "Text" },
      { value: "email", label: "Email" },
      { value: "site-visit", label: "Site visit" },
      { value: "follow-up", label: "Follow-up" },
    ]}
  />
);

export default App;
