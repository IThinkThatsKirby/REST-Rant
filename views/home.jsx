const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Home page</h1>
                <div>
                    <img src="/images/cheesePizza.jpg" alt="IS CHEESE PIZZA" />
                    <div>
                        Photo by <a href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Torres</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                {/*  redudant since i want a nav bar to be the same across all pages also use bootstrap for this */}
                <nav id="homeBtn">
                    <a  href="/places">
                        <button className="btn-primary">Places Page</button>
                    </a>
                </nav>
            </main>
        </Def>
    )
}

module.exports = home