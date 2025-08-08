import {  useState, useEffect, use } from "react";

export default function useDebouncedSearch(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(()=>{
    const timer = setTimeout(() =>{ setDebouncedValue(value) }, delay);
    return () => clearTimeout(timer);
  },[ value, delay ]);

  return debouncedValue;
}