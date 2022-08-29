import { createContext, useState, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TaskContext = createContext({
    tasks:[],
    setValue: (tasks) => {}
});

export const TaskContextProvder = ({children}) =>{
    const [tasks, setTasks] = useState([]);
    const { data, setValue } = useLocalStorage("tasks", []);

useEffect(() => {
    setTasks(data);
}, [data]);

     return(
        <TaskContext.Provider value={{ tasks, setValue}}>
            {children}
            </TaskContext.Provider>
     );
};

export const useTaskContext = () => useContext(TaskContext);