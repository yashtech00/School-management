import z from 'zod'

export const StudentValidation = (req, res, next) => {
    //define the schema for student validation 
    const Schema = z.object({
        Registration_number: z.string(),
        Name: z.string(),
        Class: z.string(),
        Roll_No: z.number(),
        contact_number: z.string(),
    })
    
    //validate the request body against schema
    const result = Schema.safeParse(req.body);

    
    if (!result.success) {
        //if validation fail, it will return bad request response  
        return res.status(401)
        .json("Bad request")
    }
    // if validation passes, call the next middleware
    next();
}