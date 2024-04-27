const Categorie = require('../models/categorie.model');

//Get All Categories
const getCategories = async (req, res) => {
    try {
        const Categories =  await Categorie.find({});
        res.status(200).json(Categories);
  
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Get a Specific Categorie
const getSpecificCategorie = async (req, res) => {
    try {
        const { id } = req.params;
        const categorie =  await Categorie.findById(id);
        res.status(200).json(categorie);
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Add a Categorie
const addCategorie = async (req, res) => {
    try {
        const categorie =  await Categorie.create(req.body);
        res.status(200).json(categorie);
  
      } catch (error) {
          res.status(500).json({message: error.message});
      }
}
//Update a Categorie
const updateCategorie = async (req, res) => {
    try {
        const {id} = req.params;
        const categorie = await Categorie.findByIdAndUpdate(id, req.body);
        if(!categorie){
            return res.status(404).json({message: 'Categorie not found'})
        }
        const updatedcategorie = await Categorie.findById(id);
        res.status(200).json(updatedcategorie);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
//Delete a Categorie
const deleteCategorie = async (req, res) => {
    try {
        const {id} = req.params;
        const categorie = await Categorie.findByIdAndDelete(id);
        if(!categorie){
            return res.status(404).json({message: 'Categorie not found'})
        }
        res.status(200).json('Categorie Deleted successfully');
   } catch (error) {
        res.status(500).json({message: error.message});
   }
}

module.exports = {
    getCategories,
    getSpecificCategorie,
    updateCategorie,
    addCategorie,
    deleteCategorie
}