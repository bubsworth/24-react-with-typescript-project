const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="Text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
