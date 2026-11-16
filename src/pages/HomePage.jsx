import { useNavigate, useSearchParams } from "react-router";
import Card from "../components/Card";
import Form from "../components/Form";
import Input from "../components/Input";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [datas, setDatas] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setDatas(data.results));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value: q } = e.target.search;

    const url = new URLSearchParams({ q });

    navigate("/?".concat(url.toString({ q })));

    e.target.reset();
  };

  const params = searchParams.get("q");

  if (params === "") {
    setSearchParams("");
  }

  return (
    <div className='w-full min-h-dvh p-20 flex justify-center bg-linear-to-b from-emerald-100 via-white to-sky-400 scrollbar-gutter-stable'>
      <main className='w-full flex flex-col justify-center gap-10'>
        <Form onSubmit={handleSubmit}>
          <h1 className='text-6xl font-medium font-griffy'>Rick & Morty</h1>
          <Input />
        </Form>
        <div className='w-full grid grid-cols-4 gap-4 justify-center'>
          {!params
            ? datas.map((item) => (
                <Card
                  key={item.id}
                  nameCharacter={item.name}
                  imgUrl={item.image}
                  imgAlt={item.name.toLowerCase().split(" ").join("-")}
                />
              ))
            : datas
                .filter((item) =>
                  item.name.toLowerCase().includes(params.toLowerCase()),
                )
                .map((item) => (
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
