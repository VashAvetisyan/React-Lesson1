import AppAddNewEmployee from '../app-add-employee/app-add-employee'
import AppEmployeeList from '../app-employee/app-employee-list/app-employee-list'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import AppSearch from '../app-search/app-search'

import dataMockup from '../../data/data-mockup'
import './app.scss'

export default function App() {
  

    return (
        <div className="app">
            <AppInfo />
            <div className="search-and-filter block">
                <h3> Search or Filter </h3>
                <AppSearch />
                <AppFilter />
            </div>
            <AppEmployeeList data={dataMockup}/>
            <AppAddNewEmployee />
        </div>
    )
}
