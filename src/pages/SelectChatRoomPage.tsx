import React from "react";
import Layout from "./layouts/Layout";
import SubTitle from "./parts/Title/SubTitle";

const SelectChatRoomPage = () => {
  return (
    <Layout>
      <SubTitle>チャット選択ページ</SubTitle>
      <div>
        <div className="border-t-2 py-3">
          <p>JavaScriptについて話そう！</p>
        </div>
        <div className="border-t-2">
          <p>Goについて話そう！</p>
        </div>
        <div className="border-t-2">
          <p>Reactについて話そう！</p>
        </div>
        <div className=" w-full bg-gray-200 h-0.5"></div>
      </div>
    </Layout>
  );
};

export default SelectChatRoomPage;
