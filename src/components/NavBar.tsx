interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  setPokemonName: (name: string) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonName, pokemonList }: NavBarProps) {
  return  <nav>
        {pokemonList.map(p => (
          <button
            key={p.name}            
            type="button"           
            onClick={() => setPokemonName(p.name)}
          >
            {p.name}
          </button>
        ))}
      </nav>
}

export default NavBar;