import { z } from "zod";

export const orderSchema = z.object({
  address: z.string().trim().nonempty("Поле адресса не может быть пустым"),
  payment: z.enum(["online", "cash"], { error: "Выберите способ оплаты" }),
});
