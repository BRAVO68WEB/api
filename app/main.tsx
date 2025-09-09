import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

interface SiteData {
    title: string;
    children?: unknown;
}

const Layout = (props: SiteData) => html`
    <!DOCTYPE html>
            <html>
                    <head>
                            <title>${props.title}</title>
                            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                            <meta name="color-scheme" content="dark light" />
                            <style>
                                body {
                                    background: #181a20;
                                    color: #eaeaea;
                                    margin: 0;
                                    min-height: 100vh;
                                }
                                a {
                                    color: #6cb4ff;
                                    text-decoration: none;
                                    transition: color 0.2s;
                                }
                                a:hover {
                                    color: #ffb86c;
                                    text-decoration: underline;
                                }
                                ::selection {
                                    background: #333a;
                                }
                            </style>
                    </head>
                    <body>
                            ${props.children}
                    </body>
            </html>
`;

const Content = (props: { siteData: SiteData; name: string, reqId: string }) => (
    <Layout {...props.siteData}>
        <div style={{
            maxWidth: "600px",
            margin: "2rem auto",
            padding: "2rem",
            borderRadius: "12px",
            background: "#23262f",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            fontFamily: "sans-serif",
            color: "#eaeaea",
        }}>
            <h1 style={{ color: "#eaeaea", textAlign: "center" }}>{props.name} 🚀 </h1>
            <p style={{ textAlign: "center", fontSize: "1.1em" }}>
                Welcome to the API powering <a href="https://b68.dev" target="_blank" rel="noopener noreferrer">b68.dev</a>.<br />
            </p>
            <h3 style={{ marginTop: "2rem", color: "#ffb86c" }}>Source Code</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
                Github Repository: <a href="https://github.com/bravo68web/api" target="_blank" rel="noopener noreferrer">BRAVO68WEB/api</a>
            </ul>
            <div style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.95em", color: "#b0b0b0" }}>
                <p>
                    Questions? Reach out on <a href="https://twitter.com/bravo68web" target="_blank" rel="noopener noreferrer">Twitter</a>.
                </p>
            </div>

            <div style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.95em", color: "#fff" }}>
                Request ID:
                <p style={{ fontFamily: "monospace", marginTop: "0.5rem", wordBreak: "break-all", background: "#000", padding: "0.5rem", borderRadius: "8px" }}>{props.reqId || 'N/A'}</p>
            </div>
        </div>
    </Layout>
);

app.get("/", c => {
    if (!c.req.header("accept")?.includes("text/html")) {
        return c.json({ message: "Welcome to the B68 API. Visit https://github.com/bravo68web/api for more info." });
    }

    const reqId = c.get('requestId');
    const name = "B68 API";
    const props = {
        name: name,
        siteData: {
            title: "B68 API",
        },
        reqId
    };
    
    return c.html(<Content {...props} />);
});

export default app;
