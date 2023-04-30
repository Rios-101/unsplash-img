import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./../Context";

const Gallery = () => {
  // const response = useQuery({
  //   queryKey:["search"],
  //   queryFn:async()=>{
  //     const data = await axios.get(`https://api.unsplash.com/search/collections?client_id=_TtWfqer8BHaBPryryLDqrCvS_TzDUonom9VbopUJtg&page=1&query=dog`)
  //     return data
  //   }
  // })

  const { search } = useGlobalContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["search", search],
    queryFn: async () => {
      const data = await axios.get(
        `https://api.unsplash.com/search/collections?client_id=${import.meta.env.VITE_KEY_ID}&per_page=50&page=1&query=${search}`
      );
      return data;
    },
  });
  let response = data?.data?.results;
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  }

  if (data.data.results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found</h4>
      </section>
    );
  }


  return (
    <section className="image-container">
      {response.map((ele) => {
        return (
          <img
            key={ele.id}
            src={ele.preview_photos[0].urls.regular}
            alt={ele.cover_photo.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
