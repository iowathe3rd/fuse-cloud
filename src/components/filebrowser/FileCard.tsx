import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Avatar from "antd/es/avatar";
import Card from "antd/es/card";
import Meta from "antd/es/card/Meta";
import Empty from "antd/es/empty";

export default function FileCard() {
  return (
    <Card
      style={{ width: 300 }}
      cover={Empty.PRESENTED_IMAGE_DEFAULT}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
}
