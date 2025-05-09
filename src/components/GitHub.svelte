<script lang="ts">
  import { onMount } from "svelte";
  import { type GitHubRepository } from "$lib/GitHubTypes";
  import { type Repository } from "$lib/customTypes.ts";

  let projects: Repository[] = [];
  let loading: boolean = true;
  let error: string | null = null;

  const GITHUB_STORAGE_KEY: string = "GitHubData";
  const FETCH_INTERVAL: number = 1800000; // 30 minutes
  const GITHUB_BASE_URL: string = "https://api.github.com";

  onMount(async () => {
    try {
      const storedLastUpdate = localStorage.getItem(
        `${GITHUB_STORAGE_KEY}_LastUpdate`,
      );
      const storedData = localStorage.getItem(GITHUB_STORAGE_KEY);
      let shouldFetch = false;

      if (!storedLastUpdate) {
        shouldFetch = true;
      } else if (Date.now() - parseInt(storedLastUpdate) >= FETCH_INTERVAL) {
        shouldFetch = true;
      }

      if (shouldFetch) {
        projects = await getGitHubData();
        localStorage.setItem(GITHUB_STORAGE_KEY, JSON.stringify(projects));
        localStorage.setItem(
          `${GITHUB_STORAGE_KEY}_LastUpdate`,
          Date.now().toString(),
        );
      } else if (storedData) {
        projects = JSON.parse(storedData);
      }
    } catch (err) {
      error = (err as Error).message;
    } finally {
      loading = false;
    }
  });

  async function getGitHubData(): Promise<Repository[]> {
    const response = await fetch(`${GITHUB_BASE_URL}/users/wh4ky/repos`);
    if (!response.ok) {
      throw new Error(`GitHub response ${response.status}`);
    }
    const repoData: GitHubRepository[] = await response.json();
    let returnData: Repository[] = [];

    for (const project of repoData) {
      const response = await fetch(project.languages_url);
      if (!response.ok) {
        throw new Error(`GitHub response ${response.status}`);
      }
      const rawLanguageData: { [language: string]: number } =
        await response.json();
      let languageData: { [language: string]: string } = {};
      let langTotal: number = 0;

      for (const language of Object.entries(rawLanguageData)) {
        langTotal += Number(language[1]);
      }
      for (const language of Object.entries(rawLanguageData)) {
        languageData[language[0]] = ((Number(language[1]) / langTotal) * 100)
          .toFixed(1)
          .toString();
      }

      returnData.push({
        full_name: project.full_name,
        name: project.name,
        owner: project.owner,
        description: project.description,
        url: project.html_url,
        languages: languageData,
        license: project.license
          ? {
              name: project.license.name,
              url: project.license.url,
            }
          : undefined,
      });
    }

    return returnData;
  }
</script>

<div class="flex justify-center min-w-screen p-4 bg-base-100">
  <div class="carousel carousel-center rounded-box p-4 space-x-4">
    {#if loading}
      <p class="text-center text-gray-400">Loading projects...</p>
    {:else if error}
      <p class="text-center text-error">Error loading projects: {error}</p>
    {:else if projects.length === 0}
      <p class="text-center text-gray-400">No projects found.</p>
    {:else}
      {#each projects as project}
        <div class="carousel-item w-[300px]">
          <div
            class="card-body rounded-lg shadow-lg bg-base-300 transition-transform transform hover:scale-105 min-h-[200px] p-4"
          >
            <a href={project.url} class="block">
              <h3 class="card-title text-lg font-semibold text-white">
                {project.owner.login}/<span class="text-primary text-2xl"
                  >{project.name}</span
                >
              </h3>
            </a>
            <p class="text-md text-gray-300">{project.description}</p>
            <div
              class="flex items-end justify-between mt-2 text-xs text-gray-400"
            >
              <p>License: {project.license ? project.license.name : "none"}</p>
              <p>
                {#each Object.entries(project.languages) as [key, value]}
                  {value}% {key}<br />
                {/each}
              </p>
            </div>
          </div>
        </div>
      {/each}
    {/if}
  </div>
</div>
