import { FInput, Header, SecNotes} from "./components";
import { getData} from "./utils/index";

import { useState, useEffect } from "react";

import style from "./styles/style.css";

function App() {
    const [clue,setClue] = useState("");
    const [findNotes,setFindNotes] = useState([]);
    const [notes,setNotes] = useState(getData());
    const onNotes = (findNotes || notes).filter((note)=> !note.archieved);
    const  archNotes = (findNotes || notes).filter((note)=> note.archieved);

    useEffect(() => {
        setFindNotes(notes.filter((note) => note.tittle.toLowerCase().includes(clue.toLowerCase())));
    },[clue,notes]);

    return(
        <>
        <Header findN={clue} updateClue={setClue} updNotes={setNotes}/>
        <main className={style.main}>
        <FInput updNotes={setNotes} />
        <SecNotes label='Catatan yang Active' notes={onNotes} setNotes={setNotes} />
        <SecNotes label='Catatan yang diarsipkan' notes={archNotes} setNotes={setNotes} />
        </main>
      </>
        );
}
export default App;