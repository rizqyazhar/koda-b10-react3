import Card from "./components/Card";
import Form from "./components/Form";
import Input from "./components/Input";
import { useState, useEffect } from "react";

export default function App() {
  const [datas, setDatas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setDatas(data.results));
  }, []);

  const filteredData = datas.filter((item) =>
    item.name.toLowerCase().includes(inputValue),
  );

  return (
    <div className='w-full min-h-dvh p-20 flex justify-center bg-linear-to-b from-emerald-100 via-white to-sky-400 scrollbar-gutter-stable'>
      <main className='w-full flex flex-col justify-center gap-10'>
        <Form>
          <h1 className='text-6xl font-medium font-griffy'>Rick & Morty</h1>
          <Input inputValue={inputValue} setInputValue={setInputValue} />
        </Form>
        <div className='w-full grid grid-cols-4 gap-4 justify-center'>
          {filteredData.map((item) => (
            <Card
              key={item.id}
              nameCharacter={item.name}
              imgUrl={item.image}
              imgAlt={item.name.toLowerCase().split(" ").join("-")}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
