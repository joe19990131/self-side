import NoteEdit from "./components/NoteEdit"
import List from "./components/List"
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './home.css'
const Home = () => {
    const [listData, setData] = useState([])
    const [editPopupVisable, setEditPopupVisable] = useState(false)
    
    function addData(data) {
        setData(prev => [...prev, data])
    }
    function addNoteOnClick(){
        setEditPopupVisable(prev=>prev?false:true)
    }

    return <div className="home">

        <div className="lists">
            <span style={{ display: listData.length === 0 ? 'block' : 'none' }}>Write Notes!</span>
            {listData.map(item => <List data={item} key={uuidv4()} />)}
        </div>
        <div className='edit-popup'　style={{display:editPopupVisable?'flex':'none'}}>
            <NoteEdit addData={addData} />
        </div>
        <div className='add-note-btn' onClick={addNoteOnClick}>{editPopupVisable?'ｘ':'+'}</div>

    </div>
}
export default Home