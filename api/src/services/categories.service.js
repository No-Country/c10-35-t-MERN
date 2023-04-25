const db = require('../models/index');

const User = db.Users;
const Category = db.Categories;

const { AppError } = require('../utils/errors');

const create = async (category) => {
    const { category_name } = category;

    if (!category_name) {
        throw new AppError('Mandatory data is missing', 400);
    }

    const categoryNameUpperCase = category_name.toUpperCase();
    
    // find or create
    const [categoryFound, CategoryCreated] = await Category.findOrCreate({
        where: { category_name: categoryNameUpperCase , isAvailable: true },
    });
    return {
        category: categoryFound.category_name,
    };
};

const findAll = async () => {
  return await Category.findAll({
    where: { isAvailable: true },
  });
};

const findAllByCategoryId = async (categoryId) => {
    return await Category.findAll({
        where: { id: categoryId, isAvailable: true},
    }
    );
};

const deleteCategory = async (category) => {
    const { categoryId } = category;

    if (!categoryId) {
        throw new AppError('Mandatory data is missing', 400);
    }

    const categoryFound = await Category.findOne({ where: { id: categoryId , isAvailable: true} });

  if (!categoryFound) {
    throw new AppError('Category not found', 404);
  }


    categoryFound.isAvailable = false;

    await categoryFound.save();
};

const updateCategory = async (category) => {
    const { categoryId, category_name } = category;

    if (!categoryId || !category_name) {
        throw new AppError('Mandatory data is missing', 400);
    }

    const categoryFound = await Category.findOne({ where: { id: categoryId , isAvailable: true} });

  if (!categoryFound) {
    throw new AppError('Category not found', 404);
  }

    categoryFound.category_name = category_name.toUpperCase();

    await categoryFound.save();

    return {
        category: categoryFound.category_name,
    };
};

module.exports = {
    create,
    findAll,
    findAllByCategoryId,
    deleteCategory,
    updateCategory,
};
