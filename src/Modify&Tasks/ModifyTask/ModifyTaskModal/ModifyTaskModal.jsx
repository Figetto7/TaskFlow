import styles from "./ModifyTaskModal.module.css";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import { priorityOptions, categoryOptions } from "../../../Context/TestTasks";
import Select from "react-select";
import { useTaskContext } from "../../../Context/TaskContext";
import React from "react";
export default function ModifyTaskModal({ task, onClose, onSave }) {
  const { updateTask, deleteTask } = useTaskContext();
  const [showConfirmDelete, setShowConfirmDelete] = React.useState(false);
  const onSubmit = (data) => {
    const modifiedTask = {
      ...task,
      title: data.titolo,
      description: data.descrizione,
      priority: data.priorita,
      category: data.categoria,
      deadline: data.dataScadenza
    };
    updateTask(modifiedTask);
    onClose();
  }
   const {
  register,
  handleSubmit,
  control,
  formState: { errors },
} = useForm({
  defaultValues: {
    titolo: task?.title || '',
    descrizione: task?.description || '',
    dataScadenza: task?.deadline || ''
  }
});

  const getCustomStyles = (hasError) => ({
  control: (provided) => ({
    ...provided,
    borderRadius: '10px',
    height: '40px',
    fontWeight: 'lighter',
    minHeight: '40px',
    backgroundColor: '#e9ecef',
    border: hasError
      ? '2px solid red'
      : '1px solid #dee2e6',
    boxShadow: 'none',
    '&:hover': {
      borderColor: hasError ? 'red' : '#dee2e6'
    }
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "grey",
    fontWeight: 'lighter'
  })
});
  const hasError = Object.keys(errors).length > 0;
  return (
    <Modal isOpen={true} onRequestClose={onClose} shouldCloseOnOverlayClick={true} 
            ariaHideApp={false} className={styles.modalContent} 
            overlayClassName={styles.modalOverlay} style={{outline: 'none', border: 'none'}}>
        <form  className={styles.modalForm} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', gap:' 17%', alignItems: 'center' }}>
        <h2 className={styles.modalTaskFormTitle}>Modifica Task </h2>
        {hasError && <span className={styles.modalFormErrorMessage}>I campi in rosso sono obbligatori</span>}
        <button type="button" className={styles.modalTaskFormCancel} onClick={onClose}>Chiudi</button>
      </div>
      <p className={styles.modalFormSubtitle}>Moficica tutti i dati necessari per aggiornare il tuo task</p>
      
      <label htmlFor='titolo' className={styles.modalFormTitleTask}>Titolo *</label>
      <input {...register("titolo", { required: true })}  id="titolo" 
      className={errors.titolo ? `${styles.modalTaskFormInput } ${styles.modalTaskFormInputError}` : styles.modalTaskFormInput } />
      

      <label htmlFor='descrizione' className={styles.modalFormTitleTask}>Descrizione *</label>
      <textarea {...register("descrizione", { required: true })} id="descrizione" 
      className={errors.descrizione ? `${styles.modalTaskFormTextArea} ${styles.modalTaskFormTextAreaError}` : styles.modalTaskFormTextArea}></textarea>

      <label htmlFor='priorita' className={styles.modalFormTitleTask}>Priorità *</label>
      <Controller
      name="priorita"
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
    <Select
      {...field}
      options={priorityOptions}
      placeholder="Tutte le priorità"
      isClearable
      styles={getCustomStyles(!!errors.priorita)}
      onChange={val => field.onChange(val?.value || '')}
      value={priorityOptions.find(opt => opt.value === field.value) || null}
    />
  )}
/>
      <label htmlFor='categoria' className={styles.modalFormTitleTask}>Categoria *</label>
      <Controller
        name="categoria"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
        <Select
          {...field}
          options={categoryOptions}
          placeholder="Tutte le categorie"
          isClearable
          styles={getCustomStyles(!!errors.categoria)}
          onChange={val => field.onChange(val?.value || '')}
          value={categoryOptions.find(opt => opt.value === field.value) || null}
        />
  )}
/>
      <label htmlFor='dataScadenza' className={styles.modalFormTitleTask}>Data di Scadenza *</label>
      <input type="date" {...register("dataScadenza", { required: true })} id="dataScadenza" 
              className={errors.dataScadenza ? `${styles.modalTaskFormInput} ${styles.modalTaskFormInputError}` : styles.modalTaskFormInput}
 />
      <div className={styles.modalTaskFormButtons}>
        <button type="submit" className={styles.modalTaskFormModifyButton} >Modifica Task</button>
        <button type="button" className={styles.modalTaskFormCancelTaskButton} onClick={() => setShowConfirmDelete(true)} >Cancella Task</button>
      </div>
    </form>
    {showConfirmDelete && (
   <Modal
    isOpen={true}
    onRequestClose={() => setShowConfirmDelete(false)}
    className={styles.modalContent}
    overlayClassName={styles.modalOverlay}>
    <div className={styles.confirmCancellationHeader}>
      <h3 className={styles.confirmCancellationTitle}>Conferma eliminazione</h3>
      <p className={styles.confirmCancellationMessage}>Sei sicuro di voler eliminare questa task?</p>
    </div>
    <div className={styles.confirmCancellationButtons}>
      <button onClick={() => setShowConfirmDelete(false)} className={styles.dismissCancellationButton}>Annulla</button>
      <button onClick={() => {
        deleteTask(task.id);
        setShowConfirmDelete(false);
        onClose();

      }} className={styles.confirmCancellationButton}>
        Elimina
      </button>
      
    </div>
  </Modal>
)}
    </Modal>
  )
}