import { useState } from "react";
import pb from "../config/pocketbase";

export function InputForm({fetchTodos}) {
    const [todo, setTodo] = useState("");
    const [loading, setLoading] = useState(false);

    function selectTodo(e) {setTodo(e.target.value);}

    async function addTodo(e) {
        e.preventDefault();
        setLoading(true);
        await pb.collection('Todos').create({ "title": todo});
        setTodo("");
        fetchTodos();
        setLoading(false);
    }

    return(
        <form className=" mx-auto w-96 flex justify-center my-5 gap-1">
            <input className="w-full p-1 border-[1px] border-gray-200 outline-0 focus:border-green-100 rounded placeholder-gray-400 text-white" type="text" value={todo} onChange={selectTodo} placeholder="Do something"  />
            <input className=" py-1 px-2 bg-green-600 text-white rounded cursor-pointer hover:bg-green-700" type="submit" onClick={addTodo} value={loading ? "..." : "Add"} disabled={loading || todo.length < 5}  />
        </form>
    );
}