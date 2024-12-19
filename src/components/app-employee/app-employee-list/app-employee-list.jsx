import AppEmployeeItem from "../app-employee-item/app-employee-item";

export default function AppEmployeeList({ data }) {
    const employee = data.map(item => {
        console.log(item)
        return <AppEmployeeItem key={item.id} {...item} />
    })

    console.log(employee)

    return (
        <div className="block">
            {employee}
        </div>
    );
}