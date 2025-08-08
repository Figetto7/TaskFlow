import React from "react";
import Select from "react-select";
import styles from "./FiltriTask.module.css"
import useDebouncedSearch from "./debouncingSearchBar";

export default function FiltriTask ({ priorityFilter, setPriorityFilter, statusFilter, setStatusFilter, searchFilter, setSearchFilter }) {
  const priorityOptions = [
  { value: '', label: 'Tutte le priorità' },
  { value: 'alta', label: 'Alta' },
  { value: 'media', label: 'Media' },
  { value: 'bassa', label: 'Bassa' }
  ]
  const statusOptions = [
  { value: '', label: 'Tutti gli stati' },
  { value: 'completed', label: 'Completati' },
  { value: 'pending', label: 'In corso' }
  ]
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '10px',
      height: '40px',
      fontWeight: 'lighter',
      minHeight: '40px',
      backgroundColor: '#e9ecef',
      border: '1px solid #dee2e6',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#dee2e6'
      }
    })
  } 
  const [search , setSearch] = React.useState('');
  const debouncedSearch = useDebouncedSearch(search, 300);
  React.useEffect(() => {
    setSearchFilter(debouncedSearch);
  }, [debouncedSearch, setSearchFilter]);

  return (
    <div className={styles.filtersContainer}>
      <input 
        className={styles.searchBar} 
        type="text" 
        placeholder="🔍 Cerca task..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Select
      value={priorityOptions.find(option => option.value === priorityFilter)}
      onChange={(selectedOption) => setPriorityFilter(selectedOption?.value || '')}
      options={priorityOptions}
      placeholder="Tutte le priorità"
      isClearable
      styles={customStyles}
      />
      <Select
      value={statusOptions.find(option => option.value === statusFilter)}
      onChange={(selectedOption) => setStatusFilter(selectedOption?.value || '')}
      options={statusOptions}
      placeholder="Tutti gli stati"
      isClearable
      styles={customStyles}
      />
    </div>
    
  )
}