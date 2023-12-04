import * as z from "zod"

const StoreValidation = z.object({
    name: z.string().min(2, {
        message: "名前2文字以上です",
    }),
})

export default StoreValidation