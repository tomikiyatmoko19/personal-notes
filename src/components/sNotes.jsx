import Card from "./card";

const SecNotes = ({label,notes,setNotes}) => {
    return (
        <section className="mynotelist">
            <h2>{label}</h2>
            {notes.length === 0 ? (
                <p>Tidak ditemukan...</p>
            ): (
                <div>
                    {notes?.map ((note => (
                        <Card key={note.id} action={setNotes} {...note}/>
                    )))}
                </div>
            )}
        </section>
    );
};
export default SecNotes;