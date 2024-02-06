import connectDB from './utils/db';
import { app } from './app';
require("dotenv").config();
import {v2 as cloudinary} from 'cloudinary';
                    
cloudinary.config({ 
  cloud_name: 'dtb4snn8c', 
  api_key: '769487575521444', 
  api_secret: 'JooYvCzSL2SF-TXnIykhR655Zfo' 
});


//criar servidor
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
});