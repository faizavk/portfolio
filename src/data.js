export const profile = {
  name: "Faiza V K",
  place: "Bengaluru",
  school: "RV Institute of Technology and Management",
  degree: "B.E. Information Science and Engineering",
  years: "2023–2027",
  cgpa: "9.52/10",
  cgpaNote: "(As of semester 6)",
  email: "faizafaiyazvk@gmail.com",
  phone: "+91 8105575119",
  github: "https://github.com/faizavk",
  linkedin: "https://www.linkedin.com/in/faizavk",
  resume: "/Faiza_VK_Resume.pdf",
  updated: "November 2026",
};

export const languages = [
  {
    name: "Java",
    use: "Data structures, algorithms, and the assessments I set for The Coder's Club. If the round is a problem set, this is the language. The projects on this site are not.",
  },
  {
    name: "Python",
    use: "The Hadoop pipeline, Spectus, Elenchus, Aether, FinOps, and AedesWatch. If it parses, predicts, or serves an API, I reach for Python first.",
  },
  {
    name: "Go",
    use: "Only the Raft store. Leader election and RPC are a bad fit for the Python I use everywhere else.",
  },
  {
    name: "JavaScript",
    use: "Smart Campus is JavaScript on both sides, React and Express. Aether's workbench is React and TypeScript. FinOps puts a React dashboard on a Flask API. Spectus is plain HTML, CSS, and JavaScript.",
  },
];

export const experience = [
  {
    when: "Sep 2026 – now",
    role: "Development intern",
    org: "ArtIntele",
    detail:
      "Development intern, shipping assigned features in React through Git review.",
  },
  {
    when: "Aug 2025 – now",
    role: "Technical content head",
    org: "The Coder's Club, RVITM",
    detail:
      "I set the club's data-structures papers in Java, and I review the full-stack projects people actually submit.",
  },
  {
    when: "Apr 2026 – Jun 2026",
    role: "Section leader",
    org: "Code in Place, Stanford University",
    detail:
      "Selected to teach a section of Stanford's global intro course and to mark the code, not just talk about it.",
  },
  {
    when: "Oct 2023 – Jan 2024",
    role: "Research intern",
    org: "The Business Sentinel, Bengaluru",
    detail:
      "Turned AI and deep-tech market movement into dashboards the sales team used.",
  },
];

export const publications = [
  {
    label: "Springer Nature · accepted, in press",
    title: "Introduction to AI in Industry 4.0",
    text: "Scopus-indexed chapter.",
  },
  {
    label: "Springer Nature · accepted, in press",
    title:
      "Exploring Practical Applications of AI in Additive Manufacturing through Case Studies",
    text: "Scopus-indexed chapter.",
  },
  {
    label: "Coursework certificate · 2026",
    title: "Cloud Computing for Data Science",
    text: "University of Pittsburgh on Coursera.",
  },
  {
    label: "Coursework certificate · 2025",
    title: "Basics of Networking",
    text: "Cisco Networking Academy.",
  },
  {
    label: "Hackathon · 2025",
    title: "IndiAignite",
    text: "NashaMukt AI.",
  },
  {
    label: "Hackathon · 2025",
    title: "ISRO Bharatiya Antariksh Hackathon",
    text: "Air-quality data.",
  },
  {
    label: "Open source · 2026",
    title: "malariagen-data and EduAid",
    text: "malariagen/malariagen-data and AOSSIE-Org/EduAid.",
  },
];

