import Greetings from "../../components/Greetings";

export default {
  title: "Example/greetings",
  component: Greetings,
};

const Template = (args) => <Greetings {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  userName: "Nihal Upreti",
  date: "wed 6 july 2024",
};
