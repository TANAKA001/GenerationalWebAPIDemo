# Modal

## Todo

- [ ] Modal Service was based on the ToasterService.  It has unnecessary code for having mutiple modals that needs to be removed.

## Usage

```tsx
import {modalService} from "./Modal.service";

modalService.show({
    title: "Modal Title",
    modalBody: <div>what ever you want in the body of the modal</div>,
    modalFooter: <>Footer Stuff</>,
})
```

## Properties
| property | type   | description |
|----------|--------|-------------|
| id       | string |             |
