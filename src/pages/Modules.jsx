import React from "react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import { FiAlertCircle } from "react-icons/fi";

export default function Modules() {
  return (
    <div className="flex flex-col gap-y-[64px]">
      <h2 className="p-[16px] text-[24px] font-extrabold text-[#333] bg-[#efefef] rounded-md">
        👻 모듈 페이지에용
      </h2>

      <SectionWrapper title="버튼">
        <FlexBox subtitle="primary">
          <Button>Primary 버튼이에용</Button>
          <Button buttonStyle="outlined">Primary 버튼이에용</Button>
          <Button buttonStyle="ghost">Primary 버튼이에용</Button>
        </FlexBox>

        <FlexBox subtitle="secondary">
          <Button color="secondary">Secondary 버튼이에용</Button>
          <Button color="secondary" buttonStyle="outlined">
            Secondary 버튼이에용
          </Button>
          <Button color="secondary" buttonStyle="ghost">
            Secondary 버튼이에용
          </Button>
        </FlexBox>

        <FlexBox subtitle="tertiary">
          <Button color="tertiary">Tertiary 버튼이에용</Button>
          <Button color="tertiary" buttonStyle="outlined">
            Tertiary 버튼이에용
          </Button>
          <Button color="tertiary" buttonStyle="ghost">
            Tertiary 버튼이에용
          </Button>
        </FlexBox>

        <FlexBox subtitle="size">
          <Button>default 버튼이에용</Button>
          <Button size="medium">medium 버튼이에용</Button>
          <Button size="small">small 버튼이에용</Button>
          <Button size="tiny">tiny 버튼이에용</Button>
        </FlexBox>

        <FlexBox subtitle="rounded">
          <Button>default 버튼이에용</Button>
          <Button rounded="round">rounded 버튼이에용</Button>
        </FlexBox>

        <FlexBox subtitle="icon-button | color">
          <IconButton
            icon={<FiAlertCircle />}
            text="버튼이에용"
            color="black"
          />

          <IconButton
            icon={<FiAlertCircle />}
            text="버튼이에용"
            color="primary"
          />

          <IconButton
            icon={<FiAlertCircle />}
            text="버튼이에용"
            color="secondary"
          />

          <IconButton
            icon={<FiAlertCircle />}
            text="버튼이에용"
            color="tertiary"
          />

          <IconButton
            icon={<FiAlertCircle />}
            text="버튼이에용"
            color="orange"
          />

          <IconButton
            icon={<FiAlertCircle />}
            text="버튼이에용"
            color="yellow"
          />

          <IconButton
            icon={<FiAlertCircle />}
            text="버튼이에용"
            color="green"
          />

          <IconButton icon={<FiAlertCircle />} text="버튼이에용" color="pink" />
        </FlexBox>

        <FlexBox subtitle="icon-button | type">
          <IconButton icon={<FiAlertCircle />} text="버튼이에용" />

          <IconButton
            icon={<FiAlertCircle />}
            text="링크에용"
            tag="link"
            url="/"
          />
        </FlexBox>
      </SectionWrapper>
    </div>
  );
}

function SectionWrapper({ children, title }) {
  return (
    <section className="flex flex-col gap-y-[24px] p-[16px] bg-[#efefef] rounded-md">
      <h3 className="p-y-[12px] mb-[24px] text-[24px] font-extrabold text-[#333]">
        🍟 {title} 🍟
      </h3>

      {children}
    </section>
  );
}

function Subtitle({ children }) {
  return <h4 className="mb-[12px] text-[#aaa]">- {children}</h4>;
}

function FlexBox({ children, subtitle }) {
  return (
    <div>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}

      <div className="flex gap-x-[8px] gap-y-[16px] flex-wrap md:flex-nowrap">
        {children}
      </div>
    </div>
  );
}
