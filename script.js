const audiences = [
  {
    id: "class5",
    title: "Student, Class 5",
    icon: "C5",
    intro:
      "Learn AI through stories, helpers, games, and examples you see at home or school.",
    benefit: "Use AI to ask better questions, practice reading, and make learning playful.",
    voice: "Simple words, short examples, and friendly analogies.",
    lessons: {
      llm: {
        title: "LLM: A giant story helper",
        summary:
          "An LLM is like a library friend who has read many books and can help you write, explain, and imagine.",
        vivid:
          "If you ask, 'Why is the sky blue?', it does not open one book. It remembers patterns from many science pages and explains the idea in easy words.",
        action: "Try asking an AI to explain one chapter in three bullet points and one drawing idea.",
      },
      slm: {
        title: "SLM: A small expert helper",
        summary:
          "An SLM is a smaller helper trained for fewer jobs, like spelling practice or answering class notes.",
        vivid:
          "Think of a pocket dictionary. It is not the whole library, but it is fast and useful when you need one clear answer.",
        action: "Use a focused study bot to quiz you on five words from today's lesson.",
      },
      agents: {
        title: "Agent: A helper that follows steps",
        summary:
          "An agent can make a plan, use tools, check if it is right, and then continue.",
        vivid:
          "For a school project, an agent can make a checklist: pick topic, find facts, make poster headings, and remind you to review.",
        action: "Ask an AI agent to create a project checklist you can follow with your parent or teacher.",
      },
    },
  },
  {
    id: "class8",
    title: "Student, Class 8",
    icon: "C8",
    intro:
      "Connect AI basics to experiments, homework, creativity, and safe internet habits.",
    benefit: "Use AI as a study coach while learning to verify facts and avoid copying.",
    voice: "Clear explanations with examples from science, coding, and daily decisions.",
    lessons: {
      llm: {
        title: "LLM: Pattern engine for language",
        summary:
          "An LLM predicts and generates text by learning patterns from huge collections of writing and code.",
        vivid:
          "It is like autocomplete upgraded into a reasoning partner: it can draft an essay, compare two ideas, or explain a formula step by step.",
        action: "Ask for two explanations of the same topic: one simple and one exam-style.",
      },
      slm: {
        title: "SLM: Smaller model, sharper task",
        summary:
          "An SLM trades broad knowledge for speed, lower cost, and focused answers.",
        vivid:
          "A calculator is better than a general computer for quick arithmetic. Similarly, an SLM can be best for a narrow school task.",
        action: "Use a subject-specific bot for vocabulary, math drills, or language practice.",
      },
      agents: {
        title: "Agent: AI with a to-do list",
        summary:
          "An agent uses an LLM or SLM as its brain, then follows steps and uses tools to finish a goal.",
        vivid:
          "A homework agent might read your deadline, split the work, search reliable sources, and create flashcards.",
        action: "Let an agent build a revision plan, then check each source before trusting it.",
      },
    },
  },
  {
    id: "class12",
    title: "Student, Class 12",
    icon: "12",
    intro:
      "Use AI for exams, career choices, projects, and the transition into higher education.",
    benefit: "Turn AI into a tutor, research assistant, and career exploration partner.",
    voice: "Practical, exam-aware, and oriented toward independent thinking.",
    lessons: {
      llm: {
        title: "LLM: General reasoning interface",
        summary:
          "An LLM can explain, summarize, translate, code, debate, and brainstorm using natural language.",
        vivid:
          "It acts like a tireless tutor that can switch from physics derivations to college essay feedback, but it still needs verification.",
        action: "Ask it to create a study plan, then solve past-paper questions yourself.",
      },
      slm: {
        title: "SLM: Efficient specialist",
        summary:
          "An SLM is useful when the task is repeated, private, or limited to a known subject area.",
        vivid:
          "A college counseling app might use an SLM to classify interests quickly before an LLM gives broader advice.",
        action: "Compare a general AI answer with a subject-specific tool and note the differences.",
      },
      agents: {
        title: "Agent: Goal manager",
        summary:
          "Agents coordinate prompts, files, tools, and feedback to complete multi-step work.",
        vivid:
          "For a science fair, an agent can outline the experiment, build a timeline, prepare a materials list, and generate a final report draft.",
        action: "Use an agent for planning, not final answers; keep your own reasoning visible.",
      },
    },
  },
  {
    id: "engineeringStudent",
    title: "Engineering Student",
    icon: "CS",
    intro:
      "Understand how AI systems are built, evaluated, deployed, and connected to real products.",
    benefit: "Use AI for learning, prototyping, debugging, documentation, and research.",
    voice: "Technical enough to map concepts to architecture without assuming work experience.",
    lessons: {
      llm: {
        title: "LLM: Foundation model layer",
        summary:
          "LLMs expose a natural-language interface over learned representations of text, code, and sometimes multimodal data.",
        vivid:
          "In a product stack, the LLM is often the reasoning and generation layer behind chat, code assistance, summarization, or semantic search.",
        action: "Prototype a retrieval-augmented Q&A flow over your own notes.",
      },
      slm: {
        title: "SLM: Edge and domain model",
        summary:
          "SLMs reduce latency, cost, and deployment complexity for constrained or domain-specific workloads.",
        vivid:
          "A mobile app may use an SLM on-device for intent detection, then call an LLM only when the user needs deeper reasoning.",
        action: "Identify one task where a classifier or SLM beats a large hosted model.",
      },
      agents: {
        title: "Agent: Orchestration runtime",
        summary:
          "Agents combine model calls, tool APIs, memory, planning, execution, and evaluation loops.",
        vivid:
          "A coding agent reads a ticket, searches a repo, edits files, runs tests, inspects failures, and iterates until the patch is ready.",
        action: "Build a tiny agent loop: plan, call one tool, inspect result, then respond.",
      },
    },
  },
  {
    id: "professional5",
    title: "Working Professional, 5 Years",
    icon: "5Y",
    intro:
      "Apply AI to productivity, quality, communication, and smarter team workflows.",
    benefit: "Delegate repetitive work while improving judgment, review, and decision speed.",
    voice: "Business-practical with enough depth to choose the right tool.",
    lessons: {
      llm: {
        title: "LLM: Knowledge work accelerator",
        summary:
          "LLMs draft, summarize, explain, classify, and transform information across everyday workflows.",
        vivid:
          "Use an LLM to turn a messy meeting transcript into decisions, risks, owners, and a client-ready summary.",
        action: "Start with low-risk tasks: summaries, drafts, checklists, and brainstorming.",
      },
      slm: {
        title: "SLM: Reliable narrow assistant",
        summary:
          "SLMs fit repeatable workflows where cost, speed, privacy, and consistency matter.",
        vivid:
          "A support team can use an SLM to tag tickets and route them before an LLM drafts a complex reply.",
        action: "List repeated decisions in your week that could be classified or routed automatically.",
      },
      agents: {
        title: "Agent: Workflow teammate",
        summary:
          "Agents can monitor inputs, call tools, prepare drafts, and ask for approval before acting.",
        vivid:
          "A sales agent can research an account, enrich CRM fields, draft an email, and schedule a follow-up for review.",
        action: "Pick one workflow where an agent prepares work but a human approves the final step.",
      },
    },
  },
  {
    id: "professional10",
    title: "Working Professional, 10 Years",
    icon: "10Y",
    intro:
      "Use AI to redesign processes, mentor teams, and build measurable operating leverage.",
    benefit: "Move from personal productivity to team-level systems and governance.",
    voice: "Strategic, operational, and focused on adoption risk.",
    lessons: {
      llm: {
        title: "LLM: Capability platform",
        summary:
          "LLMs create a reusable layer for language-heavy processes across functions.",
        vivid:
          "Instead of one-off prompts, mature teams create shared prompt patterns, review standards, and knowledge retrieval pipelines.",
        action: "Map high-volume text workflows by risk, value, and data sensitivity.",
      },
      slm: {
        title: "SLM: Scalable control point",
        summary:
          "SLMs are attractive for embedded decisions, regulated data, and cost-sensitive volume.",
        vivid:
          "A finance workflow may use an SLM for invoice categorization and escalate exceptions to a larger model or human expert.",
        action: "Separate work into automate, augment, and human-only categories.",
      },
      agents: {
        title: "Agent: Process automation layer",
        summary:
          "Agents operationalize AI by combining models, tools, permissions, logs, and escalation paths.",
        vivid:
          "A procurement agent can compare vendors, check policy, draft negotiation notes, and hand off exceptions to the manager.",
        action: "Design agent workflows with audit logs, approvals, and clear failure handling.",
      },
    },
  },
  {
    id: "manager",
    title: "Business Manager",
    icon: "BM",
    intro:
      "Translate AI concepts into team productivity, customer value, and measurable outcomes.",
    benefit: "Prioritize use cases, reduce operational friction, and manage responsible adoption.",
    voice: "Outcome-led, non-jargon, and decision-focused.",
    lessons: {
      llm: {
        title: "LLM: Communication and insight engine",
        summary:
          "LLMs help teams turn documents, calls, chats, and reports into clear decisions.",
        vivid:
          "A manager can ask for trend summaries across customer feedback, then review the evidence before changing priorities.",
        action: "Choose one workflow where better summaries would improve decisions.",
      },
      slm: {
        title: "SLM: Efficient specialist at scale",
        summary:
          "SLMs can handle repetitive, well-defined tasks at lower cost and with more control.",
        vivid:
          "Think of an SLM as a trained department assistant for routing, tagging, checking, or extracting structured fields.",
        action: "Estimate volume, error cost, and review needs before automating.",
      },
      agents: {
        title: "Agent: Coordinator across tools",
        summary:
          "Agents connect AI to calendars, CRMs, spreadsheets, ticketing systems, and approval flows.",
        vivid:
          "An operations agent can watch support spikes, summarize root causes, alert owners, and draft a customer update.",
        action: "Pilot agents where the next best action is clear and reversible.",
      },
    },
  },
  {
    id: "ceo",
    title: "CEO / Founder",
    icon: "CEO",
    intro:
      "See AI as a strategic capability affecting products, costs, talent, moat, and speed.",
    benefit: "Build an AI adoption thesis that balances ambition, risk, governance, and defensibility.",
    voice: "Executive, concise, and oriented toward capital allocation.",
    lessons: {
      llm: {
        title: "LLM: Strategic interface shift",
        summary:
          "LLMs make natural language a control surface for software, knowledge, and customer experiences.",
        vivid:
          "The strategic question is not only 'Can we add a chatbot?' but 'Which parts of our value chain become faster, cheaper, or newly possible?'",
        action: "Rank AI opportunities by customer value, proprietary data advantage, and execution risk.",
      },
      slm: {
        title: "SLM: Margin, privacy, and control lever",
        summary:
          "SLMs can protect unit economics and data boundaries once AI usage scales.",
        vivid:
          "A company may use LLMs to discover the product experience, then distill common tasks into SLMs for production efficiency.",
        action: "Ask teams where smaller models could reduce cost without reducing customer trust.",
      },
      agents: {
        title: "Agent: Digital operating capacity",
        summary:
          "Agents can convert AI from advice into execution, but require governance, observability, and accountability.",
        vivid:
          "A mature agentic system can qualify leads, prepare proposals, update systems, and escalate exceptions with measurable controls.",
        action: "Fund pilots that have clear owners, safe permissions, and operating metrics.",
      },
    },
  },
  {
    id: "homemaker",
    title: "Homemaker / Housewife",
    icon: "HM",
    intro:
      "Learn AI through daily life: planning, budgeting, learning, health questions, and family support.",
    benefit: "Use AI as a practical assistant while keeping privacy and judgment in your hands.",
    voice: "Warm, clear, respectful, and grounded in household examples.",
    lessons: {
      llm: {
        title: "LLM: Everyday explanation helper",
        summary:
          "An LLM can help write messages, explain school topics, compare options, and create plans.",
        vivid:
          "You can ask it to make a weekly meal plan, explain a child's homework topic, or rewrite a formal message politely.",
        action: "Try: 'Make a simple weekly plan for meals, homework time, and errands.'",
      },
      slm: {
        title: "SLM: Small focused helper",
        summary:
          "An SLM can be built for one job, such as recipe ideas, language translation, or budget categories.",
        vivid:
          "It is like a specialist notebook: quick for one area, but not meant to answer everything in the world.",
        action: "Use focused tools for translation, reminders, budgeting, or recipe filtering.",
      },
      agents: {
        title: "Agent: Planner that can take steps",
        summary:
          "An agent can organize a goal, use tools, and remind you what to do next.",
        vivid:
          "For a family event, an agent can create a guest list, shopping list, budget, invitation message, and timeline.",
        action: "Start with planning tasks. Do not share private IDs, banking details, or passwords.",
      },
    },
  },
];

