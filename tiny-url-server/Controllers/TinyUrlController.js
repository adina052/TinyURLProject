import TinyUrlModel from "../Models/TinyUrlModel.js"
import { v4 as uuidv4 } from 'uuid';


const PORT=3001;
const TinyUrlController = {
    addTinyUrl: async (req, res) => {
        const { longUrl } = req.body;
        let shortUrl = uuidv4().slice(0, 6); // Generate a short alias
        const newTinyUrl = new TinyUrlModel({ longUrl, shortUrl });
        try {
            await newTinyUrl.save();
            console.log('URL saved:', newTinyUrl.shortUrl); 
            res.json({ shortUrl: newTinyUrl.shortUrl }); 
        }
        catch (e) {
            res.status(400).json({ message: e.message })
            console.log('error')
        }
    },
    redirectTinyUrl: async (req, res) => {
        console.log('redirect') 
        const shortUrl=req.query.shortUrl
        console.log('req.query:'+shortUrl)
        try {
            const tinyUrl = await TinyUrlModel.findOne({shortUrl:shortUrl});
            if (tinyUrl) {
                res.redirect(tinyUrl.longUrl);
                console.log('longUrl:'+tinyUrl.longUrl)
            } 
            else {
                res.status(404).json({ error: 'URL not found' });
            }
        }
        catch (e) {
            res.status(500).json({ message: e.message })
        }
    },
}
export default TinyUrlController;