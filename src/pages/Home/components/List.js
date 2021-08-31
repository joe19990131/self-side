import './css/list.css'
const List = ({data}) => {
    return <div className="list-wrapper">
        <div className="title">{data.title}</div>
        <div className="note">{data.note}</div>
        <div className="time-area">
            <span className="time">{data.date}</span>
            <span className="time">{data.time}</span>
        </div>
    </div>
}
export default List