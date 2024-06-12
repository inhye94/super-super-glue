import React from "react";
import Button from "../shared/modules/button/Button";

const Test: React.FC = () => {
  return (
    <section>
      <h2>Test</h2>

      <div>
        <Button
          buttonStyle="outlined"
          color="secondary"
          size="tiny"
          clickCallback={() => alert("🔥")}
        >
          잘 나올까?
        </Button>
      </div>
    </section>
  );
};

export default Test;
