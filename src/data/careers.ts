export type Job = {
  slug: string;
  title: string;
  department: "Design" | "Architecture" | "Projects" | "Visualization" | "Client Services";
  type: "Full-time" | "Internship";
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export const JOBS: Job[] = [
  {
    slug: "senior-interior-designer",
    title: "Senior Interior Designer",
    department: "Design",
    type: "Full-time",
    location: "Gulshan-2 studio",
    experience: "5+ years",
    summary: "Lead residential projects from brief to handover and mentor two junior designers.",
    responsibilities: [
      "Run client meetings and develop design concepts",
      "Produce layouts, material palettes and working drawings",
      "Coordinate with 3D, workshop and site teams",
      "Review junior designers' drawings and BOQs",
    ],
    requirements: [
      "Degree in Interior Design or Architecture",
      "Strong AutoCAD and SketchUp skills",
      "A portfolio of completed residential projects",
      "Clear communication in Bangla and English",
    ],
  },
  {
    slug: "junior-architect",
    title: "Junior Architect",
    department: "Architecture",
    type: "Full-time",
    location: "Gulshan-2 studio",
    experience: "1–3 years",
    summary: "Support façade, residential and approval-drawing work across our architecture projects.",
    responsibilities: [
      "Prepare architectural drawings and approval sets",
      "Build 3D massing and façade studies",
      "Coordinate drawings with structural and MEP engineers",
      "Join site visits and record progress",
    ],
    requirements: [
      "B.Arch from a recognised university",
      "AutoCAD, Revit or ArchiCAD",
      "Familiarity with Dhaka building rules is a plus",
    ],
  },
  {
    slug: "site-engineer",
    title: "Site Engineer (Interiors)",
    department: "Projects",
    type: "Full-time",
    location: "Project sites across Dhaka",
    experience: "2–4 years",
    summary: "Manage day-to-day site work, quality and safety on two to three concurrent projects.",
    responsibilities: [
      "Supervise civil, electrical, plumbing and ceiling works",
      "Check material quality on delivery",
      "Maintain the weekly programme and progress reports",
      "Prepare snag lists and support handover",
    ],
    requirements: [
      "Diploma or B.Sc. in Civil Engineering",
      "Experience on interior fit-out sites",
      "Motorbike licence preferred",
    ],
  },
  {
    slug: "3d-visualizer",
    title: "3D Visualizer",
    department: "Visualization",
    type: "Full-time",
    location: "Gulshan-2 studio (hybrid)",
    experience: "2+ years",
    summary: "Create photoreal still renders and 360° walkthroughs for residential and commercial projects.",
    responsibilities: [
      "Model and render interiors from CAD drawings",
      "Create material and lighting variations",
      "Produce 360° panoramas and short animations",
    ],
    requirements: [
      "3ds Max with V-Ray or Corona, or equivalent",
      "Strong eye for lighting and composition",
      "A portfolio of interior renders",
    ],
  },
  {
    slug: "design-intern",
    title: "Design Intern (6 months)",
    department: "Design",
    type: "Internship",
    location: "Gulshan-2 studio",
    experience: "Final-year students",
    summary: "Learn the full design-and-build cycle alongside our residential team. Paid internship.",
    responsibilities: [
      "Assist with drawings, mood boards and sampling",
      "Maintain the material library",
      "Join client meetings and site visits",
    ],
    requirements: [
      "Final-year Interior Design or Architecture student",
      "Basic AutoCAD and SketchUp",
      "Curiosity and attention to detail",
    ],
  },
];

export const PERKS = [
  { title: "Real projects from day one", text: "Work on live client projects with mentoring from senior designers." },
  { title: "Learning budget", text: "Annual allowance for courses, software and design books." },
  { title: "Two festival bonuses", text: "Eid bonuses plus a performance bonus at year end." },
  { title: "Health cover", text: "Group health insurance for you and your immediate family." },
  { title: "Studio lunches", text: "Lunch together every working day at the studio." },
  { title: "Study tours", text: "An annual design trip — recently to Kolkata and Bangkok." },
];
