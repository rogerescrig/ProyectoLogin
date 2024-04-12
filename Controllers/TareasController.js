const Tareas = require('./../Models/TareasModel');

//  REGISTRAR TAREAS
const post = async (req, res) => {
    try {  
      console.log(Tareas);
      let body = req.body;
      const created_tareas = await Tareas.create({
        id: body.id,
        name: body.name,
        descripcion: body.descripcion,
        usuario_id: body.usuario_id,
      });
      res.status(201).json({
        msg: "Tarea registrada correctamente",
        data: created_tareas,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error.error,
        msg: "Error al registrar",
      });
    }
  };

  
const getTareas = async function (req, res){
    try{
      const tareas = await Tareas.findAll();
      res.status(200).json(tareas);
    }catch(err){
      console.log(err);
      res.status(500).json({error: "ERROR PARA OBTENER LOS USUARIOS"})
    }
  }

//  METODO GET POR ID

const getId = async function (req, res) {
    try {
        const tarea = await Tareas.findOne({ where: { id: req.params.id } });
          res.status(200).json(tarea);        
        }
     catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

//  METODO UPDATE
  const update = async function (req, res) {
    try {
      const tarea = await Tareas.findOne({where: {id: req.params.id }});
      await tarea.update(req.body);
      res.status(200).json(tarea);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  //  METODO DELETE
  const deleteId = async function (req, res) {
    try {
      const tarea = await Tareas.findOne({where: {id: req.params.id }});
      await tarea.destroy(req.body);
      
      res.status(200).json({tarea: tarea, msg: "Tarea Borrada con exito"});
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  module.exports = { post, getTareas, getId, update, deleteId};
  