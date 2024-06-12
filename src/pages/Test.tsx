import React from "react";
import Button from "../shared/modules/button/Button";
import IconLink from "../shared/modules/button/IconLink";
import { LuPartyPopper } from "react-icons/lu";
import IconButton from "../shared/modules/button/IconButton";
import Badge from "../shared/modules/badge/Badge";

const Test: React.FC = () => {
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
    </section>
  );
};

export default Test;
