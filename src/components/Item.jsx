export default function Item({ item, onToggle }) {
  return (
    <li
      className={item.done ? 'item item--done' : 'item'}
      onClick={() => onToggle(item.id)}
    >
      <span className="item__status">{item.done ? 'Done' : 'Active'}</span>
      <div>
        <strong className="item__title">{item.title}</strong>
        {item.description && <p className="item__description">{item.description}</p>}
      </div>
    </li>
  );
}
