import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  message: z.string().min(5, "Mensagem muito curta"),
});

export type ContactFormValues = z.infer<typeof ContactFormSchema>;
