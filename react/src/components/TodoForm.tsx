import React, { useState } from 'react';

type FormProps = {
  onAdd: (text: string) => void;
};

const TodoForm = ({ onAdd }: FormProps) => {
  const [value, setValue] = useState<string>('');
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAdd(value);
    setValue('');
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">Add To Do</button>
    </form>
  );
};

export default TodoForm;
