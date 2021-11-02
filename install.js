const get = function(url) {
  const responses = [];
  const requests = [];
  for (let i = 1; i <= 1; i++) {
    const prom = fetch(url).then((r) => r.json());

    requests.push(prom);
  }
  return new Promise((resolve) => {
    Promise.all(requests)
      .then((proms) =>
        proms.forEach((p) => pokemons.push({
          name: p.name,
          id: p.id
        }))
      )
      .then(() => resolve(responses));
  });
};
