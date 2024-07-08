import { useSearchParams } from "react-router-dom";
import loader from '../components/pokemonSearch.jsx'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
    <div>
        <div className="flex flex-col w-[40%] p-3 m-auto">
            <label className="text-sm py-2">Input Name Here</label>
            <input className="bg-blue-500 border-2 border-gray-600 rounded-lg" id="pokemonInput"></input>
        </div>

        <div onClick={() => {
            const params = new URLSearchParams();
            params.set("pokemon", document.getElementById("pokemonInput").value );
            setSearchParams(params, {
                preventScrollReset: true,
            });
        }
        } className="flex justify-center p-1 gap-2 m-auto">
            <button onClick={loader} className="w-[10%] rounded-lg bg-red-500 border-2 border-gray-600">Fetch 'mon</button>
        </div>

        <div className="flex justify-center" id="pokemonName">{}</div>
        <img className="flex justify-center" src="" alt="Pokemon Sprite" id="pokemonSprite"></img>
        <div className="flex justify-center" id="pokemonStats">Stats will go here</div>


    </div>
    )
}

export default Search