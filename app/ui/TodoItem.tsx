"use client";
import styles from './TodoItem.module.css';

interface Props {
    id: string;
    title: string;
    isCompleted: boolean;
    toggleTodo : (id: string, isCompleted: boolean) => void
}
export default function TodoItem({ id, title, isCompleted,toggleTodo }: Props) {
    return (
        <li className='flex gap-3'>
            <input type="checkbox"
                name={id}
                id={id}
                className="peer cursor-pointer"
                defaultChecked={isCompleted}
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            <label className="className=cursor-pointer peer-checked:line-through peer-checked:text-slate-500" htmlFor={id} >
                {title}
                </label>
        </li>
    );
}