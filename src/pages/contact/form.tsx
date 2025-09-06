import { useState, useEffect } from "react";
import { useSendEmail } from "@/hooks/mutations/use-send-email";
import { useToast } from "@/hooks/use-toast";
import { ContactFormSchema, ContactFormValues } from "./contact-form-schema";
import type { ControllerRenderProps, ControllerFieldState } from "react-hook-form";

export function ContactForm() {
  const { mutate, isPending } = useSendEmail();
  const { toast } = useToast();

  // Lazy-load das libs do formulário
  const [formLibs, setFormLibs] = useState<{
    Form?: any;
    FormControl?: any;
    FormField?: any;
    FormItem?: any;
    FormLabel?: any;
    FormMessage?: any;
    Input?: any;
    Textarea?: any;
    useForm?: any;
    zodResolver?: any;
    Button?: any;
  }>({});

  const loadLibs = async () => {
    if (formLibs.Form) return; // libs já carregadas

    const [
      formModule,
      inputModule,
      textareaModule,
      zodModule,
      buttonModule,
    ] = await Promise.all([
      import("@/components/ui/form"),
      import("@/components/ui/input"),
      import("@/components/ui/textarea"),
      import("@hookform/resolvers/zod"),
      import("@/components/ui/button"),
    ]);

    const rhf = await import("react-hook-form");

    setFormLibs({
      ...formModule,
      ...inputModule,
      ...textareaModule,
      zodResolver: zodModule.zodResolver,
      useForm: rhf.useForm,
      Button: buttonModule.Button,
    });
  };

  // Cria o form usando lazy libs
  const form = formLibs.useForm?.({
    resolver: formLibs.zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Trigger para carregar libs quando usuário interage
  useEffect(() => {
    if (!formLibs.Form) loadLibs();
  }, []);

  if (!formLibs.Form || !form) {
    return (
      <div
        onMouseEnter={loadLibs}
        onTouchStart={loadLibs}
        className="py-8 text-center"
      >
        Carregando formulário...
      </div>
    );
  }

  const {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Input,
    Textarea,
    Button,
  } = formLibs;

  function onSubmit(data: ContactFormValues) {
    mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          title: "Sucesso!",
          description: "Mensagem enviada com sucesso.",
        });
      },
      onError: (error: Error) => {
        form.reset();
        toast({
          title: "Erro!",
          description: `Falha ao enviar mensagem: ${error.message}.`,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Nome */}
        <FormField
          control={form.control}
          name="name"
          render={({
            field,
            fieldState,
          }: {
            field: ControllerRenderProps<ContactFormValues, "name">;
            fieldState: ControllerFieldState;
          }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu nome"
                  className={fieldState.error ? "border-red-600 dark:border-red-600" : ""}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({
            field,
            fieldState,
          }: {
            field: ControllerRenderProps<ContactFormValues, "email">;
            fieldState: ControllerFieldState;
          }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  className={fieldState.error ? "border-red-600 dark:border-red-600" : ""}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Mensagem */}
        <FormField
          control={form.control}
          name="message"
          render={({
            field,
            fieldState,
          }: {
            field: ControllerRenderProps<ContactFormValues, "message">;
            fieldState: ControllerFieldState;
          }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite sua mensagem..."
                  className={`resize-none h-32 ${
                    fieldState.error ? "border-red-600 dark:border-red-600" : ""
                  }`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center">
          <Button aria-label="Enviar Contato" type="submit" disabled={isPending}>
            {isPending ? "enviando..." : "enviar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
