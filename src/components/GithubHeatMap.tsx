import { memo, useEffect, useState, useCallback } from "react";
import GitHubCalendar from "react-github-calendar";
import { FiGitCommit, FiGitPullRequest } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

interface RepoContribution {
  contributions: {
    totalCount: number;
  };
}

function GithubHeatMap() {
  const { theme } = useTheme();
  const [stats, setStats] = useState({
    totalContributions: 0,
    totalCommits: 0,
    hasLoaded: false,
  });

  const query = `
  query {
    user(login: "Mayurwaghgpr") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
          }
        }
        commitContributionsByRepository {
          contributions {
            totalCount
          }
        } 
      }
    }
  }
`;

  const fetchGitHubData = useCallback(async () => {
    try {
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      if (!token) return;

      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const json = await res.json();
      if (!json?.data?.user) return;

      const user = json.data.user;
      const calendar = user.contributionsCollection?.contributionCalendar;
      const repos: RepoContribution[] =
        user.contributionsCollection?.commitContributionsByRepository || [];

      const totalCommits = repos.reduce(
        (acc: number, repo: RepoContribution) => acc + (repo.contributions?.totalCount || 0),
        0
      );

      setStats({
        totalContributions: calendar?.totalContributions || 0,
        totalCommits,
        hasLoaded: true,
      });
    } catch {
      // Fallback gracefully without breaking UI
    }
  }, [query]);

  useEffect(() => {
    fetchGitHubData();
  }, [fetchGitHubData]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-100">Open Source & Commit Activity</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
            Verified public contributions on GitHub (<a href="https://github.com/Mayurwaghgpr" target="_blank" rel="noreferrer" className="text-zinc-700 dark:text-zinc-300 underline underline-offset-2">@Mayurwaghgpr</a>)
          </p>
        </div>

        {stats.hasLoaded && (
          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
              <FiGitPullRequest className="text-zinc-500 dark:text-zinc-400" />
              <span className="font-bold text-zinc-900 dark:text-zinc-100">{stats.totalContributions}</span>
              <span className="text-zinc-500 dark:text-zinc-400">Contributions</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300">
              <FiGitCommit className="text-emerald-500" />
              <span className="font-bold text-zinc-900 dark:text-zinc-100">{stats.totalCommits}</span>
              <span className="text-zinc-500 dark:text-zinc-400">Commits</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-950/70 border border-zinc-200 dark:border-zinc-800/80 shadow-sm overflow-x-auto">
        <div className="min-w-[680px] flex justify-center py-2">
          <GitHubCalendar
            colorScheme={theme === "dark" ? "dark" : "light"}
            username="Mayurwaghgpr"
            blockSize={11}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(GithubHeatMap);
