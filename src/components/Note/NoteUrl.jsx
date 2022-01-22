import {Link} from "react-router-dom";
function NoteUrl ({noteUrl}) {

 const listItems =   noteUrl.map((item, index) =>
     <div key={index}>
      <Link to={`/note/${item.id}`} className="url__item">{item.title}</Link>
      {(index !== noteUrl.length - 1) ?  <span className="line__oblique">/</span> : ''}
     </div>)
 return  <nav className="notion__url">
  { listItems }
 </nav>
}

export default NoteUrl