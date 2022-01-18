import {
  Article,
  Checkbox,
  DateInput,
  Document,
  Fieldset,
  FieldsetLegend,
  FormField,
  FormLabel,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  OrderedList,
  OrderedListItem,
  Paragraph,
  RadioButton,
  Separator,
  Surface,
  Textarea,
  TextInput,
  UnorderedList,
  UnorderedListItem,
  URL,
} from "../src/components";

export default function ReactComponents() {
  return (
    <>
      <Document>
        <Surface>
          <Article>
            <Heading1>H1</Heading1>
            <Heading2>H2</Heading2>
            <Heading3>H3</Heading3>
            <Heading4>H4</Heading4>
            <Heading5>H5</Heading5>
            <Heading6>H6</Heading6>
            <Paragraph lead>Lead Paragraph</Paragraph>
            <Paragraph>Paragraph</Paragraph>
            <UnorderedList>
              <UnorderedListItem>
                unordered list item
                <UnorderedList nested>
                  <UnorderedListItem>nested unordered list item</UnorderedListItem>
                </UnorderedList>
              </UnorderedListItem>
            </UnorderedList>
            <OrderedList>
              <OrderedListItem>ol li</OrderedListItem>
            </OrderedList>
            <Separator />
            <Fieldset>
              <FieldsetLegend>Fieldset + Legend</FieldsetLegend>
              <FormField>
                <FormLabel htmlFor="textinput">Text input</FormLabel>
                <TextInput id="textinput"></TextInput>
              </FormField>
              <FormField>
                <FormLabel htmlFor="textarea">Text area</FormLabel>
                <Textarea id="textarea"></Textarea>
              </FormField>
              <FormField>
                <FormLabel htmlFor="radio-button">Radio button</FormLabel>
                <RadioButton id="radio-button" value=""></RadioButton>
              </FormField>
              <FormField>
                <FormLabel htmlFor="checkbox">checkbox</FormLabel>
                <Checkbox id="checkbox"></Checkbox>
              </FormField>
              <FormField>
                <FormLabel htmlFor="dateinput">Date input</FormLabel>
                <DateInput id="dateinput"></DateInput>
              </FormField>
            </Fieldset>
          </Article>
        </Surface>
      </Document>
    </>
  );
}
