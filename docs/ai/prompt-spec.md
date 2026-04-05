# Component Prompt Spec

## Required Inputs

- Task: component goal and business scenario.
- Boundaries: allowed file paths and forbidden areas.
- API contract: props, slots, events.
- Accessibility requirements: keyboard and aria requirements.
- i18n requirements: locale scope and fallback policy.
- Theme requirements: semantic tokens and dark mode constraints.
- Quality requirements: tests, docs examples, metadata updates.

## Required Outputs

- Code changes only in allowed files.
- Synchronized updates for tests, docs, metadata.
- Validation result of Type/Behavior/A11y/Doc/Meta/I18n/Theme gates.
- Explicit unresolved risks list.

## Hard Constraints

- Minimal change only, no unrelated refactor.
- No cross-step feature implementation.
- No inline style if utility classes/tokens can be used.
