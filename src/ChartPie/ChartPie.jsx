import React from "react";
import styles from "./ChartPie.module.css";
import { PieChart, Pie, Cell } from "recharts";
import { useTaskContext } from "../TaskContext";
import { getExpiredTasks } from "../../utils";

const COLORS = ["#3b82f6", "#10b981", "#ef4444"];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, payload }) => {
  const RADIAN = Math.PI / 180;
  // Aumentiamo la distanza per evitare sovrapposizioni
  const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill={payload.color}
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize="14"
      fontWeight="500"
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function MyPieChart() {
  const { tasks = [] } = useTaskContext();

  if (!Array.isArray(tasks) || tasks.length === 0) {
    return <h1>Nessun task disponibile per il grafico.</h1>;
  }

  const tasksCompleted = tasks.filter((task) => task.isCompleted).length;
  const tasksExpired = getExpiredTasks(tasks);
  const tasksInProgress = tasks.length - tasksCompleted - tasksExpired;

  const data = [
    { name: "In corso", value: tasksInProgress, color: "#3b82f6" },
    { name: "Completati", value: tasksCompleted, color: "#10b981" },
    { name: "Scaduti", value: tasksExpired, color: "#ef4444" },
  ].filter(item => item.value > 0);

  return (
    <>
      <div className={styles.pieChartHeader}>
        <h1>Stato Task</h1>
        <p>Distribuzione per stato di completamento</p>
      </div>
      
      <PieChart width={500} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={{
            stroke: (entry, index) => COLORS[index] || '#666',
            strokeWidth: 1
          }}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
}