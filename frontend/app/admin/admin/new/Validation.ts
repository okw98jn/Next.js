import * as z from "zod"

const StoreValidation = z.object({
    name: z.string().min(1, {
        message: "名前は必須です",
    }),
    login_id: z.string().min(1, {
        message: "ログインIDは必須です",
    }),
    role: z.string().min(1, {
        message: "権限は必須です",
    }),
    status: z.string().min(1, {
        message: "ステータスは必須です",
    }),
})

export default StoreValidation