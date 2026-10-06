# odc.sprint.react-components
Sprint repository: odc.sprint.react-components

## Run

```sh
npm install
npm run dev
```

Components live in `src/components/`, one per file. `App` owns the item list and the
active filter; `AddItemForm`, `FilterBar` and `Item` receive callbacks (`onAdd`,
`onChange`, `onToggle`) instead of managing shared state.
