import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/slices/postsSlice";
import { RootState, AppDispatch } from "../../redux/store";
import { Table } from "antd";

const PostsList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 100, 
    },
    {
      title: "Trận đấu",
      dataIndex: "match",
      key: "match",
      width: 150,
    },
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
      width: 150,
    },
    {
      title: "Đội 1",
      dataIndex: "team1",
      key: "team1",
      width: 150,
    },
    {
      title: "Đội 2",
      dataIndex: "team2",
      key: "team2",
      width: 150,
    },
    {
      title: "Giải đấu",
      dataIndex: "tournament",
      key: "tournament",
      width: 200,
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "24px", background: "#f0f2f5" }}>
      <h1>Thực tập Alta</h1>
      <Table
        dataSource={posts}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default PostsList;
