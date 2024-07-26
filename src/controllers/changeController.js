import { makeChanges, readFileFromGitHub } from "../services/gitService.js";
export const makeCodeChanges = async (req, res) => {
    const { codeChanges, commitMessage, githubToken, owner, repo, baseBranch, featureBranch, } = req.body;
    try {
        console.log('here hit');
        const pullRequestUrl = await makeChanges(owner, repo, baseBranch, featureBranch, codeChanges, commitMessage, githubToken);
        res.json({ message: 'Pull request created successfully', url: pullRequestUrl });
    }
    catch (error) {
        // @ts-ignore
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'An error occurred while processing your request.', message: error });
    }
};

export const readCode = async (req, res) => {
    const {githubToken, owner, repo, filePath } = req.body;
    try {
        const pullRequestUrl = await readFileFromGitHub(
          owner,
          repo,
          filePath,
          githubToken
        );

        res.json({ message: 'Reading successfully', content: pullRequestUrl });
    }
    catch (error) {
        // @ts-ignore
        console.error(`Error: ${error.message}`);
        res.status(500).json({ error: 'An error occurred while processing your file.', message: error });
    }
};
