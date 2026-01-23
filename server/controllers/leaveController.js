import Leave from "../models/leave.js";



const addLeave = async (req, res) => {
    try {
        const { leaveType, startDate, endDate, reason } = req.body;

        const newLeave = new Leave({
            leaveType,
            startDate,
            endDate,
            reason
        });

        await newLeave.save();

        return res.status(200).json({
            success: true,
            message: "Leave added successfully"
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            error: "Leave add server error"
        });
    }
}

const getLeave = async (req,res) =>{
    try {
        const {id} = req.params;
        const leave = await Leave.findById({_id: id})
        res.status(200).json({success:true, leave})
    } catch (error) {
        res.status(500).json({success:false, error: "get leave server erorr"})
    }

}


export { addLeave, getLeave }