import Layout from "./Layout";

// для оверлеев и логики

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <body>
            <Layout>
                {children}
            </Layout>
        </body>
    );
};

export default PagesLayout;