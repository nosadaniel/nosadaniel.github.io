import { projects } from "../src/content/projects";

const urls = new Set<string>();
for (const project of projects) {
  for (const link of project.links) {
    if (link.href.startsWith("http")) urls.add(link.href);
  }
}

let hasFailure = false;

for (const url of urls) {
  try {
    const response = await fetch(url, { method: "HEAD", redirect: "follow" });
    if (!response.ok && response.status !== 405) {
      console.error(`FAIL (${response.status}): ${url}`);
      hasFailure = true;
    } else {
      console.log(`OK: ${url}`);
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`FAIL (network error): ${url} - ${message}`);
    hasFailure = true;
  }
}

if (hasFailure) {
  console.error("\nOne or more project links are unreachable.");
  process.exit(1);
}
