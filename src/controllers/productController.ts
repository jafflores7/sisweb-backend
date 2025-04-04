import { RequestHandler, Request, Response } from "express";
import { Product } from "../models/product";

// Create and Save a new Product
//Create new product
export const createProduct: RequestHandler = (req :Request, res: Response) => {
    //Validate request
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    // Save Product in the database
    const product = { ...req.body };
    Product.create(product)
    .then((data: Product | null) => {
        res.status(200).json({
            status: "success",
            message: "Product successfully created",
            payload: data,
        });
    })
    .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened creating a product. " + err.message,
            payload: null,
        });
    });
};

 
// Retrieve all Products from the database.
// Get all products using Promises
export const getAllProducts: RequestHandler = (req: Request, res: Response) => {
    //Calling the Sequelize findAll method. This is the same that a SELECT * FROM PRODUCT in a SQL query.
   
    Product.findAll()
    .then((data: Product[]) => {
        return res.status(200).json({
            status: "success",
            message: "Products successfully retrieved",
            payload: data,
        });
    })
    .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all products. " + err.message,
            payload: null,
            });
    });
};





// Find a single Product with an id
    /// Get products by Id
export const getProductById: RequestHandler = (req: Request, res: Response) => {
    Product.findByPk(req.params.id)
    .then((data: Product | null) => {
        return res.status(200).json({
            status: "success",
            message: "Products successfully retrieved",
            payload: data,
        });
    })
    .catch((err) => {
        return res.status(500).json({
            status: "error",
            message: "Something happened retrieving all products. " + err.message,
            payload: null,
        });
    });
};


   


// Update a Product by the id in the request
///Modify product
export const modifyProduct:RequestHandler = (req: Request, res: Response) => {
    // Validate request
    if (!req.body) {
        res.status(400).json({
            status: "error",
            message: "Content can not be empty.",
            payload: null,
        });
    }
    // Save Product in the database
    Product.update({ ...req.body }, { where: { id: req.params.id } })
    .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "success",
                message: "Product successfully updated",
                payload: { ...req.body },
            });
        } 
        else {
            return res.status(500).json({
                status: "error",
                message: "Something happened updating the product. ",
                payload: null,
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            status: "error",
            message: "Something happened updating a product. " + err.message,
            payload: null,
        });
    });
};

// Delete a Product with the specified id in the request
///Delete product
export const deleteProduct: RequestHandler = async (req: Request,res: Response) => {
    const { id } = req.body;
    try {
        await Product.destroy({ where: { id } });
        res.status(200).json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting products",
            error,
        });
    }
};

