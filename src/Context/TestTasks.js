const testTasks = [
  {
    id: 1,
    title: "Setup ambiente di sviluppo",
    description: "Installare Node.js, VS Code e configurare il progetto React.",
    category: "Sviluppo",
    deadline: "2025-01-15",
    priority: "Alta",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Studiare React Hooks",
    description: "Approfondire useState, useEffect e useContext per il progetto.",
    category: "Formazione",
    deadline: "2025-01-20",
    priority: "Media",
    isCompleted: true,
  },
  
  // TASK SCADUTI (NON COMPLETATI)
  {
    id: 3,
    title: "Presentazione trimestrale",
    description: "Preparare slide per meeting Q4 con stakeholder aziendali.",
    category: "Lavoro",
    deadline: "2025-01-30", // Scaduta
    priority: "Alta",
    isCompleted: false,
  },
  {
    id: 4,
    title: "Backup dati server",
    description: "Eseguire backup completo database di produzione.",
    category: "IT",
    deadline: "2025-02-01", // Scaduta
    priority: "Alta",
    isCompleted: false,
  },
  
  // TASK IN CORSO (DIVERSE PRIORITÀ)
  {
    id: 5,
    title: "Implementare dark mode",
    description: "Aggiungere tema scuro all'applicazione TaskFlow.",
    category: "Sviluppo",
    deadline: "2025-08-15",
    priority: "Bassa",
    isCompleted: false,
  },
  {
    id: 6,
    title: "Code review progetto",
    description: "Revisionare codice del team e fornire feedback costruttivo.",
    category: "Lavoro",
    deadline: "2025-08-10",
    priority: "Media",
    isCompleted: false,
  },
  {
    id: 7,
    title: "Dentista controllo semestrale",
    description: "Prenotare e andare dal dentista per controllo di routine.",
    category: "Salute",
    deadline: "2025-08-20",
    priority: "Media",
    isCompleted: false,
  },
  
  // TASK FUTURI
  {
    id: 8,
    title: "Vacanze estive 2025",
    description: "Pianificare e prenotare vacanze per agosto 2025.",
    category: "Personale",
    deadline: "2025-09-01",
    priority: "Bassa",
    isCompleted: false,
  },
  {
    id: 9,
    title: "Corso avanzato TypeScript",
    description: "Iscriversi e completare corso online TypeScript per progetti futuri.",
    category: "Formazione",
    deadline: "2025-10-15",
    priority: "Media",
    isCompleted: false,
  },
  {
    id: 10,
    title: "Deploy app in produzione",
    description: "Configurare CI/CD e deployare TaskFlow su server di produzione.",
    category: "Sviluppo",
    deadline: "2025-12-01",
    priority: "Alta",
    isCompleted: false,
  }
];
  export const priorityOptions = [
    { value: '', label: 'Tutte le priorità' },
    { value: 'alta', label: 'Alta' },
    { value: 'media', label: 'Media' },
    { value: 'bassa', label: 'Bassa' }
  ];

  export const categoryOptions = [
    { value: '', label: 'Tutte le categorie' },
    { value: 'lavoro', label: 'Lavoro' },
    { value: 'personale', label: 'Personale' },
    { value: 'studio', label: 'Studio' },
    { value: 'casa', label: 'Casa' },
    { value: 'salute', label: 'Salute' },
    { value: 'finanze', label: 'Finanze' },
    { value: 'shopping', label: 'Shopping' },
    { value: 'altro', label: 'Altro' }
  ];
export default  testTasks