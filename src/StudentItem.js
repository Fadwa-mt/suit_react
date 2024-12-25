
// export default function StudentItem({ student, index }) { 
//     return (
//         <button style={{
//             width: 200,
//             marginBottom: 10,
//             background: index % 2 ? '#ccc' : '#eee',
//             color: '#FFF',
//             padding: 10,
//             borderRadius: 7,
//             border: 0,
//         }}>
//             {student.first_name} {student.last_name}
//         </button>
//     );
// }
export default function StudentItem(props){
    return <button style={{
        width:100,
        height:100,
        margin:10,
        background: props.index %2? '#ccc':'#eee',
        color:'#FFF',
        padding:10,
        borderRadius:7,
        border:0,

    }}>
        {props.student.first_name}
        {props.student.last_name}
    </button>
}