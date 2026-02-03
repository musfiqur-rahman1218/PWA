import Dexie from 'dexie';

export const db = new Dexie('MotivationalTaskManagerDB');

db.version(1).stores({
  tasks: '++id, description, deadline, completed' // Primary key and indexed props
});

export function removeTask(id) {
  return db.tasks.delete(id)
    .then(() => { console.log(`Task with id ${id} was removed`); return true; })
    .catch((err) => { console.error("Failed to remove task: ", err); return false; });
}
