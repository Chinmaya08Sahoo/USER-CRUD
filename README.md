# USER-CRUD
This is simple crud operations for user and upload api's

## Pllease follow the Below Steps

### step - 1
open the terminal and run "npm install" command.
It will install all the dependency packages

### step - 2
now run npm start command, It will make the node application in running condtion

## To Upload Data
### step - 3
Now we will upload the csv/xlsx file with user data
end point - http://localhost:7500/UPLOAD,
method - post,
filename - csvfile

while hitting this api the filename key should be csvfile, otherwise it will give you error

## To Get All Users Data
### step - 4
Now after uploading all the data
To get All the user data from data base
end point - http://localhost:7500/USER/ALL,
method - get
It will give you all the users data

## To Get One User Data
### step - 5
To get the particular one user data
endpoint - http://localhost:7500/USER/:userId
method - get
Here instead of ":userId" enter the particular id which u recieve in get all userdata api
You will get the particular single user data 


## To Create a New User
### step - 6
Now to create new user record
endpoint - http://localhost:7500/USER/CREATE,
method - post
request body example - 
{
    "agent": "test agent",
    "userType": "Active Client",
    "policy_mode": "1342",
    "policy_number": "sdfghj",
    "premium_amount_written": "",
    "premium_amount": "1180.83",
    "company_name": "Integon Gen Ins Corp",
    "category_name": "Commercial Auto",
    "policy_start_date": "2018-11-02",
    "policy_end_date": "2019-11-02",
    "account_name": "Lura Lucca & Owen Dodson",
    "email": "madler@yahoo.ca",
    "gender": "",
    "city": "MOCKSVILLE",
    "account_type": "Commercial",
    "address": "170 MATTHIAS CT",
    "state": "NC",
    "zip": "27028",
    "dob": "1960-02-11",
    "primary": ""
}

It will create the user


## To Update A User Data
### step  - 7
To update the particular user record
endpoint - http://localhost:7500/USER/UPDATE,
method - post
Example Of request Body- 

{
    "agent": "test agent once more",
    "userType": "Active Client",
    "policy_mode": "1342",
    "policy_number": "sdfghj",
    "premium_amount_written": "",
    "premium_amount": "1180.83",
    "company_name": "Integon Gen Ins Corp",
    "category_name": "Commercial Auto",
    "policy_start_date": "2018-11-02",
    "policy_end_date": "2019-11-02",
    "account_name": "Lura Lucca & Owen Dodson",
    "email": "madler@yahoo.ca",
    "gender": "",
    "city": "MOCKSVILLE",
    "account_type": "Commercial",
    "address": "170 MATTHIAS CT",
    "state": "NC",
    "zip": "27028",
    "dob": "1960-02-11",
    "primary": "",
    "_id": "64ce7f3cdbf4ca0e7a59fe6t"
}

It will update the particular user record data

## To Delete A User
### step  - 8
To delete a particular user
endpoint - http://localhost:7500/USER/DELETE
method  - post
Example Request Body - 
{
    "id": "64ce7f1bdbf4ca0e7a59f9bc"
}

instead of this example id, please pass the particular user id to get desired result...

