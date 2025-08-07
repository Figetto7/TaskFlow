import React from 'react';
import styles from "./NewTaskForm.module.css";
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import { useTaskContext } from "../../../Context/TaskContext";
import { priorityOptions, categoryOptions } from "../../../Context/TestTasks";

export default function NewTaskForm() {
  const { addTask } = useTaskContext();
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);


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



  const {
    reset,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newTask = {
      title: data.titolo,
      description: data.descrizione,
      category: data.categoria,
      deadline: data.dataScadenza,
      priority: data.priorita,
      isCompleted: false
    }
    addTask(newTask);
    reset();
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const hasError = Object.keys(errors).length > 0;
  
  return (
    <>
      {showSuccessMessage && <div className={styles.successMessage}>Task creato con successo, puoi visualizzarlo nella Home</div>}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.addTaskForm}>
        <div style={{ display: 'flex', gap:' 40%', alignItems: 'center' }}>
          <h2 className={styles.addTaskFormTitle}>Dettagli Task</h2>
          {hasError && <span className={styles.addTaskFormErrorMessage}>I campi in rosso sono obbligatori</span>}
        </div>
      <p className={styles.addTaskFormSubtitle}>Compila tutti i dati necessari per creare il tuo nuovo task</p>
      <label htmlFor='titolo' className={styles.addTaskFormLabel}>Titolo *</label>
      <input {...register("titolo", { required: true })} placeholder=" Es. Completare presentazione progetto" id="titolo" 
      className={errors.titolo ? `${styles.addTaskFormInput} ${styles.addTaskFormError}` : styles.addTaskFormInput} />
      

      <label htmlFor='descrizione' className={styles.addTaskFormLabel}>Descrizione *</label>
      <textarea {...register("descrizione", { required: true })} placeholder=" Es. Descrivere nel dettaglio cosa devi fare " id="descrizione" 
      className={errors.descrizione ? `${styles.addTaskFormTextarea} ${styles.addTaskFormError}` : styles.addTaskFormTextarea}></textarea>

      <label htmlFor='priorita' className={styles.addTaskFormLabel}>Priorità *</label>
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


      <label htmlFor='categoria' className={styles.addTaskFormLabel}>Categoria *</label>
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


      <label htmlFor='dataScadenza' className={styles.addTaskFormLabel}>Data di Scadenza *</label>
      <input type="date" {...register("dataScadenza", { required: true })} id="dataScadenza" className={errors.dataScadenza ? `${styles.addTaskFormInput} ${styles.addTaskFormError}` : styles.addTaskFormInput} />
      <div className={styles.addTaskFormButtons}>
        <button type="submit" className={styles.addTaskFormSubmit}>Crea Task</button>
        <button type="button" className={styles.addTaskFormCancel} onClick={() => reset()}>Annulla</button>
      </div>
    </form>
  </>
  );
}
