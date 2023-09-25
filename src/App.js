
import './App.css';
import EmployeeCreate from './EmployeeCreate';
import EmployeeDelete from './EmployeeDelete';
import EmployeeDetail from './EmployeeDetail';
import EmployeeEdit from './EmployeeEdit';
import EmployeeList from './EmployeeList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path ="/" element={<EmployeeList />} />
        <Route  path ="/create" element={<EmployeeCreate />} />
        <Route  path ="/edit/:id" element={<EmployeeEdit />} />
        <Route  path ="/delete/:id" element={<EmployeeDelete   />} />
        <Route  path ="/detail/:id" element={<EmployeeDetail   />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
