import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Nick</div>
        <div className={s.dialog}>Olga</div>
        <div className={s.dialog}>Valery</div>
        <div className={s.dialog}>Lera</div>
        <div className={s.dialog}>Alina</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Hello</div>
        <div className={s.message}>How are you?</div>
      </div>
    </div>
  );
};

export default Dialogs;
