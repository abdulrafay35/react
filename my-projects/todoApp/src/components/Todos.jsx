import pb from "../config/pocketbase";

export function Todos({records, fetchTodos}) {
    async function deleteTodo(id) {
        await pb.collection('Todos').delete(id);
        fetchTodos();
    }

    return (
        <>
        {
            records.length===0 ? <h2 className="text-center text-2xl text-gray-100">You are all caught up</h2> : (
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-6 px-20">
            {(
                records.map((todo) => {
                    return (
                        <div key={todo.id} className="bg-yellow-100 flex justify-between items-center gap-3 py-3 px-4 rounded">
                            <p className="text-[20px] font-light">{todo.title}</p>
                            <div className="flex gap-2">
                                <button className="p-1 bg-green-500 rounded-3xl cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fafafa" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
                                </button>
                                <button className="p-1 bg-red-500 rounded-3xl cursor-pointer" onClick={() => deleteTodo(todo.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fafafa" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })
            )}

        </div>
            )
        }
        </>
    );
}