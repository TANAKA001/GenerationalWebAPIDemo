# Breadcrumbs

## Todo

- [ ] generate the crumbs from the router so they don't have to be manually added on every page

## Usage

```tsx
const crumbs = [
  { name: "Home", url: "/" },
  { name: "Page", url: "page" },
  { name: "Sub-Page", url: "sub-page" }
];
    
<Breadcrumbs crumbs={crumbs} />
```

## Properties
| property | type          | default                      | description       |
|----------|---------------|------------------------------|-------------------|
| id       | string        |                              | unique identifier |
| crumbs   | CrumbProps[]  | [{ name: "Home", url: "/" }] |                   |

