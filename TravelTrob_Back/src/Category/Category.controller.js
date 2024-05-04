'use strict'
import Category from './Category.model.js'
import Hotel from '../Hoteles/Hotel.model.js'

export const test = (req, res) => {
    return res.send({ message: 'CATEGORY | Function Test' })
}

export const create = async (req, res) => {
    try {
        let data = req.body
        let exists = await Category.findOne({ name: data.name })
        if (exists) return res.send({ message: 'This Category Already Exist' })
        let category = new Category(data)
        await category.save()
        return res.send({
            message: 'Category Created Successfully !!',
            category,
        })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error Creating Category' })
    }
}

export const list = async (req, res) => {
    try {
        let category = await Category.find()
        return res.send({ category })
    } catch (err) {
        console.error()
    }
}

export const defaultCategory = async () => {
    try {
        const exists = await Category.findOne({ name: 'DEFAULT' })
        if (exists) return console.log('Default category already exists')
        let data = {
            name: 'DEFAULT',
            content: 'Default Category',
        }
        let category = new Category(data)
        await category.save()
        console.log('Default category has been created')
    } catch (err) {
        console.error()
    }
}

export const update = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let updatedCategory = await Category.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!updatedCategory)
            return res
                .status(404)
                .send({ message: 'Category not found, not updated' })
        return res.send({ message: 'Category updated !!', updatedCategory })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error Updating Category' })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        let { id } = req.params
        //# Validate if Exists
        let exist = await Category.findOne({_id: id})
        if(!exist)return res.status(404).send({message: 'This Category Does Not Exists'})

        //# Update Category To: 'DEFAULT'
        const defaultCategory = await Category.findOne({name: 'DEFAULT'})
        await Hotel.updateMany({categoria: id}, {categoria: defaultCategory._id})

        //# Delete Category
        let categoryDelete = await Category.findOneAndDelete({_id: id})
        if(!categoryDelete)return res.status(404).send({message: 'Category Not Found, Not deleted'})
        return res.send({ message: 'Category deleted Successfully !!' })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error deleting Category' })
    }
}
