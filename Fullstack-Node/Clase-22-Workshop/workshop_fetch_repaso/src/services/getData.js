const baseURL = 'https://rickandmortyapi.com/api';


const getCharacter = async(id) => {
    const res = await fetch(`${baseURL}/character/${id}`);
    const data = await res.json();
    return data;
}

const getCharacters = async(page) => {
    try {
        const res = await fetch(`${baseURL}/character/?page=${page}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error + "AAAAAAA");
    }

}

export { getCharacter, getCharacters };