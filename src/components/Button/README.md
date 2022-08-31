# Button

## Todo
- [ ] Icons with better spacing. maybe add a prop for Icon and IconPosition

## Usage

```tsx
<Button
  theme={"primary"}
  type={"button"}
  size={"md"}
  width={"standard"}
  onClick={() => clickFn()}
>
  Button Label
</Button>
```

## Properties
| property | type                                            | default    | description                                  |
|----------|-------------------------------------------------|------------|----------------------------------------------|
| id       | string                                          |            | Unique Identifier                            |
| theme    |                                                 | "default"  | Determines the color and style of the button |
| type     | "button", "submit", "reset"                     | "button"   |                                              |
| size     | "xs", "sm", "md", "lg"                          | "md"       |                                              |
| width    | "narrow", "standard", "wide", "block", "square" | "standard" |                                              |
| onClick  |                                                 |            |                                              |
