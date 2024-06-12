import React from "react";
import Button from "../shared/modules/button/Button";
import IconLink from "../shared/modules/button/IconLink";
import { LuPartyPopper } from "react-icons/lu";
import IconButton from "../shared/modules/button/IconButton";
import Badge from "../shared/modules/badge/Badge";
import InputError from "../shared/modules/form/InputError";
import Input from "../shared/modules/form/Input";
import { FormProvider, useForm } from "react-hook-form";
import { required_validation } from "../shared/utils/validations";

const Test: React.FC = () => {
  const method = useForm();
  const { handleSubmit } = method;

  return (
    <section>
      <h2>Test</h2>

      <article>
        <h3>🧚Button Component</h3>
        <Button
          buttonStyle="outlined"
          color="secondary"
          size="tiny"
          clickCallback={() => alert("🔥")}
        >
          잘 나올까?
        </Button>
      </article>

      <article>
        <h3>🧚Icon Component</h3>

        <IconLink color="secondary" size="medium" text="멋진 버튼" url="#">
          <LuPartyPopper />
        </IconLink>

        <IconButton text="멋진 버튼">
          <LuPartyPopper />
        </IconButton>
      </article>

      <article>
        <h3>🧚Badge</h3>

        <Badge text="굉장히 중요한 알럿" alert color="red" />
      </article>

      <article>
        <h3>🧚Input</h3>

        <FormProvider {...method}>
          <form onSubmit={(e) => e.preventDefault()}>
            <InputError message="에러 메세지에용" />

            <Input id="foo" label="foo" placeholder="foo" name="foo" />

            <Input
              id="bar"
              label="bar"
              placeholder="bar"
              name="bar"
              validation={{ ...required_validation() }}
            />
            <button
              type="button"
              onClick={handleSubmit((data) => {
                console.log(data);
              })}
            >
              제출
            </button>
          </form>
        </FormProvider>
      </article>
    </section>
  );
};

export default Test;
