# React Digital Assets Library
Any component described in this library is going to be analyzed in 4 main points:
* **Code**: Written as React v16.9 functional components (using hooks)
* **Styles**: CSS needed to style presentational components
* **Accessibility rules**: Description of standards that apply in each scenario
* **Unit testing**: Using Jest and Enzime testing libraries

_Presentational components_: Are concerned with how things look and don’t specify how the data is loaded or mutated, they receive data and callbacks exclusively via props.

_Container components_: Are concerned with how things work and provide the data and behavior to presentational or other container components, so thay are often stateful, as they tend to serve as data sources.

## Content
1. Forms
    - Presentational
        - Text Inputs
        - Select
        - Checkboxes
        - Radio buttons
        - Submit button
    - Container
        - Saving form state
        - Submitting a Form
        - Keyboard navigation
2. Tables
    - Presentational
        - Columns and rows
    - Container
        - Fetching data
        - Filtering data
3. Navigation
    - Presentational
      - Tabs
    - Container
      - Routing

### Future Releases
* Integration and E2E testing
* Titles and headings
* List groups
* Autocomplete and predictive text inputs
* Date and Time pickers
* Range inputs
* Popups and tooltips
* Side navbar
* Pagination
* Modals and overlay
* Filtering pills
* Images
* Collapsibles
* Animations
