import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";


const DialogItem = (props) => {
  return (<div className={s.dialog}>
    <NavLink className={Data => Data.isActive ? s.activeDialog : s.dialogItem} to={'/dialogs/' + props.id}>{props.name}</NavLink>
  </div>)
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
}


const Dialogs = (props) => {
  return (
    <section className={s.dialogsSection} >
      <h3 className="title">Dialogs</h3>
      <div className={s.dialogs}><div className={s.dialogsItems}>
        <DialogItem name='Nick' id='1' />
        <DialogItem name='Dmitry' id='2' />
        <DialogItem name='Valery' id='3' />
        <DialogItem name='Olga' id='4' />
        <DialogItem name='Alina' id='5' />
        <DialogItem name='Valeria' id='6' />
      </div>
      <div className={s.messages}>
        <Message message="Hello" />
        <Message message="Hi!" />
        <Message message="How are you?" />
      </div></div>
      
    </section>
  );
};

export default Dialogs;
