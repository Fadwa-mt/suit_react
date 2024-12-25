
export default function FilterBox(props){
    //const [search, setSearch]= useState('');
    return <div style={{padding:20, border: '1px solid #ccc' }}>
    <input type="text" onChange={evt =>{
        // props.handleSearch(evt.target.value.toLowerCase())
        console.log('dispatch event');
        const ev = new CustomEvent('update_search',{detail: evt.target.value.toLocaleLowerCase()});
        document.dispatchEvent(ev);
    }}
    placeholder="search" style={{marginBottom: 30, width: 200, padding: 10}} />
</div>;
}