export const projects = [
  {
    slug: "hadoop-logs",
    image: "/images/hadoop.svg",
    imageAlt: "Three servers beside a stack of log lines",
    title: "Log signatures in a Hadoop cluster",
    kicker: "Log and telemetry analytics",
    stack: ["Python", "Apache Cassandra", "Apache Spark", "Docker"],
    status: "Batch analysis",
    primary: true,
    summary:
      "978 Hadoop logs, 180,896 events, checked in Cassandra and again in Spark. A network cut leaves a fingerprint. A full disk does not.",
    paragraphs: [
      "The source is the LogHub Hadoop set: container logs from WordCount and PageRank on a five-machine cluster. The runs are labeled, including network disconnection, a full disk, and killed tasks. A Python job parsed 978 of those logs and wrote 180,896 events into Cassandra.",
      "The tables follow the questions the demo asks, rather than a generic event schema I might want later. One table rolls events up by scenario. One buckets errors by hour, so a spike is a query instead of a chart I have to stare at. One keeps the raw line, so a count can be opened back into the log that produced it. I ran the scenario totals a second time in Spark. The two counts agreed.",
    ],
    table: {
      caption: "What the labeled runs actually contain",
      columns: ["Run", "In the logs"],
      rows: [
        [
          "Network disconnection",
          "ResourceManager contact errors, lease-renewal failures, and address changes",
        ],
        ["Normal", "Those three are absent"],
        ["Disk full", "Does not carry the network-disconnection signature"],
        ["Killed tasks", "The count does not carry that signature either"],
      ],
    },
    after: [
      "A killed-task counter is a bad proxy for “the network did this.” Disk-full runs fail in the labels and still do not produce the signature. That split is the result. The pipeline is how I got a number I can stand behind.",
    ],
  },
  {
    slug: "smart-campus",
    image: "/images/campus.svg",
    imageAlt: "A low campus building and a clock",
    title: "Smart Campus",
    kicker: "College system",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    status: "Campus system",
    primary: true,
    summary:
      "A six-digit attendance code dies in ten minutes. The timetable refuses a double-booked room. The copilot answers from MongoDB, not from a paid model.",
    links: [{ label: "Code on GitHub", href: "https://github.com/faizavk/smart-campus" }],
    paragraphs: [
      "Student, faculty, and admin each get a dashboard, and the role is enforced in Express middleware, not by a flag the browser can flip. Faculty generate a six-digit attendance code that expires in ten minutes. Anyone under 75 percent is flagged for faculty and admin without a spreadsheet.",
      "A keyword pass sets a helpdesk ticket's priority and takes a guess at the category. The timetable blocks a person or a room from sitting in two places at once. Events are separate from notices, with a going count. Assignments, ticket updates, and notices land in a bell.",
      "The campus copilot answers from what is already in MongoDB: courses, notices, the timetable, tickets, attendance, assignments. Ctrl+K searches across those shapes. The interface is React on Vite, the same pair this website uses, with Recharts on the dashboards.",
    ],
  },
  {
    slug: "copilot",
    image: "/images/copilot.svg",
    imageAlt: "A code window kept next to a lock",
    title: "Aether",
    kicker: "Offline developer copilot",
    stack: ["Python", "FastAPI", "React", "TypeScript", "RAG", "ChromaDB", "sentence-transformers"],
    status: "Offline assistant",
    primary: true,
    summary:
      "Ask Aether about a repository and it answers from that repository. If the code is not there, it says so. The language model was not fine-tuned.",
    paragraphs: [
      "Aether ingests one codebase and will only answer, explain, or generate from it. Retrieval is hybrid: MiniLM vectors, BM25, and signals from identifiers and file names, each repository in its own Chroma collection. Generation is a local Ollama model, deepseek-coder and others, used as the published weights. The piece that was trained is a MiniLM retriever adapter, contrastive loss, with an optional LoRA. The language model was not fine-tuned.",
      "Source is split into function-level AST chunks, with symbols and a call graph indexed beside them. Ask, Explain, Optimize, and Generate stay tied to what was retrieved, and the assistant can say the answer is not in the project. A static AST pass looks for bugs. Shannon entropy looks for secrets. A taint pass follows sources such as input() and request.args to sinks such as eval and os.system.",
      "A change can be applied as a patch, with a backup and an undo, or drafted as a git commit. One function can show its call graph and what a change would touch. The evaluation reports hits@5 and how well the confidence is calibrated. The same local API serves a React and TypeScript workbench, a VS Code extension that completes against the open workspace, and a Chrome helper that explains, optimizes, or generates a selection on OnlineGDB and Programiz.",
    ],
  },
  {
    slug: "raft-store",
    image: "/images/raft.svg",
    imageAlt: "Three connected nodes, the center one filled",
    title: "A key-value store with Raft",
    kicker: "In progress",
    stack: ["Go", "gRPC", "GraphQL"],
    status: "In progress",
    primary: true,
    summary:
      "A distributed store in Go. If the node is not the leader, the API says so instead of pretending the write committed.",
    paragraphs: [
      "Nodes elect a leader and replicate a log with Raft. They talk over gRPC. Clients use GraphQL, and the API is leader-aware: a write that lands on a follower is not quietly accepted as if that node could commit it.",
      "I am building it for the failures a single-process CRUD app never has. A leader disappears. Two nodes disagree about the log. The API has to say “not me.” Go is the language for this one. Python is a poor default once the work is agreement between processes.",
    ],
  },
  {
    slug: "spectus",
    image: "/images/spectus.svg",
    imageAlt: "A message and four votes, one set apart",
    title: "Spectus",
    kicker: "Scam classifier",
    stack: ["Python", "FastAPI", "scikit-learn", "ChromaDB", "Groq"],
    status: "Scam classifier",
    primary: false,
    summary:
      "An SMS, the link inside it, and the UPI handle it pushes can be one scam. Four engines vote, and the page shows the one that broke ranks.",
    links: [{ label: "Code on GitHub", href: "https://github.com/faizavk/Spectus" }],
    paragraphs: [
      "Spectus takes a message, a URL, or a UPI handle and runs four checks that do not see each other's answer first. A TF-IDF logistic regression scores the wording. ChromaDB, with sentence-transformer embeddings, compares the text with public advisories from the Ministry of Home Affairs, the RBI, and SEBI. Llama 3.1, through Groq, looks for urgency and impersonation. A last pass is ordinary pattern matching: leetspeak, odd URLs, a brand's formatting copied a little too carefully. The page shows each vote. The case worth reading is the disagreement.",
      "The same scam rarely arrives once. A phishing SMS, the link inside it, and the UPI handle it names can be tied into one graph. When the wording changes, a diff against older variants shows what moved. A young domain can be checked for age and reputation. The front end is hand-written HTML, CSS, and JavaScript.",
    ],
  },
  {
    slug: "finops",
    image: "/images/finops.svg",
    imageAlt: "A rising line with one point marked",
    title: "FinOps cost anomalies",
    kicker: "Cloud spend",
    stack: ["Python", "Flask", "Prophet", "React"],
    status: "Cost dashboard",
    primary: false,
    summary:
      "Prophet on a cloud bill in rupees. The day that breaks the forecast comes back with the service, the region, and the tag that spent it.",
    links: [{ label: "Code on GitHub", href: "https://github.com/faizavk/finops-toolkit" }],
    paragraphs: [
      "The file is a cloud bill: date, service, region, project tag, cost in rupees. Prophet fits a forecast, and the dashboard lets you pick the split, 60:40, 70:30, or 80:20, and how strict the anomaly rule is. A day is flagged when the actual spend clears the upper bound of that forecast. A jump past ten times the prediction is listed on its own, next to tags that have barely appeared before.",
      "Open a flagged day and the root-cause view names the services, regions, and tags that dominate the spend. If the file has units, the toolkit also computes cost per unit. A per-service forecast can be written out as CSV when the chart is the wrong place for it.",
    ],
  },
  {
    slug: "elenchus",
    image: "/images/elenchus.svg",
    imageAlt: "One filled message and one left empty",
    title: "Elenchus",
    kicker: "Slack claim checker",
    stack: ["Python", "Slack Bolt", "MCP", "Groq"],
    status: "A Slack app",
    primary: false,
    summary:
      "Say in Slack that payments deployed and everything is fine. If the evidence shows a rollback, Elenchus posts the card. If the claim holds, it says nothing.",
    links: [{ label: "Code on GitHub", href: "https://github.com/faizavk/elenchus" }],
    paragraphs: [
      "Elenchus watches one Slack channel for claims like “we deployed payments yesterday, all good now.” It classifies the claim, pulls recent context, and asks an MCP server for repository and deployment evidence. A Groq model, Llama 3.1 8B, is the judge. Against the seeded evidence for that payments claim, the deploy rolled back, a check failed, and a pull request was still open, so the bot posts a card. “Anyone free for a call later?” is not a claim. A deployment the evidence actually supports gets silence too.",
      "Evidence links to the Slack permalink, and the same topic is not flagged again for thirty minutes. A message shortcut, “Verify with Elenchus,” checks one message on purpose, including something Slackbot just said. The MCP client and server speak the protocol over stdio. The GitHub and deployment records behind that server are seeded for the demo.",
    ],
  },
  {
    slug: "aedeswatch",
    image: "/images/aedes.svg",
    imageAlt: "A basin with leaves around it",
    title: "AedesWatch",
    kicker: "Public-health screening",
    stack: ["Python", "OpenCV", "YOLO", "Streamlit"],
    status: "A screening tool",
    primary: false,
    summary:
      "A screening tool that would rather say it is not sure than invent a breeding site.",
    paragraphs: [
      "AedesWatch looks at a photo for mosquito breeding sites. YOLO proposes regions. An OpenCV cue looks for standing water. A cost-weighted score combines them. When the detection is weak, the tool returns “uncertain” instead of a confident site. A screening tool that invents a breeding site is worse than one that shrugs.",
      "The evaluation is a domain-shift check. The same detector is scored on a public benchmark and on street photos collected locally, so the drop between those two numbers is visible.",
    ],
  },
];

export function projectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
