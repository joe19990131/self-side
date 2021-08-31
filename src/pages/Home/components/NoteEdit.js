import './css/noteEdit.css'
import { useState } from 'react'
const NoteEdit = ({addData}) => {
    
    const [title,setTitle] = useState('')
    function titleChange(e){
        setTitle(e.target.value)
    }

    const [date,setDate] = useState('')
    function dateChange(e){
        setDate(e.target.value)
    }

    const [time,setTime] = useState('')
    function timeChange(e){
        setTime(e.target.value)
    }

    const [note,setNote] = useState('')
    function noteChange(e){
        setNote(e.target.value)
    }

    function clean(){
        setTitle('')
        setDate('')
        setTime('')
        setNote('')
    }

    function addNote(){
        let data = {
            title:title,
            date:date,
            time:time,
            note:note
        }
        addData(data)
    }
    return <div className = "editor">
        <div className="edit-area">
            <div className="input-block">
                <span className="input-title">Title:</span>
                <input type="text" value={title} onChange={titleChange}/>
            </div>
            <div className="input-block">
                <span className="input-title">Date:</span>
                <input type="date" value={date} onChange={dateChange}/>
            </div>
            <div className="input-block">
                <span className="input-title">Time:</span>
                <input type="time" value={time} onChange={timeChange}/>
            </div>
            <div className="input-block">
                <span className="input-title">Note:</span>
                <textarea value={note} onChange={noteChange}/>
            </div>
        </div>
        <div className = "btn-area">
            <div className = "btn btn-clean" onClick={clean}>clean</div>
            <div className = "btn btn-submit" onClick={addNote}>add</div>
        </div>
    </div>
}
export default NoteEdit