"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res, next) => {
    return res.status(200).json({
        code: 200,
        message: 'WellCome to Test API',
    });
});
exports.default = router;
