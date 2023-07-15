import axios from "axios";

export const LoadBlog = async () => 
      axios
        .get("https://cloud.codesupply.co/endpoint/react/data.json")
        .then((response) => response.data)
        
        .catch((error) => {
          console.log(error);
        });