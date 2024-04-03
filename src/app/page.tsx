import Header from "../components/Header";
import Content from "../components/Content";

export default function Home() {
  return (
    <main className="background-pattern min-h-screen min-w-screen flex flex-col items-center justify-center">
      <Header></Header>
      <Content></Content>
    </main>
  );
}
