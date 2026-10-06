import { useState } from 'react';
import AddItemForm from './components/AddItemForm.jsx';
import FilterBar from './components/FilterBar.jsx';
import ItemList from './components/ItemList.jsx';

const initialItems = [
  { id: 1, title: 'Read Thinking in React', description: 'Finish the five-step lecture.', done: true },
  { id: 2, title: 'Sketch the component tree', description: 'App, ItemList, Item, AddItemForm, FilterBar.', done: false },
  { id: 3, title: 'Lift shared state to App', description: 'Items and filter live in the common parent.', done: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState('all');

  // The list lives here, so children receive callbacks instead of owning state.
  function handleAdd(title) {
    setItems((current) => [
      ...current,
      { id: Date.now(), title, description: '', done: false },
    ]);
  }

  function handleToggle(id) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  }

  // Derive a new array each render; the original list is never mutated.
  const visibleItems = items.filter((item) => {
    if (filter === 'active') return !item.done;
    if (filter === 'done') return item.done;
    return true;
  });

  return (
    <main className="app">
      <h1>Task List</h1>
      <AddItemForm onAdd={handleAdd} />
      <FilterBar filter={filter} onChange={setFilter} />
      <ItemList items={visibleItems} onToggle={handleToggle} />
    </main>
  );
}
