import TodoCard from "../../components/TodoCard";

export default {
  title: "Example/Button",
  component: TodoCard,
};

const Template = (args) => <TodoCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Go to Gym",
  due: "Today",
};
