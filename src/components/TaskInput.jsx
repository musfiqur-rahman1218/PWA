import React, { useState } from 'react';
import { db } from '../db';

export default function TaskInput() {
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!description || !deadline) return;

        try {
            await db.tasks.add({
                description,
                deadline: new Date(deadline).toISOString(),
                completed: false
            });
            setDescription('');
            setDeadline('');
        } catch (error) {
            console.error("Failed to add task:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="card">
            <h3>Add New Task</h3>
            <input
                type="text"
                placeholder="Task Description"
                className="input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <input
                type="datetime-local"
                className="input"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                required
            />
            <button type="submit" className="btn" style={{ width: '100%' }}>Add Task</button>
        </form>
    );
}
