
import StudentItem from "./StudentItem";

export default function StudentsList(props){
    const Students=[
        {id:0, first_name: 'Fadwa', last_name: 'Matloui'},
        {id:1, first_name: 'Amin', last_name: 'Hatib'},
        {id:2, first_name: 'Rayane', last_name: 'Challa'},
        {id:3, first_name: 'Youssra', last_name: 'Bahja'},
        {id:4, first_name: 'Hind', last_name: 'Farjali'},
        {id:5, first_name: 'Amina', last_name: 'Ammara'},
        {id:6, first_name: 'Laila', last_name: 'Amine'},
    ];
    return <div style={{ display:'flex', flexWrap:'wrap'}}>
    {Students
    .filter(std=> std.first_name.toLowerCase().includes(props.search) 
    || std.last_name.toLowerCase().includes(props.search)).map((std, idx)=>{
        return <StudentItem 
        key={std.id}
        student={std}
        index={idx} />
    })}
</div>
}