const topics = [
  { id: "llm", label: "LLM" },
  { id: "slm", label: "SLM" },
  { id: "agents", label: "Agents" },
];

const audienceGrid = document.querySelector("#audienceGrid");
const guideTitle = document.querySelector("#guideTitle");
const guideIntro = document.querySelector("#guideIntro");
const topicTabs = document.querySelector("#topicTabs");
const lessonCard = document.querySelector("#lessonCard");

let selectedAudience = audiences[0];
let selectedTopic = "llm";

function renderAudiences() {
  audienceGrid.innerHTML = audiences
    .map(
      (audience) => `
        <button class="audience-card ${
          audience.id === selectedAudience.id ? "active" : ""
        }" data-audience="${audience.id}">
          <span class="audience-icon" aria-hidden="true">${audience.icon}</span>
          <strong>${audience.title}</strong>
          <small>${audience.benefit}</small>
        </button>
      `
    )
    .join("");
}

function renderTopics() {
  topicTabs.innerHTML = topics
    .map(
      (topic) => `
        <button class="topic-tab ${
          topic.id === selectedTopic ? "active" : ""
        }" data-topic="${topic.id}">
          ${topic.label}
        </button>
      `
    )
    .join("");
}

function renderLesson() {
  const lesson = selectedAudience.lessons[selectedTopic];

  guideTitle.textContent = selectedAudience.title;
  guideIntro.textContent = selectedAudience.intro;

  lessonCard.innerHTML = `
    <div class="lesson-topline">
      <span class="pill">${selectedAudience.icon}</span>
      <span class="pill">${selectedAudience.voice}</span>
    </div>
    <h3>${lesson.title}</h3>
    <p class="lesson-summary">${lesson.summary}</p>
    <div class="example-box">
      <strong>Vivid example</strong>
      <p>${lesson.vivid}</p>
    </div>
    <div class="action-box">
      <strong>3rd-click action</strong>
      <p>${lesson.action}</p>
    </div>
  `;

  lessonCard.classList.remove("fade-in");
  void lessonCard.offsetWidth;
  lessonCard.classList.add("fade-in");
}

function updateGuide({ scroll = false } = {}) {
  renderAudiences();
  renderTopics();
  renderLesson();

  if (scroll) {
    document.querySelector("#guide").scrollIntoView({ behavior: "smooth" });
  }
}

audienceGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-audience]");
  if (!button) return;

  selectedAudience =
    audiences.find((audience) => audience.id === button.dataset.audience) ||
    audiences[0];
  selectedTopic = "llm";
  updateGuide({ scroll: true });
});

topicTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;

  selectedTopic = button.dataset.topic;
  updateGuide();
});

updateGuide();
