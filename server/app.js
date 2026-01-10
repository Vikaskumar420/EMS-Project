import express from'express'
import cors from 'cors'
import authRouter from './routes/auth.js'
import departmentRouter from './routes/department.js'
import employeeRouter from './routes/employee.js'
import connectToDb from './db/db.js'
import salaryRouter from './routes/salary.js'

connectToDb()
const app= express();
app.use(cors());
app.use(express.json());
app.use(express.static('public/uploads'))
app.use("/api/auth",authRouter)
app.use("/api/department", departmentRouter)
app.use("/api/employee", employeeRouter)
app.use("/api/salary", salaryRouter)


app.use(express.urlencoded({extended:true}));

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("server is running mode!");
    
});