"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.modifyProduct = exports.getProductById = exports.getAllProducts = exports.createProduct = void 0;
// Create and Save a new Product
const createProduct = (req, res) => {
};
exports.createProduct = createProduct;
// Retrieve all Products from the database.
const getAllProducts = (req, res) => {
};
exports.getAllProducts = getAllProducts;
// Find a single Product with an id
const getProductById = (req, res) => {
};
exports.getProductById = getProductById;
// Update a Product by the id in the request
const modifyProduct = () => __awaiter(void 0, void 0, void 0, function* () {
});
exports.modifyProduct = modifyProduct;
// Delete a Product with the specified id in the request
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteProduct = deleteProduct;
