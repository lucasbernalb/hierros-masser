# Skill Registry

**Project**: papa-manu (Hierros Masser)
**Generated**: Fri Apr 24 2026
**Mode**: engram

---

## User Skills (Global)

Located in: `~/.config/opencode/skills/`

| Skill | Trigger | Description |
|-------|---------|-------------|
| sd | Create or update skill registry | Scan user + project skills, write .atl/skill-registry.md |
| skill-creator | Create new AI agent skills | Build skills following Agent Skills spec |
| issue-creation | Create GitHub issues | Issue-first workflow for Agent Teams Lite |
| branch-pr | Create pull requests | PR workflow for Agent Teams Lite |
| go-testing | Go testing patterns | Bubbletea TUI testing, test coverage |
| judgment-day | Adversarial review | Dual blind judge protocol |

## SDD Skills

Located in: `~/.config/opencode/skills/`

| Skill | Trigger | Description |
|-------|---------|-------------|
| sdd-init | sdd init, iniciar sdd | Initialize SDD context, detect stack |
| sdd-explore | Explore codebase | Investigate ideas before committing |
| sdd-propose | Create change proposal | Intent, scope, approach |
| sdd-spec | Write specs | Requirements + scenarios (delta specs) |
| sdd-design | Technical design | Architecture decisions |
| sdd-tasks | Task breakdown | Implementation checklist |
| sdd-apply | Apply changes | Implement tasks following specs |
| sdd-verify | Verify implementation | Compare vs specs, design, tasks |
| sdd-archive | Archive changes | Sync to main specs, close change |
| sdd-onboard | Full SDD walkthrough | Guided end-to-end workflow |

---

## Project Context

**Stack**: Next.js 16.2.4 + React 19.2.4 + TypeScript + Tailwind CSS v4

**Testing Capabilities**: None installed. No test runner available.

**Quality Tools**: ESLint (configured), TypeScript (strict mode)

**Project Type**: Static landing page (lead generation) — no backend.

---

## Notes

- No project-level skills (`.atl/skills/`, `.agent/skills/`, etc.)
- No existing AGENTS.md or CLAUDE.md conventions
- SPEC.md exists at project root (brand spec for Hierros Masser)