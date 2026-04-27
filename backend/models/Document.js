import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: [true,'Please provide a document title'],
        trim: true
    },
    fileName: {
        type: String,
        required: true,
    },
    filePath: {
        type: String,
        required: true,
    },
    fileSize: {
        type: Number,
        required: true,
    },
    extractedText: {
        type: String,
        default: ''
    },
    chunks: [{
        content: {
            type: String,
            required: true
        },
        pageNumber: {
            type: Number,
            default: 0
        },
        chunkIndex: {
            type: Number,
            required: true
        }
    }],
    uploadDate: {
        type: Date,
        default: Date.now
    },
    lastAccessed: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['processing','ready','failded'],
        default: 'processing'
    }
},{timestamps: true});


// Indexing means Creating a data structure that helps the database find data faster
// we do indexing on the attribute for the faster access and 1 means asceding and -1 descending

documentSchema.index({userId: 1, uploadDate: -1});
const Document = mongoose.model('Document',documentSchema);

export default Document;