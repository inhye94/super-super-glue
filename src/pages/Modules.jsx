import React, { useState } from "react";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import { FiAlertCircle } from "react-icons/fi";
import Badge from "../components/Badge";
import Input from "../components/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  required_validation,
  num_validation,
  minlength_validation,
  kr_en_validation,
  special_validation,
  only_kr_validation,
} from "../utils/validations";
import FileInput from "../components/FileInput";
import ContentWrapper from "../components/ContentWrapper";

export default function Modules() {
  return (
    <ContentWrapper title="👻 모듈 페이지에용">
      <ButtonSection />
      <BadgeSection />
      <FormSection />
    </ContentWrapper>
  );
}

function SectionWrapper({ children, title }) {
  return (
    <section className="flex flex-col gap-y-[24px] p-[16px] bg-[#efefef] rounded-md">
      {title && (
        <h3 className="p-y-[12px] mb-[24px] text-[24px] font-extrabold text-[#333]">
          🍟 {title} 🍟
        </h3>
      )}

      {children}
    </section>
  );
}

function FlexBox({ children, subtitle }) {
  return (
    <div>
      {subtitle && <h4 className="mb-[12px] text-[#aaa]">- {subtitle}</h4>}

      <div className="flex gap-x-[8px] gap-y-[16px] items-center flex-wrap md:flex-nowrap">
        {children}
      </div>
    </div>
  );
}

function ButtonSection() {
  return (
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
        <IconButton icon={<FiAlertCircle />} text="버튼이에용" color="black" />

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

        <IconButton icon={<FiAlertCircle />} text="버튼이에용" color="orange" />

        <IconButton icon={<FiAlertCircle />} text="버튼이에용" color="yellow" />

        <IconButton icon={<FiAlertCircle />} text="버튼이에용" color="green" />

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

      <FlexBox subtitle="icon-button | size">
        <IconButton icon={<FiAlertCircle />} text="버튼이에용" />
        <IconButton icon={<FiAlertCircle />} text="버튼이에용" size="medium" />
        <IconButton icon={<FiAlertCircle />} text="버튼이에용" size="small" />
      </FlexBox>
    </SectionWrapper>
  );
}

function BadgeSection() {
  return (
    <SectionWrapper title="뱃지">
      <FlexBox subtitle="text">
        <Badge text="삐뽀삐뽀" />
        <Badge text="삐뽀삐뽀" color="red" />
        <Badge text="삐뽀삐뽀" color="green" />
      </FlexBox>

      <FlexBox subtitle="icon | alert">
        <Badge text="삐뽀삐뽀" alert />
        <Badge text="삐뽀삐뽀" color="red" alert />
        <Badge text="삐뽀삐뽀" color="green" alert />
      </FlexBox>

      <FlexBox subtitle="icon | check">
        <Badge text="삐뽀삐뽀" check />
        <Badge text="삐뽀삐뽀" color="red" check />
        <Badge text="삐뽀삐뽀" color="green" check />
      </FlexBox>

      <FlexBox subtitle="icon | close">
        <Badge text="삐뽀삐뽀" close />
        <Badge text="삐뽀삐뽀" color="red" close />
        <Badge text="삐뽀삐뽀" color="green" close />
      </FlexBox>
    </SectionWrapper>
  );
}

