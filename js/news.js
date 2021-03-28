let templateObjectsNews = [
    {
        template: '#news-buttons-handlebars-template',
        context: {
            "newsButtons": [
                {
                    "button-id": "apache-airflow-news-button",
                    "target-modal": "apache-airflow-modal",
                    "button-text": "Apache Airflow <b>2.0</b> is finally here!"
                },
                {
                    "button-id": "julia-pkg-news-button",
                    "target-modal": "julia-pkg-modal",
                    "button-text": "Julia has a new <b><i>Pkg</i></b> Manager"
                },
                {
                    "button-id": "apache-spark-news-button",
                    "target-modal": "apache-spark-modal",
                    "button-text": "A Sneak Peek into Apache Spark <b>3.0</b>"
                },
            ]
        },
        target: '#news-buttons'
    },
    {
        template: '#modals-handlebars-template',
        context: {
            "modals": [
                {
                    "modal-id": "apache-airflow-modal",
                    "modal-title": "Apache Airflow <b>2.0</b> is finally here!",
                    "modal-content":
                        `
                        <article>
                            <p>
                                <b>The wait is over</b> - Apache Airflow 2.0 is officially here, and we bring you the
                                latest on the new features & capabilities that ship with it.
                            </p>
                            <p>
                                The full changelog is about 3,000 lines long (already excluding everything backported to
                                1.10), so for now we shall simply share some of the major features in 2.0.0 compared to
                                1.10.14:
                            </p>
                            <ol>
                                <li>
                                    <h6>A new way of writing dags: the TaskFlow API</h6>
                                </li>
                                <li>
                                    <h6>Fully specified REST API</h6>
                                </li>
                                <li>
                                    <h6>Massive Scheduler performance improvements</h6>
                                </li>
                                <li>
                                    <h6>Scheduler is now HA compatible</h6>
                                </li>
                                <li>
                                    <h6>Task Groups</h6>
                                </li>
                                <li>
                                    <h6>Refreshed UI</h6>
                                </li>
                                <li>
                                    <h6>Smart Sensors for reduced load from sensors</h6>
                                </li>
                                <li>
                                    <h6>Simplified KubernetesExecutor</h6>
                                </li>
                            </ol>
                            <p>
                                For more information, please watch the following video, which explains the
                                aforementioned changes in greater detail:
                            </p>
                        </article>
                        <div class="video-container">
                            <iframe class="video"
                                    src="https://www.youtube.com/embed/znowFIBK1lk"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                            </iframe>
                        </div>
                        `
                },
                {
                    "modal-id": "julia-pkg-modal",
                    "modal-title": "Julia has a new <b><i>Pkg</i></b> Manager",
                    "modal-content":
                        `
                        <article>
                            <p>
                                Pkg is a complete rewrite of Julia's old package manager[1] and was released together
                                with Julia v1.0. Unlike traditional package managers, which install and manage a single
                                global set of packages, Pkg is designed around “environments”: independent sets of 
                                packages that can be local to an individual project or shared and selected by name. 
                                The exact set of packages and versions in an environment is captured in a manifest file 
                                which can be checked into a project repository and tracked in version control, 
                                significantly improving reproducibility of projects. 
                                If you’ve ever tried to run code you haven’t used in a while only to find that you can’t 
                                get anything to work because you’ve updated or uninstalled some of the packages your 
                                project was using, you’ll understand the motivation for this approach.
                                In Pkg, since each project maintains its own independent set of package versions, you’ll
                                never have this problem again. Moreover, if you check out a project on a new system, you
                                can simply materialize the environment described by its manifest file and immediately be 
                                up and running with a known-good set of dependencies.
                            </p>
                            <p>
                                Since environments are managed and updated independently from each other, “dependency
                                hell” is significantly alleviated in Pkg. 
                                If you want to use the latest and greatest version of some package in a new project but 
                                you’re stuck on an older version in a different project, that’s no problem – since they 
                                have separate environments they can just use different versions, which are both 
                                installed at the same time in different locations on your system.
                                The location of each package version is canonical, so when environments use the same
                                versions of packages, they can share installations, avoiding unnecessary duplication of
                                the package. Old package versions that are no longer used by any environments are
                                periodically “garbage collected” by the package manager.
                            </p>
                            <p>
                                Pkg’s approach to local environments may be familiar to people who have used Python’s
                                virtualenv or Ruby’s bundler. In Julia, instead of hacking the language’s code loading
                                mechanisms to support environments, we have the benefit that Julia natively understands
                                them. In addition, Julia environments are “stackable”: you can overlay one environment
                                with another and thereby have access to additional packages outside of the primary
                                environment.
                                This makes it easy to work on a project, which provides the primary environment, while
                                still having access from the REPL to all your usual dev tools like profilers, debuggers, 
                                and so on, just by having an environment including these dev tools later in the load path.
                            </p>
                            <p>
                                Last but not least, Pkg is designed to support federated package registries. This means
                                that it allows multiple registries managed by different parties to interact seamlessly. 
                                In particular, this includes private registries which can live behind corporate firewalls.
                                You can install and update your own packages from a private registry with exactly the same
                                tools and workflows that you use to install and manage official Julia packages. If you
                                urgently need to apply a hotfix for a public package that’s critical to your company’s product,
                                you can tag a private version of it in your company’s internal registry and get a fix to
                                your developers and ops teams quickly and easily without having to wait for an upstream patch
                                to be accepted and published. Once an official fix is published, however, you can just
                                upgrade your dependencies and you'll be back on an official release again.
                            </p>
                        </article>
                        <div class="video-container">
                            <iframe class="video"
                                    src="https://www.youtube.com/embed/76KL8aSz0Sg"
                                    title="YouTube video player" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                            </iframe>
                        </div>
                        `
                },
                {
                    "modal-id": "apache-spark-modal",
                    "modal-title": "A Sneak Peek into Apache Spark <b>3.0</b>",
                    "modal-content":
                        `
                        <article>

                        </article>
                        <div class="video-container">
                            <iframe class="video"
                                    src="https://www.youtube.com/embed/g-qZslQsOuE" title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen>
                            </iframe>
                        </div>
                        `
                }
            ]
        },
        target: '#modals'
    },
]

let templateNews;
let templateScriptNews;
let contextNews;
let htmlNews;

for (const templateObject of templateObjectsNews) {
    templateNews = $(templateObject.template).html();
    templateScriptNews = Handlebars.compile(templateNews);
    contextNews = templateObject.context
    htmlNews = templateScriptNews(contextNews);
    $(templateObject.target).append(htmlNews);
}