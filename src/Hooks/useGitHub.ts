import React from "react";
import { graphql } from "@octokit/graphql";
import Constants from "expo-constants";
import { GraphQlResponse } from "@octokit/graphql/dist-types/types";

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
const useGitHub = () => {
  const [repos, setRepos] = React.useState();
  const [languages, setLanguages] = React.useState<string[]>();
  const [activities, setActivities] = React.useState();

  const [respAny, setRespAny] = React.useState();

  const reqAny = React.useCallback(
    () =>
      graphql(
        `
          query {
            __type(name: "Language") {
              name
              fields {
                name
                type {
                  name
                  kind
                }
              }
            }
          }
        `,
        {
          number_of_repos: 20,
          headers: {
            authorization: `Bearer ${Constants.expoConfig?.extra?.github_token}`,
          },
        }
      )
        .then((r) => setRespAny(r))
        .catch((e) => setRespAny(e)),
    []
  );

  const reqActivities = React.useCallback(
    () =>
      GitHub.rest.repos
        .listActivities({
          mediaType: {
            format: "raw",
          },
          owner: "AndreaMolinari",
          repo: "aMolinari",
        })
        .then((r) => setActivities(r.data)),
    []
  );

  // posso fare una query che trova nome cognome e luogo dall'account e scriverlo in home

  const reqLang = React.useCallback(
    (): GraphQlResponse<unknown> =>
      graphql(
        `
          query {
            viewer {
              repositories(last: 100) {
                nodes {
                  name
                  languages(first: 10) {
                    nodes {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
        {
          headers: {
            authorization: `Bearer ${Constants.expoConfig?.extra?.github_token}`,
          },
        }
      ).then((r) => {
        const repositories = r.viewer.repositories.nodes;

        // Creare un oggetto per tenere traccia del conteggio dei linguaggi
        const languageCounts: any = {};

        // Iterare attraverso i repository e conteggiare i linguaggi utilizzati
        repositories.forEach((repository) => {
          repository.languages.nodes.forEach((language) => {
            const languageName = language.name;
            if (languageCounts[languageName]) {
              languageCounts[languageName]++;
            } else {
              languageCounts[languageName] = 1;
            }
          });
        });

        // Convertire l'oggetto di conteggio in un array ordinato per il linguaggio più usato
        const sortedLanguages = Object.keys(languageCounts).sort((a, b) => {
          return languageCounts[b] - languageCounts[a];
        });
        setLanguages(sortedLanguages);
      }),
    []
  );

  const reqRepositos = React.useCallback(
    (): GraphQlResponse<unknown> =>
      graphql(
        `
          query ($number_of_repos: Int!) {
            viewer {
              name
              repositories(last: $number_of_repos) {
                nodes {
                  name
                  description
                  url
                  latestRelease {
                    name
                  }
                  defaultBranchRef {
                    name
                    target {
                      ... on Commit {
                        history(first: 1) {
                          edges {
                            node {
                              oid
                              message
                              author {
                                name
                                email
                                date
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        {
          number_of_repos: 20,
          headers: {
            authorization: `Bearer ${Constants.expoConfig?.extra?.github_token}`,
          },
        }
      ).then((r) => {
        if (r.viewer.repositories.nodes) {
          setRepos(
            r.viewer.repositories.nodes
            // .map((i) => i.name)
          );
        }
      }),
    []
  );

  return {
    reqRepositos,
    reqLang,
    reqActivities,
    activities,
    repos,
    languages,
    respAny,
    reqAny,
  };
};

export default useGitHub;
