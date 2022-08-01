import style from "../styles/style.css";
const Input = (att) => {
    const changeHandler = (event) => {
        if (att.name === "tittle") {
            const nowText = event.target.value;
            att.onChange((oldText)=> (nowText.length <= 50? nowText : oldText));
        } else {
            att.onChange(event.target.value);
        }
    };
    return (
        <>
          {att.type === "textarea" ? (
            <textarea
              {...att}
              className={`${style.input} ${style.textarea}`}
              value={att.value}
              spellCheck={false}
              onChange={changeHandler}
            />
          ) : (
            <input
              {...att}
              className={style.input}
              spellCheck={false}
              value={att.value}
              onChange={changeHandler}
            />
          )}
        </>
      );
};
export default Input;