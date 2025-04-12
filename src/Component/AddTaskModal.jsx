import React, { useState } from "react";

function AddTaskModal(props) {
  const [title, setTitle] = useState(() =>
    props.isedit ? props.editdata.title || "" : ""
  );
  const [description, setDescription] = useState(() =>
    props.isedit ? props.editdata.description || "" : ""
  );
  const [error, setError] = useState("");

  function validateInput() {
    if (!title.trim()) {
      setError("Title is required.");
      return false;
    }
    if (!description.trim()) {
      setError("Description is required.");
      return false;
    }
    setError("");
    return true;
  }

  function editTask() {
    if (!validateInput()) return;
    props.setEditTodos((prev) => {
      const newTodo = prev.map((element) => {
        if (element.id === props.editdata.id) {
          return {
            ...element,
            title: title,
            description: description,
            isCompleted: false,
          };
        }
        return element;
      });
      localStorage.setItem("todolist", JSON.stringify(newTodo));
      return newTodo;
    });
    props.setEdit(false);
  }

  function addTodo() {
    if (!validateInput()) return;
    const newTodo = {
      title: title.trim(),
      description: description.trim(),
      isCompleted: false,
      id: Date.now(),
    };
    let updateTodo;
    props.setTodos((prev) => {
      updateTodo = [newTodo, ...prev];
      return updateTodo;
    });
    localStorage.setItem("todolist", JSON.stringify(updateTodo));
    props.closemodal();
  }

  function handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline in textarea
      props.isedit ? editTask() : addTodo();
    }
  }

  return (
    <div
      onClick={() => {
        if (props.isedit) props.setEdit(false);
        else props.closemodal();
      }}
      className="z-50 fixed top-0 left-0 w-full h-full backdrop-blur-sm flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-5 pt-8 h-[450px] w-[400px] bg-[#4c4b4b] border-[1px] rounded-lg border-[#1DCD9F] flex flex-col gap-3 relative"
      >
        <div
          onClick={() => {
            if (props.isedit) props.setEdit(false);
            else props.closemodal();
          }}
          className="cursor-pointer w-[30px] h-[30px] text-[1.2rem] absolute top-[2px] right-[4px] bg-[#6e6868] flex justify-center items-center rounded-[100%]"
        >
          X
        </div>

        <input
          value={title}
          onInput={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyPress}
          className="text-white border-[1px] rounded-lg border-[#1DCD9F] text-[20px] p-2 bg-[#222222]"
          type="text"
          placeholder="Enter the title"
        />
        <textarea
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          onKeyDown={handleKeyPress}
          className="text-white border-[1px] rounded-lg border-[#1DCD9F] text-[15px] p-2 bg-[#222222]"
          rows={4}
          placeholder="Enter the task details"
        ></textarea>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          className="w-full bg-[#1DCD9F] text-[20px] p-2 text-black"
          onClick={props.isedit ? editTask : addTodo}
        >
          {props.isedit ? "Edit Task" : "Add Task"}
        </button>
      </div>
    </div>
  );
}

export default AddTaskModal;
