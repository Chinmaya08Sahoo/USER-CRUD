const { Types: { ObjectId } } = require('mongoose')
module.exports = {
    getAll: async (model, condition) => {
        try {
            if (condition._id) {
                condition._id = new ObjectId(condition._id)
            }
            const Model = require(`../models/${model}.model`)
            const result = await Model.find(condition).exec()
            return JSON.parse(JSON.stringify(result))
        } catch (error) {
            throw error
        }
    },
    insertMany: async (model, data) => {
        try {
            const Model = require(`../models/${model}.model`);
            const result = await Model.insertMany(data);
            return JSON.parse(JSON.stringify(result))
        } catch (error) {
            throw error
        }
    },
    saveData: async (model, reqData) => {
        try {
            const Model = require(`../models/${model}.model`)
            const data = new Model(reqData)
            const result = await data.save();
            return JSON.parse(JSON.stringify(result))
        } catch (error) {
            throw error
        }
    },

    getById: async (model, id) => {
        try {
            const Model = require(`../models/${model}.model`)
            const _result = Model.findById(id)
            const result = await _result.exec()
            return result
        } catch (error) {
            throw error
        }
    },

    updateDataById: async (model, id, data) => {
        try {
            const Model = require(`../models/${model}.model`)
            const result = await Model.findByIdAndUpdate(id, data, { new: true})
            return JSON.parse(JSON.stringify(result))
        } catch (error) {
            throw error
        }
    },

    deleteById: async (model, condition) => {
        try {
            const Model = require(`../models/${model}.model`)
            const result = await Model.deleteOne(condition)
            return JSON.parse(JSON.stringify(result))
        } catch (error) {
            throw error
        }
    },

}