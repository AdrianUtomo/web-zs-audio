'use client'
import { useState, useEffect } from "react";
import data from "../data/fileList.json";
import Header from "../components/Header";
import Content from "../components/Content";
import PaginationSection from "@/components/PaginationSection";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentSpeakers = data.slice(firstItemIndex, lastItemIndex);
  return (
    <main className="background-pattern min-h-screen min-w-screen flex flex-col items-center justify-around">
      <Header></Header>
      <Content currentSpeakers={currentSpeakers}></Content>
      <PaginationSection
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
}
