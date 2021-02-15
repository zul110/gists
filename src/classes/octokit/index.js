import { Octokit } from "@octokit/rest";

// A singleton class that contains the Octokit utilitis (getting public gists, according to the requirements)
class OctokitUtils {
    // Initializes the instance
    constructor() {
        try {
            if(!OctokitUtils.instance) {
                OctokitUtils.instance = this;
            }

            this.init();

            return OctokitUtils.instance;
        } catch(err) {
            throw err;
        }
    }

    // Initializes Octokit
    init() {
        try {
            const octokit = new Octokit();

            this.octokit = octokit;
        } catch(err) {
            throw err;
        }
    }

    // Gets and stores public gists in the instance
    async getPublicGists() {
        try {
            if(!this.gists) {
                this.gists = await this.octokit.gists.list();
            }

            return this.gists.data;
        } catch(err) {
            throw err;
        }
    }

    // Gets and stores public gists for a user
    async getPublicGistsForUser(username) {
        try {
            const gists = await this.octokit.gists.listForUser({ username });

            return gists.data;
        } catch(err) {
            throw err;
        }
    }
}

// Initializes an instance of the class to be exported as a singleton object
const instance = new OctokitUtils();

export default instance;