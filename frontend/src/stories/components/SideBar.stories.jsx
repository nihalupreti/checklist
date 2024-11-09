import SideBar from "../../components/SideBar";

export default {
  title: "Example/navbar",
  component: SideBar,
};

const Template = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "Nihal Upreti",
  pendingTodo: 3,
};
