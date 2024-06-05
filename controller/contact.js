const contact=require('../module/contact')
const validator = require('validator');
const { v4: uuidv4 } = require('uuid')
//signup api 
exports.contact = async (req, res) => {
    const { firstname,lastname,number,email,message } = req.body;
    try {
        // Check if the email already exists
if(!firstname||!lastname||!number||!email||!message){
    return res.status(400).json({error:'all fileds are require'});
}

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
        }

        if (!validator.isAlpha(firstname.replace(/\s/g, '')||!validator.isAlpha(lastname.replace(/\s/g, '')|| !validator.isAlpha(description.replace(/\s/g,''))))) {
            return res.status(400).json({ message: 'Invalid name format' });
          }
          if (!validator.isNumeric(number.toString()) || number.toString().length !== 10) {
            return res.status(400).json({ message: 'Invalid number format. Must be 10 digits' });
          }
        // Your existing validation code...
        const userId = uuidv4();

        const newUser = new contact({
            _id: userId,
           firstname, lastname,number ,email,message
           
        });

        const result = await newUser.save();
        res.json({ message: 'form submmited successfully' });

    } catch (err) {
        console.error('Error saving user to database:', err);
        res.status(500).json({ error: 'Error saving user to database' });
    }
};

