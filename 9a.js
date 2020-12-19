const express = require("express");
const app = express();
app.use(express.json());
const { check, validationResult } = require('express-validator');
app.post('/9a', [check('val1').isNumeric(),
    check('val2').isNumeric()
], (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
    }
    let val1 = parseInt(req.body.val1);
    let op = req.body.op;
    let val2 = parseInt(req.body.val2);
    if (op === '+') {
        result = val1 + val2;
    }
    else if (op === '-') {
        result = val1 - val2;
    } else if (op === '/') {
        result = val1 / val2;
    } else if (op === '*') {
        result = val1 * val2;
    }
    res.json({ result: result });
});
app.listen(3334);