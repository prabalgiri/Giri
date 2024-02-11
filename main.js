import express, { Request, Response } from 'express';

// Define the todo list as an array
let todoList: { id: number; task: string }[] = [
    { id: 1, task: 'Complete assignment' },
    { id: 2, task: 'Buy groceries' },
    { id: 3, task: 'Call mom' },
];

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// DELETE endpoint to delete a todo item by ID
app.delete('/api/todo/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    // Find the index of the todo item with the given ID
    const index = todoList.findIndex(todo => todo.id === id);

    // If the todo item with the given ID exists, remove it from the list
    if (index !== -1) {
        todoList.splice(index, 1);
        res.status(200).send(`Todo item with ID ${id} deleted successfully.`);
    } else {
        res.status(404).send(`Todo item with ID ${id} not found.`);
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
