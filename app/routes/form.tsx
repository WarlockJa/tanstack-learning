import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import type { AnyFieldApi } from "@tanstack/react-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/form")({
  component: TanstackForm,
});

const userSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "Name required" })
    .max(255, { message: "Maximum length exceeded" }),
  lastName: z
    .string()
    .min(1, { message: "Last name required" })
    .max(255, { message: "Maximum length exceeded" }),
  // hobbies: z.array(z.string()),
});

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.errors ? (
        <em role="alert">
          {field.state.meta.errors.map((err) => err?.message).join(", ")}
        </em>
      ) : null}
      {/* {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em>{field.state.meta.errors.join(", ")}</em>
      ) : null}
      {field.state.meta.isValidating ? "Validating..." : null} */}
    </>
  );
}

function TanstackForm() {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      // hobbies: [],
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
      // form.reset();
    },
    validators: {
      onChange: userSchema,
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1>Simple Form Example</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="relative">
          {/* A type-safe field component*/}
          <form.Field
            name="firstName"
            children={(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <>
                  <label htmlFor={field.name}>First Name:</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <div className="absolute top-0 left-full text-nowrap">
                    <FieldInfo field={field} />
                  </div>
                </>
              );
            }}
          />
        </div>
        <div className="relative">
          <form.Field
            name="lastName"
            children={(field) => (
              <>
                <label htmlFor={field.name}>Last Name:</label>
                <input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
                <div className="absolute top-0 left-full text-nowrap">
                  <FieldInfo field={field} />
                </div>
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <Button type="submit" disabled={!canSubmit}>
              {isSubmitting ? "..." : "Submit"}
            </Button>
          )}
        />
      </form>
    </main>
  );
}
