/*
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
*/
import { useContext } from "react";
import StudentItem from "./StudentItem";
//import Welcome from "./Welcome";
import SearchContext from "./SearchContext";
import { useParams } from "react-router-dom";

export default function StudentsList(){
      const {search} = useContext(SearchContext)
      const params = useParams();
      const students = [
           {id: 0, first_name: 'test1', 
             last_name: 'AAA', classe_id: 1},
           {id: 1, first_name: 'test2', 
             last_name: 'BBB', classe_id: 1},
           {id: 2, first_name: 'test3', 
            last_name: 'CCC', classe_id: 1},
            {id: 3, first_name: 'test4', 
              last_name: 'DDD', classe_id: 2},
              {id: 4, first_name: 'test5', 
                last_name: 'EEE', classe_id: 2},
                {id: 5, first_name: 'test6', 
                  last_name: 'FFF'},
                  {id: 6, first_name: 'test7', 
                    last_name: 'GGG'},
                    {id: 7, first_name: 'test8', 
                      last_name: 'KKK'},
      ];
      let students_list = students
      .filter(std => (!params.id || params.id == std.classe_id));
      return <div 
               style={{display: 'flex', flexWrap: 'wrap'}}>
           {(students_list.length>0)?students_list.filter(std => 
              std.first_name.toLowerCase().includes(search)
              || std.last_name.toLowerCase().includes(search)
            )
              .map((std, idx) => {
             return <StudentItem 
                  key={std.id} 
                  student={std}
                  index={idx}
                  />
            }):(params.id?'No student found in this class':'')}
            
      </div>;
     }