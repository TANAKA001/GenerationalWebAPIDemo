# Card

## Todo

- [ ] Add ability to place image on the side.

## Usage

```tsx
<Card>
  <CardBody>
    <!-- Card Content Goes Here-->
  </CardBody>  
</Card>

<Card>
  <CardHead>Title Goes Here</CardHead>
  <CardBody>
    <!-- Card Content Goes Here-->
  </CardBody>
  <CardFooter>Buttons and such here</CardFooter>
</Card>

<Card>
  <CardImage image={"path/to/image"} size{number} />
  <CardBody>
    <!-- Card Content Goes Here-->
  </CardBody>
</Card>
```

## Properties
| property | type                            | default   | description       |
|----------|---------------------------------|-----------|-------------------|
| id       | string                          |           | unique identifier |
| theme    | "default", "gray"               | "default" |                   |
| padding  | "none", "xs", "sm", "md", "lg"  | "sm"      |                   |
