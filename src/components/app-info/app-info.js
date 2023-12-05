import './app-info.css';

const AppInfo = ({ employees, increased }) => (
  <div className="app-info">
    <h1>Учет сотрудников в компании Future</h1>
    <h2>Общее число сотрудников: {employees}</h2>
    <h2>Премию получат: {increased}</h2>
  </div>
);

export default AppInfo;