function FormSection() {
  const methods = useForm({ ..._initValue });
  // const methods = useForm();
  const [_success, setSuccess] = useState(false);

  const handleSubmitEvent = methods.handleSubmit((data) => {
    console.log(data);
    // methods.reset();
    setSuccess(true);
  });

  // 초기값
  // useEffect(() => {
  //   methods.setValue("password", "쉿 비밀이야", {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //   });
  //   methods.setValue("name", "푸바오", {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //   });
  //   methods.setValue("age", 454545, {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //   });
  //   methods.setValue("address", "에버랜드", {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //   });
  //   methods.setValue("pick", "아쿠아리움", {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //   });
  //   methods.setValue("bear", "팬더", {
  //     shouldDirty: true,
  //     shouldValidate: true,
  //   });
  // }, [methods]);

  return (
    <FormProvider {...methods}>
      <form
        className="form"
        noValidate
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
        {/* 타입 (text, radio, checkbox, select) */}
        <SectionWrapper title="폼">
          <FlexBox subtitle="text | 선택과 필수">
            <Input
              id="password"
              name="password"
              label="선택"
              placeholder="비밀번호(선택)"
            />

            <Input
              id="name"
              name="name"
              label="필수"
              placeholder="이름(필수)"
              validation={{ ...required_validation() }}
            />
          </FlexBox>

          <FlexBox subtitle="text | 유효성 검사 (숫자, 한글, 영어, 특수문자)">
            <Input
              id="age"
              name="age"
              label="숫자입력"
              placeholder="나이(필수, 숫자만, 6자 이상 10자 이하)"
              maxLength="10"
              validation={{
                ...required_validation(),
                ...num_validation(),
                ...minlength_validation(6),
              }}
            />

            <Input
              id="address"
              name="address"
              label="한글과 영어"
              placeholder="주소(필수, 한글과 영어)"
              validation={{
                ...required_validation(),
                ...kr_en_validation(),
              }}
            />

            <Input
              id="pick"
              name="pick"
              label="한글, 영어, 특수문자(-_&만 허용)"
              placeholder="pick(필수, 특수문자)"
              validation={{
                ...required_validation(),
                ...special_validation(),
              }}
            />

            <Input
              id="bear"
              name="bear"
              label="한글만 허용"
              placeholder="bear(필수, 한글만)"
              validation={{
                ...required_validation(),
                ...only_kr_validation(),
              }}
            />
          </FlexBox>

          <FlexBox subtitle="text | disabled">
            <Input
              id="normal"
              name="normal"
              label="normal"
              placeholder="normal"
            />

            <Input
              id="disabled"
              name="disabled"
              label="disabled"
              placeholder="disabled"
              disabled
            />
          </FlexBox>

          <FlexBox subtitle="file">
            <FileInput
              id="file"
              name="file"
              label="단일 이미지"
              limitSize="1"
              validation={{ ...required_validation() }}
            />

            <FileInput
              id="multipleFile"
              name="multipleFile"
              label="다중 이미지"
              limitCount="5"
              limitSize="1"
              validation={{ ...required_validation() }}
            />
          </FlexBox>

          <FlexBox subtitle="controls">
            <Button type="submit" clickCallback={handleSubmitEvent}>
              submit
            </Button>
            <Button
              buttonStyle="outlined"
              clickCallback={() => {
                // methods.setValue(
                //   "test",
                //   {
                //     password: "쉿 비밀이야",
                //     name: "푸바오",
                //     age: 454545,
                //   },
                //   { shouldDirty: true }
                // );

                methods.setValue("password", "쉿 비밀이야", {
                  shouldDirty: true,
                  shouldValidate: true,
                });
                methods.setValue("name", "푸바오", {
                  shouldDirty: true,
                  shouldValidate: true,
                });
                methods.setValue("age", 454545, {
                  shouldDirty: true,
                  shouldValidate: true,
                });
                methods.setValue("address", "에버랜드", {
                  shouldDirty: true,
                  shouldValidate: true,
                });
                methods.setValue("pick", "아쿠아리움", {
                  shouldDirty: true,
                  shouldValidate: true,
                });
                methods.setValue("bear", "팬더", {
                  shouldDirty: true,
                  shouldValidate: true,
                });
              }}
            >
              setValue
            </Button>

            <Button
              buttonStyle="outlined"
              clickCallback={() => {
                methods.trigger(undefined, { shouldFocus: true });
              }}
            >
              trigger
            </Button>
          </FlexBox>
        </SectionWrapper>
      </form>
    </FormProvider>
  );
}

const _initValue = {
  defaultValues: {
    password: "공식적인 비밀번호",
    name: "박빙구",
    age: 232323,
    address: "당신의 마음속",
    pick: "눈동자에 치얼스",
    bear: "곰돌",
  },
};
