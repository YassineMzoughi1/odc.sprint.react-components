import Item from './Item.jsx';

export default function ItemList({ items, onToggle }) {
  if (items.length === 0) {
    return <p className="empty">No items to show.</p>;
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item.id} item={item} onToggle={onToggle} />
      ))}
    </ul>
  );
}
