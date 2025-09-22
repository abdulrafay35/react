import pb from "../src/config/pocketbase";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { InputForm } from "./components/InputForm";
import { Todos } from "./components/Todos";


function App() {
  const [records, setRecords] = useState([]);

  async function fetchTodos() {
    setRecords(await pb.collection('Todos').getFullList());
  }

  useEffect(()=> {
    fetchTodos();
  }, [])


  return (
    <>
      <Header />
      <InputForm  fetchTodos={fetchTodos} />
      <Todos records={records} fetchTodos={fetchTodos} />
    </>
  );
}

export default App
