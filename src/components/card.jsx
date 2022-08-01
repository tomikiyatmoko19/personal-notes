import {formatDate} from "../utils";
import Button from "./button";

const Card = ({id,tittle,createdAt, body, archieved, action}) => {
  const delNote = (item) => action((notes)=> notes.filter((note) => note.id !== item));
  const chArchieved = (item) => {
    action((notes)=> notes.map((note)=> {
        if (note.id === item) {
            return {...note,archieved:!note.archieved};
        }
        return note;
    }),
  );
};

    return (
    <article  id={id} className="listnote">
        <header >
            <h3>{tittle}</h3>
            <small>{formatDate(createdAt)}</small>
            <p>{body}</p>
        </header>
        <footer className="bottomnote">
            <Button eventHandler={()=>delNote(id)} label='Hapus'/>
            <Button 
            eventHandler={() => chArchieved(id)}
            label = {archieved ? "Jangan diarsip" : "Arsipkan"}/>
        </footer>
    </article>
  );    
};
export default Card;
