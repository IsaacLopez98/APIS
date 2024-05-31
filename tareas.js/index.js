import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());


let tasks = [
  { id: 1, title: 'Tarea 1', completed: false },
  { id: 2, title: 'Tarea 2', completed: false },
  { id: 3, title: 'Tarea 3', completed: true },
];

app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, title: req.body.title, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});


app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({ error: 'Tarea no encontrada' });
  } else {
    res.json(task);
  }
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    res.status(404).json({ error: 'Tarea no encontrada' });
  } else {
    tasks.splice(index, 1);
    res.json({ message: 'Tarea eliminada' });
  }
});

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({ error: 'Tarea no encontrada' });
  } else {
    task.title = req.body.title;
    res.json(task);
  }
});

app.patch('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    res.status(404).json({ error: 'Tarea no encontrada' });
  } else {
    task.completed = true;
    res.json(task);
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});