import Input from "./input";

const Header = ({findN, updateClue}) => {
    return (
        <header className="headerbar">
            <h1 className="headtitle">
                Important Note
            </h1>
            <Input 
            value={findN}
            onChange={updateClue}
            type='find'
            id='find_note'
            name='find_note'
            placeholder='Cari catatan disini..'
            />
        </header>
    );
};
export default Header;