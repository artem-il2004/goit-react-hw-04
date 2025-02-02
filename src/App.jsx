import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from "./components/Loader/Loader";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMassage from './components/ErrorMassage/ErrorMassage';
import CustomModal from './components/ImageModal/ImageModal'; 

function App() {
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); 

  const handleImageClick = (image) => {
    setSelectedImage(image); 
  };

  const closeModal = () => {
    setSelectedImage(null); 
  };

  const accessKey = "bw3QZmXz-5_eoE4qHympcDLtK-WHfQECIscbYjt4ALk";

  useEffect(() => {
    if (!inputValue) return;

    async function fetchData() {
      setLoading(true);
      setError(false);
      try {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
          params: {
            client_id: accessKey,
            query: inputValue,
            page: page,
            per_page: 10,
          }
        });
        if (page === 1) {
          setResults(response.data.results);
        } else {
          setResults(prevResults => [...prevResults, ...response.data.results]);
        }
      }
      catch (error) {
        setError(true);
        console.log(error);
      }
      finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [inputValue, page]);

  const formSub = e => {
    e.preventDefault();
    const value = e.target.elements.inputField.value;
    if (!value.trim()) {
      setError(true);
      return;
    }
    setInputValue(value);
    setPage(1);
  }

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  }

  return (
    <>
      <SearchBar formSub={formSub} />
      {loading && <Loader />}
      {error && <ErrorMassage />}
      {results.length > 0 && (
        <ImageGallery results={results} onImageClick={handleImageClick} /> 
      )}
      {results.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}

      {/* Модальне вікно */}
      {selectedImage && (
        <CustomModal isOpen={!!selectedImage} onRequestClose={closeModal}>
          <img src={selectedImage.urls.regular} alt={selectedImage.alt_description} />
          <p>{selectedImage.description}</p>
        </CustomModal>
      )}
    </>
  );
}

export default App;