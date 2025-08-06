import styles from './Histogram.module.css';
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTaskContext } from "../TaskContext"

export default function Histogram () {
  const { tasks } = useTaskContext();
  
  const chartData = React.useMemo(() => {
    const highCount = tasks.filter(task => 
      task.priority?.toLowerCase() === 'alta'
    ).length;
    const mediumCount = tasks.filter(task => 
      task.priority?.toLowerCase() === 'media'
    ).length;
    const lowCount = tasks.filter(task => 
      task.priority?.toLowerCase() === 'bassa'
    ).length;
  
    return [
      { name: 'Alta', numero: highCount, fill: '#ef4444' },
      { name: 'Media', numero: mediumCount, fill: '#f59e0b' },
      { name: 'Bassa', numero: lowCount, fill: '#22c55e' }
    ];
  }, [tasks]);

  return (
    <>
    <div className={styles.histogramHeader}>
      <h1>Distribuzione Priorità</h1>
      <p>Task suddivisi per livello di priorità</p>
    </div>
      <div className={styles.histogram}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          key={tasks.length}
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="numero">
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
   
  )
}