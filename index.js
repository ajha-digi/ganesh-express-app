const app = require("express")();
const cors = require("cors");
const PORT = process.env.PORT || 5000

app.use(cors());

app.get("/test", (req, res)=>{
    res.json({
        success: true,
        data :[1,2,3,4]
    })
});

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})