import "./app-employee-item.scss"

export default function AppEmployeeItem({name, salary}) {
  return (
    <div className="app-employee-item">
      <h4 className="employee-name">{name}</h4>
      <input type="text" className="employee-salary" defaultValue={salary + " $"} />
      <div className="employee-btns">
        <button>
          <svg fill="goldenrod" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M0,5c0-1.657,2.686-3,6-3s6,1.343,6,3-2.686,3-6,3S0,6.657,0,5Zm6,11c3.421,0,6-1.505,6-3.5v-2c0,1.971-2.5,3.5-6,3.5S0,12.471,0,10.5v2c0,1.995,2.579,3.5,6,3.5Zm0-4c3.421,0,6-1.505,6-3.5v-2c0,1.971-2.5,3.5-6,3.5S0,8.471,0,6.5v2c0,1.995,2.579,3.5,6,3.5Zm12,4c3.314,0,6-1.343,6-3s-2.686-3-6-3-6,1.343-6,3,2.686,3,6,3Zm0,6c-3.5,0-6-1.529-6-3.5,0,1.971-2.5,3.5-6,3.5s-6-1.529-6-3.5v2c0,1.995,2.579,3.5,6,3.5s6-1.505,6-3.5c0,1.995,2.579,3.5,6,3.5s6-1.505,6-3.5v-2c0,1.971-2.5,3.5-6,3.5Zm0-4c-3.5,0-6-1.529-6-3.5,0,1.971-2.5,3.5-6,3.5S0,16.471,0,14.5v2c0,1.995,2.579,3.5,6,3.5s6-1.505,6-3.5c0,1.995,2.579,3.5,6,3.5s6-1.505,6-3.5v-2c0,1.971-2.5,3.5-6,3.5Zm-2.7-13.75c.254,0,.508-.096,.702-.289l.998-.981V7c0,.552,.447,1,1,1s1-.448,1-1V2.99l1.003,.976c.396,.385,1.028,.376,1.414-.019,.385-.396,.377-1.029-.02-1.414l-2.003-1.951c-.779-.775-2.041-.775-2.812-.004l-1.984,1.959c-.394,.388-.397,1.021-.01,1.414,.196,.198,.454,.297,.712,.297Z" />
          </svg>
        </button>
        <button>
          <svg fill="red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17,4V2a2,2,0,0,0-2-2H9A2,2,0,0,0,7,2V4H2V6H4V21a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V6h2V4ZM11,17H9V11h2Zm4,0H13V11h2ZM15,4H9V2h6Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}