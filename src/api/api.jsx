import axios from 'axios';

export async function fetchData() {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/`);
        console.log(response);


    } catch (error) {
        console.log(`Error:  ${error.message}`);

    }

}