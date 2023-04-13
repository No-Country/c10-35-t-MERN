const { where } = require('sequelize');
const db = require('../models/index');

const User = db.Users;
const Category = db.Categories;
const CategoryUser = db.Category_Users;

const { AppError } = require('../utils/errors');

const create = async (category) => {
    const { category_name, userId } = category;

    if (!category_name || !userId) {
        throw new AppError('Mandatory data is missing', 400);
    }

    const userFound = await User.findOne({ where: { id: userId , isAvailable: true} });

    if (!userFound) {
        throw new AppError('User not found', 404);
    }

    const categoryNameUpperCase = category_name.toUpperCase();
    
    // find or create
    const [categoryFound, CategoryCreated] = await Category.findOrCreate({
        where: { category_name: categoryNameUpperCase , isAvailable: true },
    });

    const [categoryUser, RelationCreated] = await CategoryUser.findOrCreate({
        where: { userId: userId, categoryId: categoryFound.id , isAvailable: true },
    });

    return {
        category: categoryFound.category_name,
    };
};

const findAll = async () => {
    return await Category.findAll({
        where: { isAvailable: true},
    }
    );
};

const findAllByUserId = async (userId) => {
    return await CategoryUser.findAll({
        where: { userId: userId , isAvailable: true},
        include: [{ model: Category, as: 'category' }],
    });
};

const deleteCategory = async (category) => {
    const { userId, categoryId } = category;

    if (!userId || !categoryId) {
        throw new AppError('Mandatory data is missing', 400);
    }

    const userFound = await User.findOne({ where: { id: userId , isAvailable: true} });

    if (!userFound) {
        throw new AppError('User not found', 404);
    }

    const categoryFound = await Category.findOne({ where: { id: categoryId , isAvailable: true} });

    if (!categoryFound) {
        throw new AppError('Category not found', 404);
    }

    const categoryUserFound = await CategoryUser.findOne({
        where: { userId: userId, categoryId: categoryId },
    });

    if (!categoryUserFound) {
        throw new AppError('Category not found', 404);
    }

    categoryUserFound.isAvailable = false;

    await categoryUserFound.save();
};

const updateCategory = async (category) => {
    const { userId, categoryId, category_name } = category;

    if (!userId || !categoryId || !category_name) {
        throw new AppError('Mandatory data is missing', 400);
    }

    const userFound = await User.findOne({ where: { id: userId , isAvailable: true} });

    if (!userFound) {
        throw new AppError('User not found', 404);
    }

    const categoryFound = await Category.findOne({ where: { id: categoryId , isAvailable: true} });

    if (!categoryFound) {
        throw new AppError('Category not found', 404);
    }

    const categoryUserFound = await CategoryUser.findOne({
        where: { userId: userId, categoryId: categoryId },
    });

    if (!categoryUserFound) {
        throw new AppError('Category not found', 404);
    }

    categoryFound.category_name = category_name;

    await categoryFound.save();
};

module.exports = {
    create,
    findAll,
    findAllByUserId,
    deleteCategory,
    updateCategory,
};