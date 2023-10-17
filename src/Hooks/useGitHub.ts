import React from "react";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const apiUrl = "https://api.github.com/users/AndreaMolinari/repos";

const useGitHub = (accessToken: string) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const [repos, setRepos] = React.useState<any[]>([]);

  const reqRepositos = React.useCallback(
    () =>
      fetch(apiUrl, {
        headers,
      })
        .then((response) => response.json().then((r) => setRepos(r)))
        .then((data) => {
          // Ora puoi elaborare i dati delle tue repository e mostrarli sul tuo frontend
        })
        .catch((error) => {
          console.error("Errore nella richiesta API: ", error);
        }),
    [accessToken]
  );

  return {
    reqRepositos,
    repos,
  };
};

export default useGitHub;
