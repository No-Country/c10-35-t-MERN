const db = require("../models/index");
const Brand = db.Brands;

// Create and Save a new Brand

exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Brand
  const brand = {
    name: req.body.name,
    description: req.body.description,
    isAvailable: req.body.isAvailable ? req.body.isAvailable : false,
  };

  // Save Brand in the database
  Brand.create(brand)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Brand.",
      });
    });
};

// Retrieve all Brands from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Brand.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving brands.",
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Brand.findByPk(id)
        .then((data) => {
        res.send(data);
        })
        .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Brand with id=" + id,
        });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    
    Brand.update(req.body, {
        where: { id: id },
    })
        .then((num) => {
        if (num == 1) {
            res.send({
            message: "Brand was updated successfully.",
            });
        } else {
            res.send({
            message: `Cannot update Brand with id=${id}. Maybe Brand was not found or req.body is empty!`,
            });
        }
        })
        .catch((err) => {
        res.status(500).send({
            message: "Error updating Brand with id=" + id,
        });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;
    
    Brand.update(
{
    isAvailable: false,
    updatedAt: new Date(),
}    ,
    {
        where: { id: id },
    })
        .then((num) => {
        if (num == 1) {
            res.send({
            message: "Brand was deleted successfully!",
            });
        } else {
            res.send({
            message: `Cannot delete Brand with id=${id}. Maybe Brand was not found!`,
            });
        }
        })
        .catch((err) => {
        res.status(500).send({
            message: "Could not delete Brand with id=" + id,
        });
        });
};  
