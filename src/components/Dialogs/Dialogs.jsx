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

  let dialogsData = [
    { id: 1, name: 'Nick' },
    { id: 2, name: 'Dmitry' },
    { id: 3, name: 'Valery' },
    { id: 4, name: 'Olga' },
    { id: 5, name: 'Alina' },
    { id: 6, name: 'Valeria' }
  ]
  let messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'Hi!' },
    { id: 3, message: 'How are you?' }
  ]
  return (
    <section className={s.dialogsSection} >
      <h3 className="title">Dialogs</h3>
      <div className={s.dialogs}><div className={s.dialogsItems}>
        {dialogsData.map(el=><DialogItem name={el.name} id={el.id} />)}
        
      </div>
        <div className={s.messages}>
          {messagesData.map(el => <Message message={el.message} />)}
        </div>
      </div>

    </section>
  );
};

export default Dialogs;
