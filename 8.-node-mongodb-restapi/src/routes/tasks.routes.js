import {Router} from 'express';
const router = Router();

// Database connection
import {connect} from '../database';

//Para convertir un String a un Objeto
import { ObjectID } from 'mongodb';

//Creando Rutas
router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('tasks').find({}).toArray();
    res.json(result);
});

router.post('/', async (req, res) => {
    const db = await connect();
    const task = {
        title: req.body.title,
        description: req.body.description
    };
    const result = await db.collection('tasks').insert(task);
    res.json(result.ops[0]);
    res.json('Task created')
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect();
    const result = await db.collection('tasks').findOne({_id: ObjectID(id)});
    res.json(result);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const db = await connect(); // Para no escribir este codigo se puede hacer mediante un middleware
    const result = await db.collection('tasks').deleteOne({_id: ObjectID(id)});
    res.json({message:`Task ${id} deleted`, result})
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updateTask = {
        title: req.body.title,
        description: req.body.description
    };
    const db = await connect();
    await db.collection('tasks').updateOne({_id: ObjectID(id)}, {$set: updateTask});
    res.json({message:`Task ${id} Update`})
});
 
export default router;