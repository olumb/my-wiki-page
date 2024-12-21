const siteContent = {
    "index.html": {
        title: "Home",
        content: "Welcome to the home page of our wiki site. Here you can find all information about embedded systems."
    },
    "about.html": {
        title: "About",
        content: "This wiki-style site was inspired by Mosaic Industries. It is designed to provide information about embedded systems and microcontrollers."
    },
    "contact.html": {
        title: "Contact",
        content: "Feel free to reach out to us via email or phone. Contact details are listed below."
    },
    "tutorials.html": {
        title: "Tutorials",
        content: "Welcome to the Tutorials section. Here, you can find step-by-step guides for various topics related to embedded systems."
    },
    "projects.html": {
        title: "Projects",
        content: "Here, you will find detailed descriptions of various embedded systems projects, including IoT solutions and automation systems."
    },
    "resources.html": {
        title: "Resources",
        content: "Explore a list of resources and tools to help you work with embedded systems, including data sheets and development kits."
    }
};

function searchSite(query) {
    const results = [];
    const lowerCaseQuery = query.toLowerCase();

    for (const page in siteContent) {
        const { title, content } = siteContent[page];
        if (title.toLowerCase().includes(lowerCaseQuery) || content.toLowerCase().includes(lowerCaseQuery)) {
            results.push({ page, title });
        }
    }

    return results;
}
