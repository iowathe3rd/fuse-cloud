"use client";

import FileCard from "@/components/filebrowser/FileCard";
import { AppstoreOutlined, BarsOutlined } from "@ant-design/icons";
import Segmented from "antd/es/segmented";
import { useState } from "react";

type FileBrowserProps = {
  title: string;
  type: "deleted" | "favorites" | "all";
};

export default function FileBrowser({ title, type }: FileBrowserProps) {
  const [displayType, setDisplayType] = useState<"grid" | "list">("grid");

  return (
    <>
      <div className="flex justify-between items-center pb-4 mb-4 border-b border-border ">
        <h1 className="h1-semibold">{title}</h1>
        <Segmented
          options={[
            { value: "grid", icon: <BarsOutlined /> },
            { value: "list", icon: <AppstoreOutlined /> },
          ]}
          value={displayType}
          onChange={setDisplayType}
        />
      </div>

      {displayType === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {Array.from([0, 1, 2, 3, 4, 5])?.map((value) => {
            return <FileCard key={value} />;
          })}
        </div>
      ) : undefined}
    </>
  );
}
