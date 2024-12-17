// import StudentItem from "./StudentItem";
// export default function StudentsList(){
//     const Students=[
//         {id:0, first_name: 'Fadwa', last_name: 'Matloui'},
//         {id:0, first_name: 'Amin', last_name: 'Hatib'},
//         {id:0, first_name: 'Rayane', last_name: 'Challa'},
//     ];
//     return <div style={{display:'flex', flexDirection: 'column' }}>
//         {Students.map((std,idx)=>{
//         return<StudentItem key={std.id} Students={std} index={idx} />
// })}
//     </div>
// }
import { useState } from "react";
import StudentItem from "./StudentItem";

export default function StudentsList(){
    const [search, setSearch] = useState('');
    const Students=[
        {id:0, first_name: 'Fadwa', last_name: 'Matloui'},
        {id:0, first_name: 'Amin', last_name: 'Hatib'},
        {id:0, first_name: 'Rayane', last_name: 'Challa'},
    ];
    return <div style={{display:'flex', flexDirection: 'column' }}>
    <input type="text" onChange={evt =>{
        setSearch(evt.target.value.toLowerCase())
    }}
    placeholder="search" style={{marginBottom: 30, width: 200, padding: 1}} />
    {Students
    .filter(std=> std.first_name.toLowerCase().includes(search) || std.last_name.toLowerCase().includes(search)).map((std, idx)=>{
        return <StudentItem 
        key={std.id}
        student={std}
        index={idx} />
    })}
</div>
}
