const API_KEY = import.meta.env.VITE_POKEMON_API_KEY;
const BASE_URL = "https://api.pokemontcg.io/v2";


export const searchCardsAdvanced = async ({ name, setId, number }) => {
  const qParts = [];
  if (name) qParts.push(`name:"${name}"`);
  if (setId) qParts.push(`set.id:${setId}`);
  if (number) qParts.push(`number:${number}`);

  const q = qParts.join(" ");
  const url = `${BASE_URL}/cards?q=${encodeURIComponent(q)}`;

  const response = await fetch(url, {
    headers: { "X-Api-Key": API_KEY },
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const json = await response.json();
  return json.data;
};