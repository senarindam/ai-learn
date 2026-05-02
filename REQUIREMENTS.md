# AI Learning Guide Website Requirements

## Original request

> Can you create a website where anything can be reached within 3 clicks,
> basically a learning guide with simple animation, and learning basics for AI
> like what is agents, LLM, SLM, the hierarchy would be based on age,
> profession, like a student would read, also a housewife can read, and for an
> engineer the content would be different, but the content should be very vivid,
> and very attractive, as well as professional, how they talk to each other, how
> LLM, SLM, AI agents and the next things evolved or evolving. The content
> should be different for different audiences - like a professional it would be
> different for student of class 5 or for class 8, or class 12, or for an
> engineering student and a working professional of 5 years, 10 years, a
> business manager, a CEO of a company or a housewife - so first step would be
> to define the categories - as I see there is lot of confusion with on what is
> LLM/SLM/Agents and how can work together - how it can help the particular
> audience group - do you think this can be done?

## Refined product brief

Create an attractive, professional, audience-aware website that explains AI
basics in simple language. The guide should help different people understand
what AI, LLMs, SLMs, and AI agents are, how they work together, how they are
evolving, and how each audience can use them in practical life or work.

The site must keep the main learning journey within three clicks:

1. Choose an audience.
2. Choose a topic.
3. Read a vivid explanation and a practical action.

## Primary goals

- Reduce confusion around AI, LLMs, SLMs, and AI agents.
- Make the same concepts understandable to different age and professional
  groups.
- Explain not only definitions, but also how these technologies talk to each
  other in real systems.
- Show how AI has evolved from rules and machine learning to LLMs, SLMs, and
  agentic workflows.
- Make the experience visually engaging with simple, tasteful animation.
- Keep the website professional, responsive, and easy to navigate.

## Audience categories

The first version should define learning paths for:

1. Student, Class 5
2. Student, Class 8
3. Student, Class 12
4. Engineering student
5. Working professional with around 5 years of experience
6. Working professional with around 10 years of experience
7. Business manager
8. CEO, founder, or senior executive
9. Homemaker / housewife

## Topic hierarchy

Each audience path should explain these core topics:

### Artificial Intelligence

- AI as the broad field of systems that can sense, predict, reason, create, or
  act.
- Simple examples from school, home, business, and software.

### Large Language Models

- LLMs as broad language and reasoning models trained on large collections of
  text, code, and other data.
- Strengths: explanation, summarization, brainstorming, writing, coding,
  analysis, and conversation.
- Limits: mistakes, hallucinations, privacy concerns, and need for human
  verification.

### Small Language Models

- SLMs as smaller, faster, cheaper, and more focused models.
- Strengths: lower cost, lower latency, privacy-sensitive use cases, on-device
  use, and narrow tasks.
- Relationship to LLMs: SLMs can handle focused tasks while LLMs handle broader
  reasoning.

### AI Agents

- Agents as goal-driven systems that use models, tools, memory, planning, and
  feedback.
- Agents can break a goal into steps, use tools, inspect results, and ask for
  human approval.
- Agents should be explained carefully because they can move from "answering" to
  "acting."

## How LLMs, SLMs, and agents work together

The website should explain a simple workflow:

1. A person gives a goal.
2. An agent plans the steps.
3. The agent chooses an LLM, SLM, or other tool depending on the task.
4. The model creates, reasons, classifies, summarizes, or predicts.
5. Tools such as search, databases, files, calendars, or calculators provide
   real-world information.
6. The agent checks progress and asks for human approval when needed.
7. The person receives a useful result and can give feedback.

## Content style by audience

Content should not be one-size-fits-all. The tone, examples, and actions should
change by audience:

- Class 5: short sentences, school and story examples, friendly analogies.
- Class 8: homework, experiments, internet safety, and curiosity-driven
  examples.
- Class 12: exams, projects, careers, research, and independent learning.
- Engineering student: architecture, prototypes, code, retrieval, evaluation,
  and deployment basics.
- Working professional, 5 years: productivity, communication, quality, and
  repeatable workflows.
- Working professional, 10 years: process redesign, governance, measurement,
  and team enablement.
- Business manager: outcomes, prioritization, customer value, cost, and
  operating improvements.
- CEO / founder: strategy, moat, capital allocation, proprietary data, risk, and
  governance.
- Homemaker / housewife: household planning, family learning, budgeting,
  translation, reminders, and privacy.

## Design and user experience requirements

- Every major destination should be reachable within three clicks.
- Use a clean landing page that immediately explains the purpose of the guide.
- Provide an audience selector as the main entry point.
- Provide topic tabs or cards for LLM, SLM, and Agents.
- Include a simple visual model of how AI, LLMs, SLMs, and agents relate.
- Include a workflow section that explains how a human goal becomes an AI result.
- Include an evolution section explaining past, present, and next-stage AI.
- Use simple animation such as floating elements, reveal transitions, and smooth
  scrolling.
- Keep motion subtle and support reduced-motion preferences.
- Make the layout responsive for mobile, tablet, and desktop.

## Acceptance criteria

- A user can select any supported audience.
- Each audience has distinct content, not just the same paragraph repeated.
- Each audience has content for LLM, SLM, and Agents.
- Each topic includes:
  - a clear title,
  - a simple explanation,
  - a vivid example,
  - and one practical action.
- The site explains how LLMs, SLMs, and agents work together.
- The site explains how AI is evolving.
- The main journey follows the 3-click rule.
- The website works as a static site without a required build step.
- The README explains how to preview the site locally.

## Future enhancements

- Add quizzes for each audience level.
- Add downloadable learning cards or cheat sheets.
- Add search across concepts.
- Add multilingual content.
- Add diagrams for model routing, retrieval-augmented generation, and agent
  feedback loops.
- Add administrator-friendly content files so non-developers can update lessons.
