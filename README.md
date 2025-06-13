# Hello World in Github Actions Richard Steyner

my first action

A simple hello world GitHub Action.

## Inputs

| Name         | Description  | Required | Default |
| ------------ | ------------ | -------- | ------- |
| who-to-greet | Who to greet | Yes      | World   |

## Outputs

| Name     | Description          |
| -------- | -------------------- |
| greeting | The greeting message |
| time     | The current time     |

## Example usage

```yaml
- name: Hello World Action
  uses: RichardSteyner/my-first-action@v1.0
  with:
    who-to-greet: "GitHub User"
```
