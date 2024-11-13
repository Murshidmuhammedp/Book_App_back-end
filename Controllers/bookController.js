import bookjoi from "../JoiValidation/bookValidation.js";
import Books from "../Models/bookSchema.js";

// Create a new Books

export const bookCreate = async (req, res, next) => {
    try {
        const { value, error } = bookjoi.validate(req.body);
        
        if (error) {
            return res.status(409).json({ Details: error, });
        };

        const { title, author, description } = value

        const newBook = new Books({
            title,
            author,
            description,
        });

        await newBook.save();

        return res.status(201).json({ message: "Book added successfully", data: newBook });

    } catch (error) {
        console.error("Error creating book:", error);
    }
}

// Get the all Book

export const getAllBook = async (req, res, next) => {
    try {

        const book = await Books.find();
        return res.status(200).json({ message: "Data fetched", data: book })
    } catch (error) {
        console.error("Error fetching book:", error);
    }
}

// Get a specific book by ID

export const getBookById = async (req, res, next) => {
    try {
        const Id = req.params.Id;

        if (!Id) {
            return res.status(404).json({ message: "Id not provided" });
        };

        const book = await Books.findById(Id);
        if (!book) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        return res.status(200).json({ success: true, data: book });
    } catch (error) {
        console.error("Error fetching book:", error);

    }
}

// Delete a book by ID

export const deleteBook = async (req, res, next) => {
    try {

        const Id = req.params.id;
        if (!Id) {
            return res.status(404).json({ message: "Id not provided" });
        };
        const deleteBook = await Books.findByIdAndDelete(Id);

        if (!deleteBook) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }
        return res.status(200).json({ success: true, message: "Book deleted successfully" });

    } catch (error) {
        console.error("Error deleting book:", error);
    }
}

