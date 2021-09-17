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
        setEditPopupVisable(true)
    }
    function closeNotePanel(){
        setEditPopupVisable(false)
    }

    return <div className="home">
        <div className="mask" style={{display:editPopupVisable?'block':'none'}}></div>
        
        <div className="lists" >
        <span className='empty-tip' style={{ display: listData.length === 0 ? 'block' : 'none' }}>Write Notes!</span>
            {listData.map(item => <List data={item} key={uuidv4()} />)}
        </div>
        <div className='edit-popup'　style={{display:editPopupVisable?'flex':'none'}}>
            <NoteEdit addData={addData} closeNotePanel={closeNotePanel}/>
        </div>
        <div className='add-note-btn' onClick={addNoteOnClick} style={{display:editPopupVisable?'none':'block'}}>+</div>

    </div>
}
export default Home