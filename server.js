const express = require('express');
const personRoutes = require('./person');
const studentRoutes = require('./student');
const bookRouters = require('./book');

const app = express();
app.use(express.json());

app.use('/api/person', personRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/book', bookRouters);

app.listen(3000, () => console.log('server running'));

 
