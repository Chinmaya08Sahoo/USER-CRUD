

const { Schema, Types: { ObjectId }, model } = require("mongoose");

const schema = new Schema({
    agent: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true
    },
    policy_mode: {
        type: String,
        required: true
    },
    policy_number: {
        type: String,
        required: true
    },
    premium_amount_written: {
        type: String,
        required: false
    },
    premium_amount: {
        type: String,
        required: false
    },
    company_name: {
        type: String,
        required: false
    },
    category_name: {
        type: String,
        required: false
    },
    policy_start_date: {
        type: String,
        required: false
    },
    policy_end_date: {
        type: String,
        required: false
    },
    account_name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    account_type: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    zip: {
        type: String,
        required: false
    },
    dob: {
        type: String,
        required: false
    },
    primary: {
        type: String,
        required: false
    },
    Applicant_ID: {
        type: String,
        required: false
    },
    hasActive_ClientPolicy: {
        type: String,
        required: false
    }
});


const _model = model("Users", schema);
module.exports = _model;