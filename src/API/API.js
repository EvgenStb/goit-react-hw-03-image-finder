

 const API = 'https://pixabay.com/api/';
 const API_KEY = '33318346-5c821774d449e8ad1afbe9b17';



const FetchData = async (request,page) => {
    const data = await fetch(
      `${API}?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    const response = await data.json()
    return response;
    }




export { FetchData };