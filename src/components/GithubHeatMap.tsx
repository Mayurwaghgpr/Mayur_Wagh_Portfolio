import { memo, useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

function GithubHeatMap() {
  const [stats, setStats] = useState({
    totalContributions: 0,
    totalCommits: 0,
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
          repository {
            name
            url
          }
          contributions {
            totalCount
          }
        } 
      }
    }
  }
`;

  const fetchGitHubData = async () => {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await res.json();
    console.log(json);
    const user = json.data.user;
    const calendar = user.contributionsCollection.contributionCalendar;
    const totalCommits =
      user.contributionsCollection.commitContributionsByRepository.reduce(
        (acc: number, repo: any) => acc + repo.contributions.totalCount,
        0
      );

    setStats({
      totalContributions: calendar.totalContributions,
      totalCommits,
    });
  };
  useEffect(() => {
    fetchGitHubData();
  }, []);
  return (
    <div className=" space-y-5">
      <h2 className="text-2xl font-semibold">GitHub Activity</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center mb-6">
        <div className="flex items-center gap-3 text-nowrap">
          <p className="text-sm">{stats.totalContributions}</p>
          <p className="text-gray-500 text-sm"> Total Contribution</p>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm">{stats.totalCommits}</p>
          <p className="text-gray-500 text-sm">Total Commits</p>
        </div>
      </div>
      <div className="p-5 rounded-lg border">
        <GitHubCalendar
          colorScheme="dark"
          username="Mayurwaghgpr"
          blockSize={10}
          blockMargin={4}
        />
      </div>
    </div>
  );
}

export default memo(GithubHeatMap);
