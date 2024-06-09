import { useState } from "react";
import { Button, Container } from "@mui/material";
import styles from "./XTable.module.css";

export default function XTable() {
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
  ]);

  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.date === b.date) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setData(sortedData);
  };

  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.views - a.views;
    });
    setData(sortedData);
  };

  return (
    <>
      <Container className={styles.container}>
        <h1>Date and Views Table</h1>
        <Button
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "lightgreen",
            color: "white",
            buttonShadow: "none",
            buttonHoverStyle: { backgroundColor: "blue", opacity: 1 },
          }}
          onClick={sortByDate}
        >
          Sort by Date
        </Button>
        <Button
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "lightgreen",
            color: "white",
            buttonShadow: "none",
            buttonHoverStyle: { backgroundColor: "blue", opacity: 1 },
          }}
          onClick={sortByViews}
        >
          Sort by Views
        </Button>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Date</th>
              <th>Views</th>
              <th>Article</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
