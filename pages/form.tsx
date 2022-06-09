import DatePicker from "@gemeente-denhaag/datepicker";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Document,
  FormField,
  FormLabel,
  Heading2,
  Page,
  PageContent,
  RadioButton,
  Separator,
  Textbox,
} from "../src/components";

const ButtonGroup: React.FC = ({ children }) => <div className="utrecht-button-group">{children}</div>;

interface FormData {
  [index: string]: string;
}

export default function Form() {
  let [formData, setFormData] = useState<FormData | null>(null);
  let defaultDate = "2020-09-04";
  // let date = "2020-09-04";
  // const handleDateChange: FormEventHandler<HTMLInputElement> = (evt) => {
  //   console.log(evt, (evt.target as HTMLInputElement)?.value);
  //   if (typeof (evt.target as HTMLInputElement).value === "string") {
  //     date = (evt.target as HTMLInputElement).value;
  //   }
  // };
  // const handleDateCustomChange = (evt: Event) => {
  //   console.log(evt, (evt.target as HTMLInputElement)?.value);
  //   if (typeof (evt.target as HTMLInputElement).value === "string") {
  //     date = (evt.target as HTMLInputElement).value;
  //   }
  // };
  const {
    handleSubmit,
    register,
    watch,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      date: "2020-09-04",
      option: "A",
    },
  });
  const onSubmit = (data: FormData) => {
    setFormData(data);
    console.log(data);
  };
  const date = watch("date");

  return (
    <>
      <Document>
        <Page>
          <PageContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField className="denhaag-theme">
                <FormLabel htmlFor="date1">Date 1</FormLabel>
                <DatePicker id="date1" {...register("date", { required: true })} />
              </FormField>
              <FormField>
                <FormLabel htmlFor="date2">Date 2</FormLabel>
                <input type="date" id="date2" {...register("date", { required: true })} />
              </FormField>
              <p>Date: {date}</p>
              <FormField>
                <FormLabel htmlFor="date3">Date 3</FormLabel>
                <Textbox id="date3" {...register("date2")} />
              </FormField>
              <FormField>
                <FormLabel htmlFor="X">Option A</FormLabel>
                <RadioButton {...register("option")} />
              </FormField>
              <FormField>
                <FormLabel htmlFor="X">Option b</FormLabel>
                <RadioButton {...register("option")} />
              </FormField>
              <Button type="submit">Send</Button>
            </form>
            <Separator />
            {/*
        <FormField>
          <FormLabel htmlFor="date2">Date 2</FormLabel>
          <input type="date" name="date2" id="date2" defaultValue={defaultDate} onInput={handleDateChange} />
        </FormField>
        <FormField>
          <FormLabel htmlFor="date3">Date 3</FormLabel>
          <Textbox name="date3" id="date3" defaultValue={defaultDate} onInput={handleDateChange} />
        </FormField>
        <FormField>
          <FormLabel htmlFor="X">Option A</FormLabel>
          <RadioButton name="choice" value="A" />
        </FormField>
        <FormField>
          <FormLabel htmlFor="X">Option b</FormLabel>
          <RadioButton name="choice" value="B" />
        </FormField>
        <Separator />
        <dl>
          <dt>date</dt>
          <dd>{date}</dd>
        </dl>
      */}
            {formData && (
              <section>
                <Heading2>We have received the following data</Heading2>
                <dl>
                  <div>
                    <dt>Date</dt>
                    <dd>{formData.date}</dd>
                  </div>
                  <div>
                    <dt>Option</dt>
                    <dd>{formData.option}</dd>
                  </div>
                </dl>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      setFormData(null);
                    }}
                  >
                    Reset
                  </Button>
                </ButtonGroup>
              </section>
            )}
          </PageContent>
        </Page>
      </Document>
    </>
  );
}
