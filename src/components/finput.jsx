import { useState } from "react";
import Input from "./input";

const FInput = ({updNotes}) => {
    const [tittle,setTittle] = useState("");
    const [note, setNote] = useState("");

    const createNote = (event) => {
      event.preventDefault();
      const timestamp = new Date().toISOString();
  
      updNotes((notes) => [
        ...notes,
        { id: timestamp, tittle, body: note, archived: false, createdAt: timestamp },
      ]);
    };
  
    return (
      <form className="notes" onSubmit={createNote}>
        <h2 className="title">Buat Catatan</h2>
        <small className="remaintext">
          Batas huruf: <span >{40 - tittle.length}</span>
        </small>
        <Input
          value={tittle}
          onChange={setTittle}
          type='text'
          placeholder='Judul...'
          id='tittle'
          name='tittle'
          required
        />
        <Input
          value={note}
          onChange={setNote}
          type='textarea'
          placeholder='Tulis catatanmu disini'
          id='note'
          name='note'
          required
        />
        <Input type='submit' id='submit_form' name='submit_form' value='Buat' />
      </form>
    );
  };
  
  export default FInput;
  