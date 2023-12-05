import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники', colored: false },
    { name: 'rise', label: 'На повышение', colored: false },
    { name: 'moreThen1000', label: 'З/П больше 1000$', colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = filter === name;
    const activeClass = active ? 'btn-light' : 'btn-outline-light';
    const style = colored ? { color: 'red' } : null;

    return (
      <button
        className={`btn ${activeClass}`}
        type="button"
        onClick={() => onFilterSelect(name)}
        style={style}
        key={name}>
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
