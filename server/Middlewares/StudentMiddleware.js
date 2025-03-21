const z = require('zod');

export const StudentValidation = z.object({
    Registration_No: z.string(),
    Name: z.string(),
    Class: z.string(),
    Roll_No: z.number(),
    contact_number: z.string(),
})