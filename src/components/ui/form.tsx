import * as React from "react";
import { useSendEmail } from "@/hooks/mutations/use-send-email";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  ContactFormSchema,
  ContactFormValues,
} from "@/pages/contact/contact-form-schema";

export function ContactForm() {
  const { mutate, isPending } = useSendEmail();
  const { toast } = useToast();

  const [formLibs, setFormLibs] = React.useState<any>(null);
  const [formMethods, setFormMethods] = React.useState<any>(null);

  // Lazy load das libs pesadas
  const loadLibs = async () => {
    if (formLibs) return;

    const [
      rhf,
      formModule,
      inputModule,
      textareaModule,
      buttonModule,
      labelModule,
      slotModule,
      zodModule,
    ] = await Promise.all([
      import("react-hook-form"),
      import("@/components/ui/form"),
      import("@/components/ui/input"),
      import("@/components/ui/textarea"),
      import("@/components/ui/button"),
      import("@radix-ui/react-label"),
      import("@radix-ui/react-slot"),
      import("@hookform/resolvers/zod"),
    ]);

    const form = rhf.useForm({
      resolver: zodModule.zodResolver(ContactFormSchema),
      defaultValues: { name: "", email: "", message: "" },
    });

    setFormLibs({
      ...formModule,
      Input: inputModule.Input,
      Textarea: textareaModule.Textarea,
      Button: buttonModule.Button,
      LabelPrimitive: labelModule.Root,
      Slot: slotModule.Slot,
    });

    setFormMethods(form);
  };

  // Trigger lazy load ao interagir ou aparecer na viewport
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadLibs();
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  if (!formLibs || !formMethods) {
    return (
      <div
        ref={containerRef}
        className="py-8 text-center"
        onMouseEnter={loadLibs}
        onTouchStart={loadLibs}
      >
        Carregando formulário...
      </div>
    );
  }

  const {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    Input,
    Textarea,
    Button,
  } = formLibs;

  function onSubmit(data: ContactFormValues) {
    mutate(data, {
      onSuccess: () => {
        formMethods.reset();
        toast({
          title: "Sucesso!",
          description: "Mensagem enviada com sucesso.",
        });
      },
      onError: (error: Error) => {
        formMethods.reset();
        toast({
          title: "Erro!",
          description: `Falha ao enviar mensagem: ${error.message}`,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <Form {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={formMethods.control}
          name="name"
          render={({ field, fieldState }: any) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite seu nome"
                  className={cn(
                    fieldState.error && "border-red-600 dark:border-red-600"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="email"
          render={({ field, fieldState }: any) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Digite seu email"
                  className={cn(
                    fieldState.error && "border-red-600 dark:border-red-600"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={formMethods.control}
          name="message"
          render={({ field, fieldState }: any) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite sua mensagem..."
                  className={cn(
                    "resize-none h-32",
                    fieldState.error && "border-red-600 dark:border-red-600"
                  )}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={isPending}
            aria-label="Enviar Contato"
          >
            {isPending ? "enviando..." : "enviar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
