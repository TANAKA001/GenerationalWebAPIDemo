# Accordion

## Todo

- [ ] control state of Accordions in the Accordion Group when a child of an AccordionGroup and give the option to allow only one or multiple Accordions to be open at once. 

## Usage

### Single Accordion
```tsx
<Accordion>
  <AccordionHead>
    <!-- Head elements go here-->
  </AccordionHead>
  <AccordionBody>
    <!-- Body elements go here-->
  </AccordionBody>
</Accordion>
```

### Accordion Group
```tsx
<AccordionGroup>
  <Accordion>
    <AccordionHead>
      <!-- Head elements go here-->
    </AccordionHead>
    <AccordionBody>
      <!-- Body elements go here-->
    </AccordionBody>
  </Accordion>
  <Accordion>
    <AccordionHead>
      <!-- Head elements go here-->
    </AccordionHead>
    <AccordionBody>
      <!-- Body elements go here-->
    </AccordionBody>
  </Accordion>
</AccordionGroup>
```

## Properties
| property | type   | default         | description                 |
|----------|--------|-----------------|-----------------------------|
| id       | string | randomString()  | unique identifier           |
