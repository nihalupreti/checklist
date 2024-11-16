import AddTodo from "../../components/AddTodo";

export default {
  title: "Example/AddTodo",
  component: AddTodo,
};

const Template = (args) => <AddTodo {...args} />;

export const Primary = Template.bind({});
