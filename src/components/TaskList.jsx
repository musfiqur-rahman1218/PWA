import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, removeTask } from '../db';
import { Trash2 } from 'lucide-react';

export default function TaskList() {
    const tasks = useLiveQuery(() => db.tasks.toArray());

    const getDeadlineClass = (deadlineStr) => {
        const deadline = new Date(deadlineStr);
        const now = new Date();
        const diffTime = deadline - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffTime < 0) return 'task-deadline-passed'; // Passed
        if (diffDays <= 3) return 'task-deadline-urgent'; // Within 3 days
        if (diffDays <= 7) return 'task-deadline-warning'; // Within 7 days
        return 'task-deadline-safe'; // > 7 days
    };

    const getDeadlineText = (deadlineStr) => {
        return new Date(deadlineStr).toLocaleString();
    };

    if (!tasks) return null;

    return (
        <div className="task-list">
            {tasks.length === 0 && <p style={{ textAlign: 'center', opacity: 0.6 }}>No tasks yet. Add one above!</p>}
            {tasks.map(task => (
                <div key={task.id} className={`task-item ${getDeadlineClass(task.deadline)}`}>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: '500' }}>{task.description}</div>
                        <div style={{ fontSize: '0.85em', opacity: 0.8 }}>Due: {getDeadlineText(task.deadline)}</div>
                    </div>
                    <button
                        className="btn"
                        style={{ padding: '0.5em', background: '#EF4444' }}
                        onClick={() => removeTask(task.id)}
                        aria-label="Delete task"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            ))}
        </div>
    );
}
