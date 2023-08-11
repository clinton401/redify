import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Content from "./components/Content/Content";

function App() {
  // const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const [searchParams, setSearchParams] = useState("");
  useEffect(() => {
    const names = ["popular", "latest", "news"];
    const random = Math.floor(Math.random() * names.length);
    setSearchParams(names[random]);
  }, []);

  useEffect(() => {
    axios
      .get(`https://www.reddit.com/search.json?q=${searchParams}`)
      .then((res) => {
        // console.log(
        //   res.data.data.children[0].data.all_awardings[0].resized_static_icons
        // [0].url);

        setData(res.data.data.children);
        // setUrl(data.data.url_overridden_by_dest);
      })
      .catch((err) => console.log(err.message));
  }, [searchParams]);


  // console.log(data);
  // console.log(url);
  return (
    <div className="App">
      <Navbar
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        setloading={setloading}
      />
      <Content
        data={data}
        searchParams={searchParams}
        loading={loading}
        setloading={setloading}
        setSearchParams={setSearchParams}
      />
      {/* <div>
        {data.map((p) => (
          <ul key={p.data.id}>
            <h1>{p.data.title}</h1>
            <img src={p.data.url_overridden_by_dest} alt="" />
            <p>Num of comments: {p.data.num_comments}</p>
          </ul>
        ))}
      </div> */}
    </div>
  );
}

export default App;
